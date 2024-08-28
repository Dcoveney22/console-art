const inputFile = require('./input')

// TODO Add functionality for drawing shapes

// TRIANGLE SHAPE
function drawTriangle(height) {
    for (let rowCount = 0; rowCount < height; rowCount++) {
        drawTheLine(rowCount)
    }   
}
function drawTheLine(length) {
    let row = ''
    for (let starCount = 0; starCount < length; starCount++) {
        row = row + ' *'
    }  
    
    console.log(row)
}


//======================
//PYRAMID SHAPE

function drawPyramid(height) {
    console.log('thisone')
    for (let rowCount = 0; rowCount < height; rowCount++) {
        drawTheLine(rowCount)
    }   
}
function drawTheLine(length) {
    let row = '  *'
    for (let starCount = 0; starCount < length; starCount++) {
        row = row + ' *'
       
    }  
     console.log(row)
   
}      

//UPSIDE DOWN PYRAMID SHAPE

function drawUPyramid(height) {
    for (let rowCount = 0; rowCount < height; rowCount++) {
        drawTheLine(rowCount)
    }   
}
function drawTheLine(length) {
    let row = '*'
    for (let starCount = 0; starCount < length; starCount++) {
        row = row + ' *'
    }  
    
    console.log(row)
}    

//UPSIDE SQUARE SHAPE

function drawSquare(dimension) {
    //print top line
    for (let i = 0; i < dimension; i++){
        let line = " "
        for (let j = 0; j < dimension; j++) {
        line += "*  ";
            
        }
        console.log(line)

    }    

}
module.exports = { drawTriangle, drawTheLine, drawPyramid, drawUPyramid, drawSquare }