// api/subscribe.js
// Función serverless de Vercel. Recibe el email del formulario del ebook,
// crea (o actualiza) el contacto en Systeme.io y le añade la etiqueta
// "lead-foam-roller", que dispara la automatización que envía el ebook
// + el CTA de WhatsApp.
//
// Requiere la variable de entorno SYSTEME_API_KEY configurada en Vercel
// (Project Settings → Environment Variables).

const SYSTEME_API_BASE = 'https://api.systeme.io/api';
const TAG_SLUG = 'lead-foam-roller';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  const { email } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'Email inválido' });
    return;
  }

  const apiKey = process.env.SYSTEME_API_KEY;
  if (!apiKey) {
    console.error('Falta la variable de entorno SYSTEME_API_KEY');
    res.status(500).json({ error: 'Configuración del servidor incompleta' });
    return;
  }

  const headers = {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json',
  };

  try {
    let contactId = null;

    // 1. Intentar crear el contacto
    const contactRes = await fetch(`${SYSTEME_API_BASE}/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email }),
    });

    if (contactRes.ok) {
      const contact = await contactRes.json();
      contactId = contact?.id ?? null;
    } else if (contactRes.status === 422) {
      // El contacto ya existía: lo buscamos por email para recuperar su id
      const lookupRes = await fetch(
        `${SYSTEME_API_BASE}/contacts?email=${encodeURIComponent(email)}`,
        { headers }
      );
      if (lookupRes.ok) {
        const lookup = await lookupRes.json();
        contactId = lookup?.items?.[0]?.id ?? null;
      }
    } else {
      const errText = await contactRes.text();
      console.error('Systeme.io /contacts error:', contactRes.status, errText);
      res.status(502).json({ error: 'No se pudo guardar el contacto' });
      return;
    }

    // 2. Añadir la etiqueta que dispara la automatización del ebook
    if (contactId) {
      const tagRes = await fetch(`${SYSTEME_API_BASE}/contacts/${contactId}/tags`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ slug: TAG_SLUG }),
      });

      if (!tagRes.ok) {
        const errText = await tagRes.text();
        console.error('Systeme.io /tags error:', tagRes.status, errText);
        // No devolvemos error al usuario: el contacto ya se guardó,
        // solo falló la etiqueta. Se puede añadir manualmente si hace falta.
      }
    } else {
      console.error('No se pudo obtener el id del contacto para', email);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error al conectar con Systeme.io:', err);
    res.status(500).json({ error: 'Error interno' });
  }
};
