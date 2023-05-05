const { createHash } = require('crypto')

const  bcrypt = require('bcryptjs')

const bcrypt1 = require ('bcrypt')
// console.log(createHash('sha1').update('musnico@libero.it', 'binary').digest('hex'));
// setTimeout(()=>{
// 
//     console.log(createHash('sha1').update('musnico@libero.it', 'binary').digest('hex'));
// },1000)

const hashedPassword = bcrypt.hashSync('superadmin', '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
console.log(hashedPassword)


async function isMatch(password, hashedPassword) {
    return await bcrypt1.compare(password, hashedPassword)
}
async function init(password) {
    const salt = await bcrypt1.genSalt()
    const hashedPassword = await bcrypt1.hash(password, salt)
    return hashedPassword
}

init(hashedPassword)
    .then(text => {
        console.log(text);
    })

isMatch(hashedPassword, '$2b$10$GU/Y7iD1Wa1z.YAvEXlqrOLNPIDjUFxPnmHD4zzLs3KU5yycxnQWC')
    .then(text => {
        console.log(text);
    })