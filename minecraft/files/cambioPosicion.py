import time
from mcpi.minecraft import Minecraft
mc = Minecraft.create()

pos1 = mc.player.getTilePos()
x1 = pos1.x
y1 = pos1.y
z1 = pos1.z

time.sleep(10)

pos2 = mc.player.getTilePos()
x2 = pos2.x
y2 = pos2.y
z2 = pos2.z

# Compara la diferencia entre la posición de inicio y la del final
distanciaX = x2 - x1
distanciaY = y2 - y1
distanciaZ = z2 - z1

# Muestra los resultados en la ventana de Minecraft
mc.postToChat("El jugador se ha movido x: " + str(distanciaX) + ", y: "
    + str(distanciaY) + ", y z: " + str(distanciaZ))
