## Ataque de los emoticonos

¡Cuando probaste tu mapa en tu teléfono, probablemente pensabas que te estaban atacando con emoticones en lugar de zombis! Esto se debe a que la página crea un marcador nuevo cada vez que el jugador se mueve, pero no elimina los marcadores de sus posiciones anteriores. ¡Eventualmente esto se vuelve realmente confuso, porque no puedes decir dónde estás desde donde has estado!

![Ataque de los emoticonos](images/attack-smileys.png)

Continúa editando el código en tu ordenador. Puedes volver a cargar el código en GitHub si desea probarlo afuera.

+ Ubica la línea `var mapa_zombi;`, y debajo agrega una nueva variable llamada `posicion_antigua`.

+ Dentro de la función `inicializaMapa()`, crea un marcador llamado `posicion_antigua` en la misma ubicación en la que centraste tu mapa cuando lo creaste. (En realidad, no importa en qué ubicación se inicie este marcador, ya que su valor de ubicación se sobrescribirá casi de inmediato, pero es necesario inicializarlo. Simplemente usamos la ubicación central del mapa porque era práctico).

+ Ubica tu función `actualiza_mi_posicion ()`. Agrega una línea de código para que lo **primero** que haga la función sea eliminar el marcador de posición anterior del mapa. `null` es una palabra clave especial que en este caso significa "sin mapa".

```JavaScript
posicion_antigua.setMap(null);
```

+ Agrega otra línea de código a la función `actualiza_mi_posicion()`, pero esta vez debería ser la **última** cosa que hace la función. Esto guarda el nuevo marcador de posición que acabas de crear como `posicion_antigua` para que la próxima vez que creemos un marcador nuevo sepamos dónde estaba el anterior.

```JavaScript
posicion_antigua = marcador;
```

+ Guarda tu código y súbelo de nuevo a tu servicio de alojamiento web. Prueba el código caminando. Deberías ver cómo se mueve tu jugador, pero esta vez no habrá rastros de emoticones, solo un marcador para mostrar tu posición actual. ¡Uf!