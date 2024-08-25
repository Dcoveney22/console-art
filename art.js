// TODO Add functionality for drawing shapes
if (answer = traingle){
function drawTriangle(answerDim) {
    for (let rowCount = 0; rowCount < answerDim; rowCount++) {
        drawTheLine(rowCount)
    }   
}

function drawTheLine(length) {
    let row = '*'
    for (let starCount = 0; starCount < length; starCount++) {
        row = row + ' *'
    }  
    
    console.log(row)
}}

drawTriangle(answerDim)