# 6. Funciones

Una función es un fragmento de código con un nombre asociado que realiza una serie de tareas y devuelve un valor. A los fragmentos de código que tienen un nombre asociado y no devuelven valores se les suele llamar procedimientos. En Python no existen los procedimientos, ya que cuando el programador no especifica un valor de retorno la función devuelve el valor None (nada), equivalente al null de Java.
Además de ayudarnos a programar y depurar dividiendo el programa en partes, las funciones también permiten reutilizar código.

En Python las funciones se declaran de la siguiente forma:

```python
    def mi_funcion(param1, param2):
       print param1
       print param2 
```

Es decir, la palabra clave *def* seguida del nombre de la función y entre paréntesis los argumentos separados por comas. A continuación, en otra línea, indentado y después de los dos puntos tendríamos las líneas de código que conforman el código a ejecutar por la función.

A la hora de escribir estas líneas no se ejecuta la función. Para llamar a la función (ejecutar su código) se escribiría:

```python
    mi_funcion("hola", 2)
```

Es decir, el nombre de la función a la que queremos llamar seguido de los valores que queramos pasar como parámetros entre paréntesis. La asociación de los parámetros y los valores pasados a la función se hace normalmente de izquierda a derecha: como a param1 le hemos dado un valor "hola" y param2 vale 2, mi_funcion imprimiría hola en una línea, y a continuación 2.
Sin embargo también es posible modificar el orden de los parámetros si indicamos el nombre del parámetro al que asociar el valor a la hora de llamar a la función:

```python
mi_funcion(param2 = 2, param1 = "hola")
```

El número de valores que se pasan como parámetro al llamar a la función tiene que coincidir con el número de parámetros que la función acepta según la declaración de la función. En caso contrario Python dará un error.

También es posible, no obstante, definir funciones con un número variable de argumentos, o bien asignar valores por defecto a los parámetros para el caso de que no se indique ningún valor para ese parámetro al llamar a la función.

Los valores por defecto para los parámetros se definen situando un signo igual después del nombre del parámetro y a continuación el valor por defecto:

```python
    def imprimir(texto, veces = 1):
       print veces * texto 
```

En el ejemplo anterior si no indicamos un valor para el segundo parámetro se imprimirá una sola vez la cadena que le pasamos como primer parámetro:

```python
    >>> imprimir("hola")
    hola
```

si se le indica otro valor, será este el que se utilice:


```python
    >>> imprimir("hola", 2)
    holahola
```

Para definir funciones con un número variable de argumentos colocamos un último parámetro para la función cuyo nombre debe precederse de un signo *:

```python
    def varios(param1, param2, *otros):
       for val in otros:
         print val

    varios(1, 2)
    varios(1, 2, 3)
    varios(1, 2, 3, 4)
```

Esta sintaxis funciona creando una tupla (de nombre otros en el ejemplo) en la que se almacenan los valores de todos los parámetros extra pasados como argumento. Para la primera llamada, varios(1, 2), la tupla otros estaría vacía dado que no se han pasado más parámetros que los dos definidos por defecto, por lo tanto no se imprimiría nada. En la segunda llamada otros valdría (3, ), y en la tercera (3, 4).
También se puede preceder el nombre del último parámetro con **, en cuyo caso en lugar de una tupla se utilizaría un diccionario. Las claves de este diccionario serían los nombres de los parámetros indicados al llamar a la función y los valores del diccionario, los valores asociados a estos parámetros.
En el siguiente ejemplo se utiliza la función items de los diccionarios, que devuelve una lista con sus elementos, para imprimir los parámetros que contiene el diccionario.

```python
    def varios(param1, param2, **otros):
       for i in otros.items():
         print i

    varios(1, 2, tercero = 3) 
```

## 6.1. Variables locales / globales

Distinguiremos dos tipos de variables: 

* variables locales: las que pertenecen al ámbito de la función (y que pueden ser accesibles a niveles inferiores)
* variables globales: las que pertenecen al ámbito del programa principal.


```python
def suma_digitos(num):
  suma = 0
  while num > 0		# suma y num son variables locales	
    suma += num%10
    num /= 10
  return suma

numero = 123  		# numero es una variable global
print suma_digitos(numero)

print suma 		# ERROR  porque suma es una variable local a la función suma_digitos()
```
Si necesitamos modificar variables globales desde el cuerpo de una función: 

```python
def funcion (param1, param2, ...)
   global  var1, var2
   ...
```


## 6.3. Práctica con Minecraft

### 6.3.1. Duplica una construcción

Copia el siguiente código en un archivo nuevo desde IDLE y guárdalo con el nombre *duplicaContruccion.py*
Prueba a ejecutarlo y trata de entenderlo.

```python
from mcpi.minecraft import Minecraft
mc = Minecraft.create()


def ordenaPar(val1, val2):
    if val1 > val2:
        return val2, val1
    else:
        return val1, val2


def copiaEstructura(x1, y1, z1, x2, y2, z2):
    x1, x2 = ordenaPar(x1, x2)
    y1, y2 = ordenaPar(y1, y2)
    z1, z2 = ordenaPar(z1, z2)

    anchura = x2 - x1
    altura = y2 - y1
    longitud = z2 - z1

    estructura = []

    print("Por favor, espera...")

    # Copia la estructura
    for fila in range(altura):
        estructura.append([])
        for columna in range(anchura):
            estructura[fila].append([])
            for profundidad in range(longitud):
                bloque = mc.getBlock(x1 + columna, y1 + fila, z1 + profundidad)
                estructura[fila][columna].append(bloque)

    return estructura


def construyeEstructura(x, y, z, estructura):
    xInicial = x
    yInicial = y
    for fila in estructura:
        for columna in fila:
            for bloque in columna:
                mc.setBlock(x, y, z, bloque)
                z += 1
            x += 1
            z = yInicial
        y += 1
        x = xInicial


# obtén lla posición de la primera esquina
input("Muévete a la primera esquina y pulsa Intro en esta ventana")
pos = mc.player.getTilePos()
x1, y1, z1 = pos.x, pos.y, pos.z

# obtén lla posición de la segunda esquina
input("Muévete a la esquina opuesta y pulsa Intro en esta ventana")
pos = mc.player.getTilePos()
x2, y2, z2 = pos.x, pos.y, pos.z

# copia la estructura
estructura = copiaEstructura(x1, y1, z1, x2, y2, z2)

# obtén la posición para la copia
input("Muévete a la posición donde quieres crear la estructura y pulsa Intro en esta ventana")
pos = mc.player.getTilePos()
x, y, z = pos.x, pos.y, pos.z
construyeEstructura(x, y, z, estructura)
```

[Vuelve al índice](https://jolosan.github.io/minecraft/aprende.html)