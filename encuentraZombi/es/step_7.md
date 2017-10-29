## Prueba el GPS

Probablemente desees comprobar si el icono del jugador se mueve a medida que te mueves, y para hacerlo tendrás que salir. Esto podría ser bastante inconveniente mientras sostienes un ordenador, así que carguemos la página web a Internet para que puedas acceder a ella desde tu teléfono.

### Notas de seguridad importantes
No olvides que cuando subes cosas a Internet, cualquiera puede verlas. Si has centrado el mapa en la latitud y la longitud de tu casa, cualquier persona que acceda a la página web puede ver exactamente dónde vives. Es más seguro configurar tu mapa de zombies en un área común, como un parque o un centro de la ciudad, para que no des tus datos personales.

Para que el GPS funcione, deberás habilitar los servicios de ubicación en tu teléfono. Ten en cuenta que esto significa que tu teléfono rastreará tu posición exacta. Nunca es una buena idea publicar tu ubicación exacta en público en Internet, por lo que para estar seguro, deshabilita los servicios de ubicación nuevamente después de haber jugado el juego zombi para asegurarte de que ninguna otra aplicación pueda usar tu información de ubicación. Tu ubicación solo será utilizada por el juego zombie en la página web que hayas creado. ¡Sabes exactamente qué hace este código porque lo escribiste!

### Sube tu código
Puedes subir tu juego zombie a cualquier servicio que ofrezca alojamiento web. Es posible que ya tengas algún hosting disponible para ti, en cuyo caso puedes usarlo. Elegimos usar[GitHub Pages](https://pages.github.com/){:target="_blank"} porque es un servicio confiable y fácil de usar. Para comenzar, sigue estos pasos:

+ Regístrate para una [cuenta GitHub](https://github.com/join){:target="_blank"}

+ Visita la [página de instrucciones](https://pages.github.com/){:target="_blank"}, y haz clic en **Project site** and **Start from scratch**

![páginas Github](images/github-pages.png)

+ Sigue las instrucciones para crear un archivo de índice como se describe, pero en lugar de escribir `<h1> Hola </ h1>`, pega el código de tu archivo `index.html` antes de enviarlo

+ También deberás hacer clic en el botón **Subir archivos** y cargar los archivos emoji que estás utilizando

+ Finalmente, sigue el Paso 4 en la página de instrucciones para configurar tu rama principal como un sitio de Páginas GitHub, y luego visualiza tu página escribiendo la dirección en un navegador.

## Restringe tu clave API
Ahora que has puesto su código en línea, tu clave API de Google Maps está visible para todos. Alguien podría copiarla y usarla sin tu permiso. Puedes evitar que esto suceda al restringir dónde se puede usar, de modo que solo se pueda usar en tu sitio web.

+ Regresa a la [consola Google APIs](https://console.developers.google.com/flows/enableapi?apiid=picker&credential=client_key){:target="_blank"} y haz clic en **Select a project** en la parte superior izquierda de la página.

![Selecciona un proyecto](images/select-a-project.png)

+ Selecciona el proyecto que creaste cuando configuraste tu clave API. Esto todavía puede llamarse **Mi proyecto** si no cambiaste el nombre.

+ Haz clic en **Credenciales** a la izquierda, luego haz clic en tu clave API.

![Selecciona un proyecto](images/credentials.png)

+ En **Restricción de la clave**, selecciona **referencias HTTP** y en el cuadro, agrega la URL base de tu sitio web, con un `*` en cada extremo. Por ejemplo, mi código fue alojado en `http://lawsie.github.io/`, así que puse `*lawsie.github.io/*`. Clic en **Guardar**.

! [Restricción de la clave] (images/key-restriction.png)

+ Tu clave ahora solo debería funcionar en tu sitio web, y no en ningún otro lado. Ten en cuenta que si intentas mirar el mapa en tu ordenador, no funcionará porque la solicitud no proviene de tu sitio web. Es posible que desees crear una clave API adicional que no esté restringida, y SÓLO usa esa clave en tu ordenador privado para realizar pruebas.