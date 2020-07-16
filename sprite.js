class Sprite {
    constructor(matriz,image, x, y, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz
        this.image = image
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite
        this.frameSprite = 0
        this.xShot = this.x
    }
    show(ctx){        
            ctx.drawImage(this.image,
                this.matriz[this.frameSprite][0],this.matriz[this.frameSprite][1],
                this.largura,this.altura,
                this.x,this.y,
                this.larguraSprite,this.alturaSprite)   
            this.animate();
    }
    get center(){
        return {
            x: this.x + this.largura / 2,
            y: this.y + this.altura / 2
        }
    }
    
    animate(){
        this.frameSprite++
        
        if (this.frameSprite>=this.matriz.length) {
            this.frameSprite = 0
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
}