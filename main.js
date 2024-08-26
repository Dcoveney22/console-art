const { askForShape, askForDimension } = require('./input')
const inputFile = require('./input')
const artFile = require('./art')


async function main() {
    const shape = await askForShape()
    const dimension = await askForDimension()

    // TODO Use input to draw shapes
    console.log(shape)
    console.log(dimension)
    if (shape == "triangle"){
        console.log('this is going to be a triangle'),
        artFile.drawTriangle(dimension)
    }
    if(shape == "pyramid"){
        console.log('this is goiong to be a pyramid')
        artFile.drawPyramid(dimension)
    }
    else (
        console.log('this is not valid')
    )
}
main()
