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
export class Shot{
  constructor(x,y,largura,altura){
      this.x = x
      this.y = y
      this.largura = largura
      this.altura = altura
      this.spd = 5
  }
  shot(ctx){
      ctx.strokeStyle = 'white';
      ctx.strokeRect(this.x, this.y, this.largura, this.altura);
  }
  get center(){
    return {
        x: this.x + this.largura / 2,
        y: this.y + this.altura / 2
    }
}
  collision(target){
    let a = Math.abs(target.center.x - this.center.x);
    let b = Math.abs(target.center.y - this.center.y);
    let d = Math.sqrt(a ** 2 + b ** 2);
    let r1 = this.altura / 2;
    let r2 = target.altura / 2;

            return d <= r1 + r2;
  }
  move(){
    this.x += this.spd
    if( this.x>= 1000){
      this.canDelete = true
    }
  }

}