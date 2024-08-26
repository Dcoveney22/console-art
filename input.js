const { rawlist, input  } = require('@inquirer/prompts');
exitWords = ['Quit', 'q']
//let wholeAnswer = []

async function askForShape() {
    const answer = await rawlist({
        message: 'Select a shape',
        choices: [
          { name: 'Square', value: 'square' },
          { name: 'Triangle', value: 'triangle' },
          { name: 'Pyramid', value: 'pyramid' },
          { name: 'Upside down pyramid', value: 'uPyramid' },
          { name: 'Quit', value: 'quit'}
        ],
      
      });  
      return answer;
         //wholeAnswer.push(answerType)
         
}
async function askForDimension() {
    const answer = await input({ message: 'What dimensions should the shape have?' });
    return answer;
    //wholeAnswer.push(answerNo)
    
}




module.exports = { askForShape, askForDimension }
