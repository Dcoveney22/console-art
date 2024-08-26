const inputFile = require('./input')

// TODO Add functionality for drawing shapes

function drawTriangle(dimension) {
    for (let rowCount = 0; rowCount < dimension; rowCount++) {
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

module.exports = { drawTriangle, drawTheLine }