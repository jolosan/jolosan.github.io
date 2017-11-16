## Crea el mapa

Si ya has completado el proyecto [Mapa de supervivencia del apocalipsis Zombi](https://projects.raspberrypi.org/en/projects/zombie-apocalypse-map){:target="_blank"}, Notarás que los primeros pasos de este proyecto son muy similares. **Asegurate de iniciar un nuevo archivo HTML para este proyecto en lugar de reutilizar tu código anterior**. De lo contrario, te confundirás durante las etapas posteriores.

+ Crea y guarda un archivo llamado `index.html`. Necesitarás usar un editor de texto en tu computadora para hacer esto en lugar de un editor de HTML en línea.

[[[generic-html-create-and-save]]]

+ En el archivo, agrega las etiquetas para crear una página HTML básica.

[[[generic-html-basic-page]]]

+ Si aún no tienes una, obten una clave API de Google Maps JavaScript. Asegúrate de agregar el código para usar la clave de tu archivo `index.html`.

[[[generic-api-google-maps-key]]]

+ En el editor de texto, encuentra la etiqueta `<head>` en tu código. En una línea en blanco debajo de esta etiqueta, agrega el siguiente código para configurar el tamaño del y qué color se mostrará si no se carga correctamente.

```html
<style>
#mapa_zombi {
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;  
    background-color: grey;
}
</style>
```

+ Busca la etiqueta `<body>` en tu código. En una línea en blanco debajo de esta etiqueta, agrega el siguiente código para crear un `<div>` (un cuadro invisible) donde tu mapa aparecerá con el tiempo.

```html
Mi mapa zombi
<div id="mapa_zombi"></div>
```

+ Busca una ciudad en [Google Maps](http://maps.google.com){:target="_blank"}, luego haz clic derecho en el mapa y selecciona **¿Qué hay aquí?**. Aparecerá un cuadro en la parte inferior de la página que muestra la latitud y la longitud.

![Encontrando la latitud y la longitud](images/whats-here.png)

+ Inmediatamente debajo del código `<div>` que acabas de agregar, agrega el siguiente código para crear el mapa. Reemplaza los `###` con los valores de latitud y longitud que acabas de buscar para su ciudad.

```html
<script>
    var mapa_zombi;
    function inicializaMapa() {

            mapa_zombi = new google.maps.Map(document.getElementById('mapa_zombi'), {
            zoom: 10,
            center: {lat: ###, lng: ###}
        });
    }
</script>
```

+ Guarda tu código y actualiza tu navegador de Internet. Deberías ver un mapa de Google con la ciudad que elegiste en el centro del mapa.

![Mapa centrado](images/centered-map.png)

[Paso 4](https://jolosan.github.io/encuentraZombi/es/step_4.html)