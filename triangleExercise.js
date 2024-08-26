
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

drawTriangle(5)
 

