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
    
    animate(){
        this.frameSprite++
        
        if (this.frameSprite>=this.matriz.length) {
            this.frameSprite = 0
        }
    }
}
class Shot{
    constructor(x,y,largura,altura){
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
    }
    shot(ctx){
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, this.largura, this.altura);
    }
}