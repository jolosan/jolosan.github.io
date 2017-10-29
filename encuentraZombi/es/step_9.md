## Encuentra los objetos

¡Ahora tenemos que hacer que el juego funcione! A medida que el jugador se mueve, comprobaremos si han encontrado un objeto. Para encontrar un objeto, tienes que ir a una ubicación de la vida real que se considere lo suficientemente cerca de la ubicación del elemento virtual.

+ Busca la línea `var mapa_zombi;` y, debajo de ella, agrega una nueva variable llamada `tolerancia`. Esta variable determinará qué tan cerca deberá estar el jugador de la ubicación del marcador del elemento (en metros) para encontrarlo. Puedes elegir qué tan cerca está esto: cuanto menor sea el número de metros, más cerca tendrá que llegar el jugador a la ubicación exacta para encontrar el objeto. Elegimos una tolerancia de 10.

Para poder calcular la distancia entre dos puntos en un mapa, debemos usar parte de la magia técnica de Google desde su biblioteca de geometría. Ubica el código cerca de la parte inferior de la página que le dice al mapa tu clave API:

```html
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=A1b2c3d4e5f6g7h8i9j10k11&callback=initMap">
</script>
```

+ En la línea del código anterior, inmediatamente después de `initMap`, pero antes de la terminación `"`, agrega `& libraries = geometry`. Ten cuidado de no agregar espacios.

+ Ahora busca su función `inicializa_mi_posicion ()`, y colocae el cursor inmediatamente debajo de la línea `posicion_antigua = marcador;`.

+ Crea un bucle for que recorrerá la matriz `todos_los_marcadores`.

[[[generic-javascript-for-loop-array]]]

+ Dentro de tu bucle, usa el siguiente código para calcular la distancia entre la posición actual (`pos`) y el marcador que estamos examinando:

```javascript
var distancia = google.maps.geometry.spherical.computeDistanceBetween(pos, todos_los_marcadores[i].getPosition());
```

La imagen siguiente muestra un ejemplo de uno de los cálculos. ¿Qué distancia hay entre el jugador y el marcador del hospital?

![Lo que estamos calculando](images/what-we-are-calculating.png)

+ Añade una instrucción `if` inmediatamente debajo para verificar si la distancia entre el jugador y el marcador que estamos examinando actualmente es menor que la tolerancia. Debe tener un aspecto como este:

```javascript
if( distancia < tolerancia ){
    alert("¡Lo encontré!")
}
```

Por el momento, no estamos seguros de qué es lo que el jugador ha encontrado.

+ Elimina la línea que dice "¡Lo encontré!", Y en su lugar obten el nombre del ícono del que el jugador está cerca.

```javascript
var que_es = todos_los_marcadores[i].getIcon();
```

+ Elimina la parte `.png` del nombre del ícono. Por ejemplo, si el nombre del icono es `hospital.png`, solo queremos decir "hospital".

```javascript
que_es = que_es.replace(".png", "");

```
+ Crea una alerta para decirle al jugador lo que ha encontrado. En este caso, la alerta dirá 'Encontrado el hospital':

```javascript
alert("Encontrador el " + que_es);
```

+ Quita el marcador `todos_los_marcadores [i]` del mapa, para que el juego no siga diciéndole al jugador que encontraron lo mismo.

--- hints ---
--- hint ---
Recuerda que eliminamos un marcador del mapa antes, cuando detuvimos el ataque de los emoticonos.
--- /hint ---

--- hint ---
Para eliminar un marcador del mapa, establece el mapa del marcador en `null`, lo que significa que no hay mapa en este caso.
--- /hint ---

--- hint ---
Deberás usar el método `.setMap ()` en el marcador.
--- /hint ---

--- /hints ---

+ Finalmente, añadiremos puntos. Una vez más, encuentra la línea `var mapa_zombi;` y agrega otra línea de código debajo para crear una variable llamada `puntuacion`.

Si el jugador encontró un zombi, en mi juego no obtienen ningún punto. ¡Tal vez si te sientes especialmente malvado, podrías darle a tu jugador menos puntos en tu juego! Si encontraron un hospital o una tienda de armas obtienen 10 puntos.

+ Aquí hay un pseudo-código para el código que queremos agregar. Traducelo en código real y agrégalo a tu programa.

```html
Si lo que encuentran no es un zombi
    puntuacion + 10 puntos
    ALERTA Tu puntuación es + puntuacion
```
Añade tu código aquí:

![Añade una puntuación](images/add-score.png)


--- hints ---

--- hint ---
Ya resolvimos lo que encontraron y lo almacenaron en la variable `que_es`. Usa esto para crear una condición que diga que el contenido de esta variable no es igual a (`!=`) Zombi.
--- /hint ----

--- hint ---
Puedes agregar puntos a una variable así:

```javascript
puntuacion += 10
```
Esto significa que "incrementamos `puntuacion` en 10".
--- /hint ----

--- hint ---
Solucion:
```javascript
if( que es != "zombi"){
    puntuacion += 10;
    alert("Tu puntuación es " + puntuacion);
}
```
--- /hint ----

--- /hints ---

+¡Ahora es el momento de probar tu juego! Lee detenidamente los consejos de seguridad en el próximo paso antes de realizar cualquier prueba.
