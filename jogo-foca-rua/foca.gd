extends CharacterBody2D

@export var speed = 200

@onready var screen_size = get_viewport_rect().size

var collided = false

func get_input():
	var input_direction = Input.get_vector("ui_left","ui_right","ui_up","ui_down")
	velocity = lerp(velocity, input_direction * speed, 0.1) 

func _physics_process(_delta):
	collided = false
	screen_wrap()
	get_input()
	move_and_slide()
	if position.y < 0:
		get_tree().reload_current_scene()

	for i in get_slide_collision_count():
		var collision = get_slide_collision(i)
		print(collision.get_collider().name)
		if get_tree().get_nodes_in_group("carro").has(collision.get_collider()):
			collided = true
			position = Vector2(333, 444)

func screen_wrap():
	position.x = wrapf(position.x, 0, screen_size.x+17)
	#position.y = wrapf(position.y, 0, screen_size.y+17)
