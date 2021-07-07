@namespace
class SpriteKind:
    Win = SpriteKind.create()
    Melech = SpriteKind.create()
    Treasure = SpriteKind.create()
    kill = SpriteKind.create()
    weapon = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    music.ba_ding.play()
sprites.on_overlap(SpriteKind.Melech, SpriteKind.enemy, on_on_overlap)

def on_a_pressed():
    explode_bomb()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap2(playersprite, treasureSprite):
    treasureSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.Treasure, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    game.over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.Win, on_on_overlap3)

def setCakes():
    global cake_0, cake_1, cake_2
    cake_0 = sprites.create(img("""
            . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 3 3 e 2 2 e 3 3 a . 
                    . . b b 3 3 3 3 3 e e 3 3 3 a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a .
        """),
        SpriteKind.food)
    cake_1 = sprites.create(img("""
            . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 3 3 e 2 2 e 3 3 a . 
                    . . b b 3 3 3 3 3 e e 3 3 3 a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a .
        """),
        SpriteKind.food)
    tiles.place_on_tile(cake_1, tiles.get_tile_location(1, 11))
    cake_2 = sprites.create(img("""
            . . . . . . . . . . b b b . . . 
                    . . . . . . . . b e e 3 3 b . . 
                    . . . . . . b b e 3 2 e 3 a . . 
                    . . . . b b 3 3 e 2 2 e 3 3 a . 
                    . . b b 3 3 3 3 3 e e 3 3 3 a . 
                    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                    b 3 3 3 d d d d 3 3 3 3 3 d d a 
                    b b b b b b b 3 d d d d d d 3 a 
                    b d 5 5 5 5 d b b b a a a a a a 
                    b 3 d d 5 5 5 5 5 5 5 d d d d a 
                    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                    b b b 3 d 5 5 5 5 5 5 5 d d b a 
                    . . . b b b 3 d 5 5 5 5 d d 3 a 
                    . . . . . . b b b b 3 d d d b a 
                    . . . . . . . . . . b b b a a .
        """),
        SpriteKind.food)
    tiles.place_on_tile(cake_2, tiles.get_tile_location(1, 12))
    tiles.place_on_tile(cake_0, tiles.get_tile_location(1, 10))

def on_on_overlap4(sprite, otherSprite):
    music.big_crash.play()
    otherSprite.destroy()
    game.over(False)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap4)

def bbbuuutttbbb():
    global butb
    butb = sprites.create(img("""
            . . . . . . . . . . 2 2 2 . . . 
                    . . . . . . . . . . 2 f 2 . . . 
                    . . . . . . . . . . f 2 2 . . . 
                    . . . . . . . . . f . . . . . . 
                    . . . . . . . . . f . . . . . . 
                    . . . . . . . c c c . . . . . . 
                    . . . . . . a b a a . . . . . . 
                    . . . . . c b a f c a c . . . . 
                    . . . . c b b b f f a c c . . . 
                    . . . . b b f a b b a a c . . . 
                    . . . . c b f f b a f c a . . . 
                    . . . . . c a a c b b a . . . . 
                    . . . . . . c c c c . . . . . . 
                    . . . . . . . c . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.weapon)
    tiles.place_on_tile(butb, tiles.get_tile_location(2, 19))

def on_on_overlap5(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy()
    music.ba_ding.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap5)

def explode_bomb():
    global exploding_bomb
    if bomb_bag == 1:
        music.big_crash.play()
        exploding_bomb = sprites.create(assets.image("""
            exploding_bomb
        """), SpriteKind.kill)
        tiles.place_on_tile(exploding_bomb, tiles.get_tile_location(1, 11))
        exploding_bomb.set_position(ronen.x, ronen.y)

def on_on_overlap6(sprite, otherSprite):
    global bomb_bag
    bomb_bag = 1
    butb.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.weapon, on_on_overlap6)

def on_on_overlap7(playersprite, melechSprite):
    melechSprite.follow(playersprite, 60)
sprites.on_overlap(SpriteKind.player, SpriteKind.Melech, on_on_overlap7)

exploding_bomb: Sprite = None
bomb_bag = 0
butb: Sprite = None
cake_2: Sprite = None
cake_1: Sprite = None
cake_0: Sprite = None
ronen: Sprite = None
info.set_score(7)
trophy = sprites.create(img("""
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . 5 . . . . . . . . . 5 . .
    . . . . 5 . . . . . . . 5 . . .
    . . . . 5 . . . 5 5 5 5 . . . .
    . . . . . 5 5 5 5 . 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 . . . . .
    . 5 5 5 5 5 5 5 5 5 . . 5 . . .
    . . 5 5 5 . 5 5 5 5 . 5 5 5 . .
    5 5 . 5 5 5 5 5 5 5 . 5 5 . . .
    5 5 5 . 5 5 . 5 . 5 5 . . . . .
    . . . . 5 . 5 . . . 5 . . . . .
    . . . . . 5 5 . . . 5 . . . . .
    . . . . 5 5 . . . . 5 5 . . . .
    . . . . . . . . . . . 5 5 . . .
    . . . . . . . . . . . . . . . .
"""),
    SpriteKind.Win)
tiles.set_tilemap(tilemap("""
    level1
"""))
tiles.place_on_tile(trophy, tiles.get_tile_location(22, 22))
setCakes()
bbbuuutttbbb()
puppy = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . f f . 
            . . . 4 5 5 f f 5 5 6 f f 5 f . 
            . . . f 6 6 6 6 6 6 4 f 5 5 f . 
            . . . f 5 5 5 5 5 5 5 4 5 f . . 
            . . . . f 5 4 5 f 5 f f f . . . 
            . . . . . f f f f f f f . . . .
    """),
    SpriteKind.Melech)
tiles.place_on_tile(puppy, tiles.get_tile_location(1, 15))
barvaz_ra = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . .
    """),
    SpriteKind.enemy)
ronen = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . .
    """),
    SpriteKind.player)
barvaz_ra.follow(ronen, 50)
controller.move_sprite(ronen)
tiles.place_on_tile(ronen, tiles.get_tile_location(1, 1))
scene.camera_follow_sprite(ronen)
treasure_0 = sprites.create(img("""
        f f f f f f f f f f f f f f f f 
            f b e e e e e e e e e e e e b f 
            f e e e e e e e e e e e e e e f 
            4 5 4 4 4 5 5 5 5 5 5 5 5 5 5 4 
            4 5 5 5 5 4 5 5 f 5 5 4 5 5 4 5 
            5 4 4 5 5 4 5 5 f 5 5 4 5 4 5 5 
            5 4 5 4 5 5 4 4 5 5 5 4 5 5 5 5 
            f e e e e e e 5 e 5 e e e e e f 
            f e e e e e 5 e e e 5 e e e e f 
            f e e e e e e 5 e 5 e e e e e f 
            f e e e e e e e 5 e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f b e e e e e e e e e e e e b f 
            f f f f f f f f f f f f f f f f
    """),
    SpriteKind.Treasure)