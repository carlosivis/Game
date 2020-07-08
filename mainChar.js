import {Sprite} from '/sprite.js'
export class MainChar extends Sprite{
    constructor(matriz,image, x, y, largura, altura, larguraSprite, alturaSprite){
        super(matriz,image, x, y, largura, altura, larguraSprite, alturaSprite)
        
        this.gravidade = 3
        this.jumpSpeed = 0
        this.yInitial = 350
        this.y = this.yInitial
        this.jumpQtd = 0
        this.jumpHeight = -25
        this.walk = 10
    }
    jump(){
        if(this.jumpQtd<2){
        this.jumpSpeed = this.jumpHeight
        this.jumpQtd++
        }
      }
    gravity(){
        this.y += this.jumpSpeed
        this.jumpSpeed += this.gravidade
          if(this.y >this.yInitial){
            this.y=this.yInitial
            this.jumpQtd =0
          }
      }
    walkFront(){
        if(this.x <=800)
            this.x +=this.walk
        
    }
    walkBack(){
        if(this.x >=15)
            this.x -=this.walk
    }
}