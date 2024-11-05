extends Sprite2D

func _ready():
	randomize()  # Garante números aleatórios diferentes a cada execução
	position.x = randf_range(40, 600)
