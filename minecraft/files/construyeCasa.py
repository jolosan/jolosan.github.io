from mcpi.minecraft import Minecraft
mc = Minecraft.create()
pos = mc.player.getTilePos()
x = pos.x
y = pos.y
z = pos.z
anchura = 10
altura = 5
longitud = 6
tipoDeBloque = 4
aire = 0
mc.setBlocks(x, y, z, x + anchura, y + altura, z + longitud, tipoDeBloque)
mc.setBlocks(x + 1, y + 1, z + 1,
             x + anchura - 1, y + altura - 1, z + longitud - 1, aire)
