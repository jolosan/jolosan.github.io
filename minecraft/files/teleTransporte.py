#Connectate a Minecraft
from mcpi.minecraft import Minecraft
mc = Minecraft.create()

#Inicializa las variables x, y, z que representarán las coordenadas
x = 10
y = 110
z = 12

#Cambia la posición del jugador
mc.player.setTilePos(x, y, z)
