const { askForShape, askForDimension } = require('./input')
const inputFile = require('./input')
const artFile = require('./art') 

async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension()

    // TODO Use input to draw shapes
    if (inputFile.askForShape = 'triangle'){
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
        drawTriangle(dimension)
    }
        
}


main()
