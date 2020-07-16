import {baseValueSprite, matrizChar,matrizSlime} from '/constants.js'
import {Enemy} from '/enemy.js'
import {MainChar, Shot} from '/mainChar.js'
import {Map} from '/map.js'

let imgBackground = new Image()
let imgBackground2 = new Image()
let imgSlime = new Image()
let imgChar = new Image()
let map
let chao
let slime
let charSprite
let shot = []
//let contShot = 0

let canvasEl = document.querySelector('#game');
let ctx = canvasEl.getContext('2d');

ctx.imageSmoothingEnabled = false;


    imgBackground.src = 'imgs/background.jpg'
    map = new Map(imgBackground,2,1000,500,0)

    imgBackground2.src = 'imgs/background-2.png'
    chao = new Map(imgBackground2,20,1000,100,425)

    imgSlime.src = 'imgs/slimeRed.png'
    slime = new Enemy(matrizSlime, imgSlime, 1100,300, baseValueSprite,baseValueSprite,baseValueSprite,baseValueSprite)

    imgChar.src = 'imgs/Megamanx.png'
    charSprite = new MainChar(matrizChar,imgChar, 0, 350, baseValueSprite,baseValueSprite,baseValueSprite/2,baseValueSprite/2)


    imgChar.addEventListener('load', (e)=>{
        drawGame()
    })

canvasEl.addEventListener('mousemove', (e)=>{
    charSprite.x = e.offsetX - charSprite.largura/2
    //charSprite.y = e.offsetY - charSprite.altura/2
})
document.body.addEventListener('keydown', e =>{
    if(e.key === 'w'|| e.key === 'ArrowUp'){
        charSprite.jump()
    }
    else if(e.key === 'd'|| e.key === 'ArrowRight'){
        charSprite.walkFront()
    }
    else if(e.key === 'a'|| e.key === 'ArrowLeft'){
        charSprite.walkBack()
    }
    else if( e.key=== ' '){
        //contShot++
        shot.push(new Shot(charSprite.x+30,charSprite.y+30,25,25))
        e.preventDefault()
    }
})
document.body.addEventListener('keyup', e =>{

})
function verifyCollide(){
    const collideChar = slime.collision(charSprite)
    if(collideChar){
        slime.death()
    }
    
    for(let pew of shot){
        const collideShot = pew.collision(slime)
        if(collideShot){
            slime.death()
            pew.x = 1500
            pew.canDelete = true
        }
    }
}
function drawGame(){
    setInterval(() =>{
        ctx.clearRect(0,0,1000,500)

        map.show(ctx)
        map.move(ctx)

        chao.show(ctx)
        chao.move(ctx)

        charSprite.show(ctx)
        charSprite.gravity()
        verifyCollide()

        slime.show(ctx)
        slime.move()
        shot.forEach( i =>{
            i.shot(ctx)
            i.move()
            
        })

        
        for(let i =0; i < shot.length; i++){
            if(shot[i].canDelete){
             shot.slice(i, 1)
            }
        }
    },33)
}


