const { createHash } = require('crypto')

console.log(createHash('sha1').update('musnico@libero.it', 'binary').digest('hex'));
setTimeout(()=>{

    console.log(createHash('sha1').update('musnico@libero.it', 'binary').digest('hex'));
},1000)