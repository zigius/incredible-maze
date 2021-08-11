namespace SpriteKind {
    export const Win = SpriteKind.create()
    export const Melech = SpriteKind.create()
    export const Treasure = SpriteKind.create()
    export const kill = SpriteKind.create()
    export const weapon = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Melech, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    explode_bomb()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Treasure, function (playersprite, treasureSprite) {
    treasureSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Win, function (sprite, otherSprite) {
    game.over(true)
})
function setCakes () {
    cake_0 = sprites.create(img`
        . . . . . . . e e e e . . . . . 
        . . . . . e e 4 5 5 5 e e . . . 
        . . . . e 4 5 6 2 2 7 6 6 e . . 
        . . . e 5 6 6 7 2 2 6 4 4 4 e . 
        . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
        . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
        . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
        e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
        e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
        e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
        e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
        e 5 e c 5 4 5 4 5 5 5 e e . . . 
        e 5 e e 5 5 5 5 5 4 e . . . . . 
        4 5 4 e 5 5 5 5 e e . . . . . . 
        . 4 5 4 5 5 4 e . . . . . . . . 
        . . 4 4 e e e . . . . . . . . . 
        `, SpriteKind.Food)
    cake_1 = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(cake_1, tiles.getTileLocation(1, 11))
    cake_2 = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(cake_2, tiles.getTileLocation(1, 12))
    tiles.placeOnTile(cake_0, tiles.getTileLocation(1, 10))
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.bigCrash.play()
    otherSprite.destroy()
    game.over(false)
})
function bbbuuutttbbb () {
    butb = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f c c c . 2 . 
        . . . . f f f e e c f f . c 4 2 
        . . . d d d d f f f f f f 2 5 4 
        . . f d d d d f f f 1 1 f f 2 . 
        . . d d d d d f f f 1 1 e f . . 
        . f d d d d f f f f f e e f f . 
        . f d d d f f f b b b b e f f . 
        . f f d d f f b b b b b f f f . 
        . f 2 d d f f b b b b b f f f . 
        . . f f d d f b b b b b f f . . 
        . . f f f d f f b b b f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.weapon)
    tiles.placeOnTile(butb, tiles.getTileLocation(2, 19))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
function explode_bomb () {
    if (bomb_bag == 1) {
        bomb_bag = 0
        exploding_bomb = sprites.create(img`
            . . . . . . . . . . . . 2 2 4 . 
            . . . . . . f f f f c c c 5 4 2 
            . . . . f f f e e c f f 2 4 2 . 
            . . . d d d d f f f f f f 2 . . 
            . . f d d d d f f f 1 1 f f . . 
            . . d d d d d f f f 1 1 e f . . 
            . f d d d d f f f f f e e f f . 
            . f d d d f f f b b b b e f f . 
            . f f d d f f b b b b b f f f . 
            . f 2 d d f f b b b b b f f f . 
            . . f f d d f b b b b b f f . . 
            . . f f f d f f b b b f f f . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.kill)
        tiles.placeOnTile(exploding_bomb, tiles.getTileLocation(1, 11))
        exploding_bomb.setPosition(ronen.x, ronen.y)
        timer.after(3000, function () {
            music.bigCrash.play()
        })
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.weapon, function (sprite, otherSprite) {
    bomb_bag = 1
    butb.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Melech, function (playersprite, melechSprite) {
    melechSprite.follow(playersprite, 60)
})
let exploding_bomb: Sprite = null
let bomb_bag = 0
let butb: Sprite = null
let cake_2: Sprite = null
let cake_1: Sprite = null
let cake_0: Sprite = null
let ronen: Sprite = null
info.setScore(7)
let trophy = sprites.create(img`
    5 5 5 . . . . . . . . . . 5 5 5 
    5 5 5 5 5 5 . . . . . 5 5 5 5 5 
    . 5 5 5 5 5 5 . . . 5 5 5 5 . . 
    . . 5 1 1 5 5 5 5 5 5 5 5 5 . . 
    . 6 6 1 5 5 5 5 5 5 5 5 5 6 8 . 
    6 8 . 1 1 5 f f 5 5 5 5 5 . 8 6 
    6 5 . 5 5 1 5 f 5 5 5 5 5 2 5 6 
    8 2 5 5 5 1 5 f 5 5 5 5 5 5 7 8 
    8 7 . 5 5 5 5 f 5 5 5 5 5 7 2 6 
    . 7 . . 5 5 f f f 5 5 5 . 7 . 6 
    7 2 . 4 4 4 4 4 4 4 4 4 4 2 2 . 
    2 . 4 4 5 5 5 4 4 5 5 5 4 4 7 7 
    . 5 5 5 5 5 5 4 4 5 5 5 5 5 5 2 
    f e e e e e e e e e e e e e e f 
    e e e e e e e e e e e e e e e e 
    f e e e e e e e e e e e e e e f 
    `, SpriteKind.Win)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(trophy, tiles.getTileLocation(22, 22))
setCakes()
bbbuuutttbbb()
let puppy = sprites.create(img`
    . . . . c c c c c . . . . . . . 
    . . c c 8 9 8 8 8 c . . . . . . 
    . c 8 8 9 9 1 f 8 8 c . . . . . 
    c 8 8 6 8 8 f f 9 8 8 c . . . . 
    c 9 8 6 6 8 8 8 8 9 9 9 c . . . 
    c c b b b b 8 8 8 6 8 8 c . . . 
    c 8 3 3 3 3 6 8 6 6 8 8 d c . . 
    c 8 8 3 3 8 8 8 8 8 d d d c . . 
    . c 8 9 9 8 b 6 6 8 d d d c . . 
    . . c b b c 8 8 b d d d d c . . 
    . c b b c 8 9 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . . c c c b 9 9 b d d d c . 
    . . . . . c d 8 8 b b c c c . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `, SpriteKind.Melech)
tiles.placeOnTile(puppy, tiles.getTileLocation(1, 15))
let barvaz_ra = sprites.create(img`
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . 5 4 2 2 2 2 4 5 . . . . . . 
    . 5 2 2 2 2 2 2 2 2 5 . . . . . 
    5 4 2 2 2 2 2 2 2 2 4 5 . . . . 
    5 2 5 4 4 4 4 5 2 2 2 5 . . . . 
    f 2 4 f 4 4 f 4 2 2 2 f . . . . 
    f 2 2 2 2 2 2 2 2 2 2 f . . . . 
    . f 2 2 2 2 4 5 2 2 4 f . . . . 
    . . f 5 5 5 5 2 2 4 f 5 5 5 . . 
    . . 5 4 f 2 2 2 f 5 5 2 2 2 5 . 
    . 5 4 2 2 f 2 2 5 f 4 2 2 2 2 5 
    . 5 1 1 1 1 2 4 4 5 4 4 4 5 5 5 
    . 5 1 1 1 1 1 4 4 4 4 4 4 5 . . 
    . 5 4 1 1 1 1 1 4 4 4 4 4 5 . . 
    . . 5 4 1 1 1 1 1 2 4 4 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    `, SpriteKind.Enemy)
ronen = sprites.create(img`
    . . . . . . . . . . . . 
    . . . . f f f f . . . . 
    . . . f f f f f f f . . 
    . . f f 4 f f f f f f . 
    . f f 4 4 4 f f f f f f 
    f f f 4 4 4 4 f f f f f 
    f 4 f 4 4 4 4 4 4 f 4 f 
    f 4 4 1 f 4 4 f 1 4 4 f 
    . f 4 4 4 4 4 4 4 4 f . 
    . . f 4 4 2 2 4 4 f . . 
    . b b b 4 4 4 4 b b b . 
    b 4 b b 1 1 1 1 b b 4 b 
    4 d b 1 1 1 1 1 1 b d 4 
    4 4 b 8 8 5 5 8 8 b 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
barvaz_ra.follow(ronen, 50)
controller.moveSprite(ronen)
tiles.placeOnTile(ronen, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(ronen)
let treasure_0 = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f b e e e e e e e e e e e e b f 
    f e e e e e e e e e e e e e e f 
    4 5 4 4 4 5 5 5 5 5 5 5 5 5 5 4 
    4 5 5 5 5 4 5 5 f 5 5 4 5 5 4 5 
    5 4 4 5 5 4 5 5 f 5 5 4 5 4 5 5 
    5 4 5 4 5 5 4 4 5 5 5 4 5 5 5 5 
    f e e e e e e 5 e 5 e e e e e f 
    f e e e e e 5 e e e 5 e e e e f 
    f e e e e e 5 e e e 5 e e e e f 
    f e e e e e e 5 e 5 e e e e e f 
    f e e e e e e e 5 e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f b e e e e e e e e e e e e b f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Treasure)
