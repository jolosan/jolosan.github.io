from mcpi.minecraft import Minecraft
import math
import time
import random
mc = Minecraft.create()

destX = random.randint(-127, 127)
destZ = random.randint(-127, 127)
destY = mc.getHeight(destX, destZ)

print(destX, destY, destZ)

bloque = 57 # diamante
mc.setBlock(destX, destY, destZ, bloque)
mc.postToChat("Bloque ubicado")

while True:
    pos = mc.player.getPos()
    distancia = math.sqrt((pos.x - destX) ** 2 + (pos.z - destZ) ** 2)

    if distancia == 0:
        break

    if distancia > 100:
        mc.postToChat("Te congelas")
    elif distancia > 50:
        mc.postToChat("Frío")
    elif distancia > 25:
        mc.postToChat("Caliente")
    elif distancia > 12:
        mc.postToChat("Hirviendo")
    elif distancia > 6:
        mc.postToChat("¡Te quemas!")
    elif distancia == 0:
        mc.postToChat("Lo encontraste")
