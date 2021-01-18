function setCakes () {
    cake = sprites.create(img`
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
    tiles.placeOnTile(cake, tiles.getTileLocation(1, 10))
    tiles.placeOnTile(cake, tiles.getTileLocation(1, 11))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    cake.destroy()
    music.baDing.play()
})
let cake: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1800180003070707070707070707070707070707070707070707070209010a01010101010101010101010101010101010101010609010a0101010a0a0a0a0101010a010a010a0101010a010609010a0101010a01010a0101010a010a010a0101010a010609010a0101010a01010a0101010a010a010a0101010a010609010a0a0a0a0a0a0a0a010a0a0a0a0a010a010a0a0a010609010101010101010101010101010101010101010101010609010a0a0a0a0a0a010a0a0a0a0a0a0a0a0a0a0a0a0a0a06090101010101010a010a0101010101010101010101010106090101010101010a010a010101010101010101010101010609010a0a0a0a0a0a010a010a0a0a0a0a0a0a0a0a0a0a010609010a0101010101010a010a0101010101010101010a010609010a010a0a0a0a0a0a010a010a0a0a0a0101010101010609010a01010101010101010a010a01010a0a0a0a0a0a010609010a01010101010101010a010a0101010101010101010609010a0a0a0a0a0a0a0a0a0a010a0101010101010101010609010a010101010101010101010a0a0a0a0a0a0a0a0a010609010a0101010101010101010101010101010101010a01060901010a010a0a0a0a0a010a010a010a0a0a01010a010a060901010a010a0101010a010a010a010a0101010a010a010609010a01010a0101010a0101010a010a01010a010a010a0609010101010a0101010a0101010a010a0101010a010a01060901010a0a0a0101010a0101010a010a0a0a01010a010106040808080808080808080808080808080808080808080805`, img`
    222222222222222222222222
    2.2....................2
    2.2...2222...2.2.2...2.2
    2.2...2..2...2.2.2...2.2
    2.2...2..2...2.2.2...2.2
    2.22222222.22222.2.222.2
    2......................2
    2.222222.222222222222222
    2......2.2.............2
    2......2.2.............2
    2.222222.2.22222222222.2
    2.2......2.2.........2.2
    2.2.222222.2.2222......2
    2.2........2.2..222222.2
    2.2........2.2.........2
    2.2222222222.2.........2
    2.2..........222222222.2
    2.2..............2...2.2
    2..2.22222.2.2.222.2.2.2
    2..2.2...2.2.2.222.2.2.2
    2.2..2...2...2.222.2...2
    2....2...2...2.222.22222
    2..222...2...2.222.....2
    222222222222222222222222
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.floorLight0], TileScale.Sixteen))
setCakes()
music.jumpDown.play()
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(mySprite)
