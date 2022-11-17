const AES256Cryptor = require("./index");

const testCryptor = new AES256Cryptor({ key: '2e42b098d064b3551cca98cfc9a13304', iv: 'cccfb96057bddb07' })

console.log(testCryptor.decrypt('e0d12d3bd170824f51d7515d639df256185c5358b3da2124c3fdff8e026c14c8e3c959bde8336f18bda3c0967f585e25ceaa7d1835dc3bc2d7376946bbbe984b9cd6da215413beddef51b0623fd80fa6'))