
// Requiring the module
const reader = require('xlsx')
// Reading our test file
const file = reader.readFile('./test.xlsx')
const fs = require("fs");

const readData = () => {
    let data = []
      
    const sheets = file.SheetNames
      
    for(let i = 0; i < sheets.length; i++)
    {
       const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
       temp.forEach((res) => {
          data.push(res)
       })
    }
      
    // Printing data
    console.log(data)
}

const writeData = async () => {
    let data = []
    console.log(fs.readdirSync("../../data/badwords"))
    const filenames = fs.readdirSync("../../data/badwords")
    filenames.map(filename => {
        if(!filename.includes("meta")){
            const txtData =  fs.readFileSync('../../data/badwords/' + filename, 'utf-8')
            const badwords = txtData.toString().split(/\r?\n/)
            const temp = badwords.map(badword => {
                return {
                    "language_code": filename.substring(0, filename.indexOf('.txt')),
                    "word": badword
                }
            });
            data.push(...temp)
        }
    })
    const ws = reader.utils.json_to_sheet(data)
    reader.utils.book_append_sheet(file,ws,"test12")
    // Writing to our file
    reader.writeFile(file,'./test.xlsx')
}

writeData()
// readData()