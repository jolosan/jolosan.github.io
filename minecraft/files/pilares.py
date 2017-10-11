from mcpi.minecraft import Minecraft
mc = Minecraft.create()


def creaPilar(x, y, z, altura):
    """Crea un pilar. Los argumentos son posición y altura del pilar"""
    bloqueEscalera = 156
    bloque = 155

    # Parte de arriba del pilar
    mc.setBlocks(x - 1, y + altura, z - 1, x + 1, y + altura, z + 1, bloque, 1)
    mc.setBlock(x - 1, y + altura - 1, z, bloqueEscalera, 12)
    mc.setBlock(x + 1, y + altura - 1, z, bloqueEscalera, 13)
    mc.setBlock(x, y + altura - 1, z + 1, bloqueEscalera, 15)
    mc.setBlock(x, y + altura - 1, z - 1, bloqueEscalera, 14)

    # Parte de la base del pilar
    mc.setBlocks(x - 1, y, z - 1, x + 1, y, z + 1, bloque, 1)
    mc.setBlock(x - 1, y + 1, z, bloqueEscalera, 0)
    mc.setBlock(x + 1, y + 1, z, bloqueEscalera, 1)
    mc.setBlock(x, y + 1, z + 1, bloqueEscalera, 3)
    mc.setBlock(x, y + 1, z - 1, bloqueEscalera, 2)

    # columna del pilar
    mc.setBlocks(x, y, z, x, y + altura, z, bloque, 2)

pos = mc.player.getTilePos()
x, y, z = pos.x + 2, pos.y, pos.z

for desplazamientoX in range(0, 100, 5):
    creaPilar(x + desplazamientoX, y, z, 10)
