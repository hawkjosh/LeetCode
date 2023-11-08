// Print Last N Lines of Large File (from Leap Interview on 11/6/23)
const fs = require('fs')

const printLastNLines = (file, n) => {
	try {
		const data = fs.readFileSync(file, 'utf8').split('\n')
		console.log(data.slice(-n).join('\n'))
	} catch (error) {
		console.error('Error reading the file:', error)
	}
}

printLastNLines('myFile.txt', 5)
