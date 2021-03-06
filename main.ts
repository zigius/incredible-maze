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
        music.bigCrash.play()
        exploding_bomb = sprites.create(assets.image`exploding_bomb`, SpriteKind.kill)
        tiles.placeOnTile(exploding_bomb, tiles.getTileLocation(1, 11))
        exploding_bomb.setPosition(ronen.x, ronen.y)
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
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Melech)
tiles.placeOnTile(puppy, tiles.getTileLocation(1, 15))
let barvaz_ra = sprites.create(img`
    . . . d d d d d d . . . . . . . 
    . . d c b b b b c d . . . . . . 
    . d b b b b b b b b d . . . . . 
    d b b b b b b b b b c d . . . . 
    d b d c c c c d b b b d . . . . 
    f b c f c c f c b b b f . . . . 
    f b b b b b b b b b b f . . . . 
    . f b b b b c d b b c f . . . . 
    . . f d d d d b b c f d d d . . 
    . . d c 2 b b b f d d b b b d . 
    . d c b b 2 b b d f c b b b b d 
    . d 1 1 1 1 b c c d c c c d d d 
    . d 1 1 1 1 1 c c c c c c d . . 
    . d c 1 1 1 1 1 c c c c c d . . 
    . . d c 1 1 1 1 1 b c c d d . . 
    . . . d d d d d d d d d d . . . 
    `, SpriteKind.Enemy)
ronen = sprites.create(img`
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
    f e e e e e e 5 e 5 e e e e e f 
    f e e e e e e e 5 e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f b e e e e e e e e e e e e b f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Treasure)
