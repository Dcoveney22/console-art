const inputFile = require('./input')

// TODO Add functionality for drawing shapes

// TRIANGLE SHAPE
function drawTriangle(height) {
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
drawTriangle()

//======================

// function drawPyramid(height) {
//     for (let rowCount = 0; rowCount < height; rowCount++) {
//         let line = '';
//         for (let k = 0; k < (height - rowCount); k++) {
//             line += ' ';          
//         }

//         for (j = 0; j != (2 * rowCount - 1); j++){
//             line += '*';
//         }
//         for (let k = rowCount + 1;  k <= height + 1; k++){
//             line += ' ';
//     }
//     console.log(line)
// } 
    
      
// }
// function drawTheLine(length) {
//     let row = '*'
//     for (let starCount = 0; starCount < length; starCount++) {
//         row = row + ' *'
//     }  
// console.log(row)
// }
drawPyramid()    

module.exports = { drawTriangle, drawTheLine, drawPyramid }