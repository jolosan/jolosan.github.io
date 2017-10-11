from mcpi.minecraft import Minecraft
mc = Minecraft.create()

pos = mc.player.getPos()
x = pos.x
y = pos.y
z = pos.z

tipoDeBloque = mc.getBlock(x, y, z)
mc.postToChat(tipoDeBloque == 9)    # Si el jugador está sobre el agua, 
			            # pondrá True, en caso contrario, pondrá False.
