require('dotenv').config()

const Netstorage = require('netstorageapi')
const configSisal = {
  hostname: process.env.HOSTNAME,
  keyName: process.env.KEY_NAME,
  key: process.env.KEY,
  cpCode: process.env.CP_CODE,
  ssl: true,
}
const ns = new Netstorage(configSisal)
ns.list(`/${configSisal.cpCode}/preprod/`,(error, response, body) => {
  if (error) {
    console.log(
      `[GOT ERROR]: ${error.message}`,
    )
  } else if (response.statusCode === 200) {
      body.list.file.forEach((file) => {
          console.log('[LIST OF FILE NAME and DIR :] ' + file.name)
      })
  } else if (response.statusCode) {
    console.log(`[STATUS CODE]: ${response.statusCode} - [STATUS MESSAGE]: ${response.statusMessage} `)
  }
})
