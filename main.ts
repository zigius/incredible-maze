tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201010303030303030301010101010202010101010103010103010101010102020101010101010303010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202020202020202020202020202020202`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles25,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
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
