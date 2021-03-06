//import {Sprite} from '/sprite.js'

class Enemy extends Sprite{
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
    death(){
        this.x = 1100
        const ding = new Audio();
        ding.src = 'sounds/ding.mp3';
        ding.preload = 'auto';
        ding.play();
    }
}