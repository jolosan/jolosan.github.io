#Connectate a Minecraft
from mcpi.minecraft import Minecraft
mc = Minecraft.create()

#Inicializa las variables x, y, z que representarán las coordenadas
x = 10.0
y = 110.0
z = 12.0

#Cambia la posición del jugador
mc.player.setPos(x, y, z)
