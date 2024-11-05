extends CharacterBody2D

@onready var spr = $Sprite2D
@onready var screen_size = get_viewport_rect().size
var speed = randf_range(-1000, 1000)

func _ready():
	modulate = Color(randf(), randf(), randf(), 1)

func _process(delta):
	screen_wrap()
	position.x += speed * delta
	
	if abs(speed) < 500:
		speed = randf_range(200, 1000) if speed >= 0 else randf_range(-1000, -200)
	
	if speed < 0:
		spr.flip_h = true
	else:
		spr.flip_h = false


func screen_wrap():
	position.x = wrapf(position.x, 0, screen_size.x+32)
#	position.y = wrapf(position.y, 0, screen_size.y+17)
