import {Sprite} from '/sprite.js'

export class Enemy extends Sprite{
    constructor(matriz,image, x, y, largura, altura, larguraSprite, alturaSprite){
        super(matriz,image, x, y, largura, altura, larguraSprite, alturaSprite)
        this.speed = 7
        this.startPos = 1100
    }
    move(){
        this.x -= this.speed
        if(this.x <= -100){
          this.x = this.startPos
        }
    }
}