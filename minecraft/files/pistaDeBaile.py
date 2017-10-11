from mcpi.minecraft import Minecraft
mc = Minecraft.create()
import time

pos = mc.player.getTilePos()
sueloX = pos.x - 2
sueloY = pos.y - 1
sueloZ = pos.z - 2
anchura = 5
longitud = 5
bloque = 41
mc.setBlocks(sueloX, sueloY, sueloZ,
             sueloX + anchura, sueloY, sueloZ + longitud, bloque)

while sueloX <= pos.x <= sueloX + anchura and sueloZ <= pos.z <= sueloZ + longitud:
    if bloque == 41:
        bloque = 57
    else:
        bloque = 41
    mc.setBlocks(sueloX, sueloY, sueloZ,
                 sueloX + anchura, sueloY, sueloZ + longitud, bloque)
    # obtén la posición del jugador
    pos = mc.player.getTilePos()
    # espera 0.5 segundos
    time.sleep(0.5)
