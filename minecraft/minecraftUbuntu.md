# Guia para instalar minecraft Pi en Ubuntu

Este documento está basado en [raspberryjammod](https://github.com/arpruss/raspberryjammod)

Se realizará la instalación **single-player**

## Paso 1:
Vamos a [https://minecraft.net/download](https://minecraft.net/download) , descargamos la versión para linux y la ejecutamos una vez pulsando doble click. 
![](images/MinecraftUbuntu1.png)

![](images/MinecraftUbuntu3.png)

Si no estamos registrados, pulsamos el botón *Register* y nos damos de alta en la web de mojang:

![](images/MinecraftUbuntu4.png)

Ahora ya podemos identificarnos:

![](images/MinecraftUbuntu5.png)

A continuación editamos el perfil (botón Edit Profile) y escogemos la versión de Minecraft 1.8.9 ( o una versión más reciente que coincida con la de Forge que descargaremos en el paso 2):

![](images/MinecraftUbuntu6.png)

Le damos al botón **Play Demo** y comprobamos que podemos jugar en el mundo existente o creandonos uno nuevo.

Salimos de Minecraft.

## Paso 2:
Descargamos e instalamos la ultima versión de Minecraft Forge para 1.8 (o más reciente que coincida con la de minecraft que hemos elegido antes) desde [http://files.minecraftforge.net/](http://files.minecraftforge.net/)

![](images/MinecraftUbuntu7.png)

![](images/MinecraftUbuntu8.png)

Iniciamos de nuevo Minecraft, pero ahora cambiamos el perfil a **Forge**: 

![](images/MinecraftUbuntu9.png)

## Paso 3:
Descargamos el fichero [python-scripts.zip](https://github.com/arpruss/raspberryjammod/releases) y lo descomprimimos

Copiamos la carpeta **python3scripts/mcpi** en nuestra carpeta .minecraft.

Descargamos el archivo [mods.zip](https://github.com/arpruss/raspberryjammod/releases) y lo extraemos. Vamos a la carpeta **.minecraft**, escogemos el archivo **RaspberryJamMod.jar** y lo copiamos  en la carpeta **.minecraft/mods**.

Al final de este paso, la carpeta **.minecraft** tendrá éste aspecto:

![](images/MinecraftUbuntu10.png)

Volvemos a abrir minecraft, creamos un mundo nuevo en modo creativo y jugamos en él.

![](images/minecraft_mod_Raspberry_Jam.png)

## Paso 4:
Instalamos **idle3**

Para ello debemos activar los repositorios de ubuntu: 
![](images/MinecraftUbuntu11.png)

```bash
sudo apt-get install idle3
```

![](images/MinecraftUbuntu12.png)

Lanzamos idle3 desde **Aplicaciones-->Programación** y cargamos algún fichero de ejemplo (carpeta .minecraft/mcpi) 

![](images/MinecraftUbuntu13.png)

![](images/MinecraftUbuntu14.png)

Al pulsar en la tecla **F5**, se cargará el programa en la pantalla de minecraft: 

![](images/MinecraftUbuntu15.png)

A partir de ahora podemos ejecutar nuestros programas escritos en python para minecraft :-) 

## Paso 5:
¿Y ahora qué?

Puedes ir al siguiente enlace para ver los [primeros pasos] (https://jolosan.github.io/minecraft/practicaInicial.html) en el mundo de Minecraft.

También puedes aprender python programando Minecraft [siguiendo este curso] (https://jolosan.github.io/minecraft/aprende.html)

¡Adelante! 
