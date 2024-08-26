const { rawlist, input  } = require('@inquirer/prompts');
exitWords = ['Quit', 'q']
let wholeAnswer = []

async function askForShape() {
    const answerType = await rawlist({
        message: 'Select a shape',
        choices: [
          { name: 'Square', value: 'square' },
          { name: 'Triangle', value: 'triangle' },
          { name: 'Upside down pyramid', value: 'pyramid' },
          { name: 'Upside down pyramid', value: 'uPyramid' },
          { name: 'Quit', value: 'quit'}
        ],
  
      });
         wholeAnswer.push(answerType)
         
}
async function askForDimension() {
    const answerNo = await input({ message: 'What dimensions should the shape have?' });
    wholeAnswer.push(answerNo)
    
}




module.exports = { askForShape, askForDimension }
