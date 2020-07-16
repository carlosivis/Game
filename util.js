function CreateMatrizSprites(baseX,baseY,lineQtd,columnQtd,frameQtd){
    let matriz = []
    for(let i = 0 ; i<=lineQtd ;i++){
        for(let j = 0; j<= columnQtd; j++)
            if(frameQtd>=0)
                matriz.push([baseX*j],[baseY*i])
            frameQtd--
    }
    return matriz
}


export {
    CreateMatrizSprites
}