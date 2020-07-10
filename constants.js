const baseValueSprite = 220
const matrizChar = [
    [0,0],[baseValueSprite,0],
    [baseValueSprite*2,0],[baseValueSprite*3,0],

    [0,baseValueSprite],[baseValueSprite,baseValueSprite],
    [baseValueSprite*2,baseValueSprite],[baseValueSprite*3,baseValueSprite],

    [0,baseValueSprite*2],[baseValueSprite,baseValueSprite*2],
]
const matrizSlime = [
    [0,0],[baseValueSprite,0],
    [baseValueSprite*2,0],[baseValueSprite*3,0],

    [0,baseValueSprite],[baseValueSprite,baseValueSprite],
    [baseValueSprite*2,baseValueSprite],[baseValueSprite*3,baseValueSprite],

    [0,baseValueSprite*2],[baseValueSprite,baseValueSprite*2],
    [baseValueSprite*2,baseValueSprite*2], [baseValueSprite*3,baseValueSprite*2],

    [0,baseValueSprite*3],
    ]

export {
    baseValueSprite,
    matrizChar,
    matrizSlime,
}