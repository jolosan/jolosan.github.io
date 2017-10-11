from mcpi.minecraft import Minecraft
mc = Minecraft.create()

casaX = 10
casaY = 11
casaZ = 12
anchura = 10
altura = 5
longitud = 6

pos = mc.player.getTilePos()
x = pos.x
y = pos.y
z = pos.z

dentroDeCasa = casaX < x < casaX + anchura and casaY < y < casaY + altura and casaZ < z < casaZ + longitud
mc.postToChat("El jugador está en casa: " + str(dentroDeCasa))
