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
        `, SpriteKind.Food)
    cake_1 = sprites.create(img`
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
        `, SpriteKind.Food)
    tiles.placeOnTile(cake_1, tiles.getTileLocation(1, 11))
    cake_2 = sprites.create(img`
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
        tiles.placeOnTile(butb, tiles.getTileLocation(1, 11))
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 f f 5 5 5 5 5 5 . 
    . 5 . 5 5 5 5 5 f 5 5 5 5 . 5 . 
    . 5 . 5 5 5 5 5 f 5 5 5 5 . 5 . 
    . 5 . 5 5 5 5 5 f 5 5 5 5 . 5 . 
    . 5 5 5 5 5 5 5 f 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 f 5 5 5 5 . . . 
    . . . 5 5 5 5 5 f 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . e e e e e e e e e e e e e e . 
    . e e e e e e e e e e e e e e . 
    `, SpriteKind.Win)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(trophy, tiles.getTileLocation(22, 22))
setCakes()
bbbuuutttbbb()
let puppy = sprites.create(img`
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
    `, SpriteKind.Melech)
tiles.placeOnTile(puppy, tiles.getTileLocation(1, 15))
let barvaz_ra = sprites.create(img`
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
