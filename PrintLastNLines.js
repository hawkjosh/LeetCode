// Print Last N Lines of Large File (from Leap Interview on 11/6/23)
const fs = require('fs')
// const mammoth = require('mammoth')

const printLastNLines = (file, n) => {
  try {
    const data = fs.readFileSync(file, 'utf8').split('\n')
    // const data = fs.readFileSync(file, 'ascii').split('\n')
    // const data = fs.readFileSync(file, 'utf16le').split('\n')
    // const data = fs.readFileSync(file, 'base64').split('\n')
    // const data = fs.readFileSync(file, 'hex').split('\n')
    const lastNLines = data.slice(-n - 1)
    console.log(lastNLines.join('\n'))
  } catch (error) {
    console.error('Error reading the file:', error)
  }
}

printLastNLines('myFile.txt', 5)
