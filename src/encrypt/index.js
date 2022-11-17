const { AES, SHA256, enc, format } = require('crypto-js')

class AES256Cryptor {
    #key
    #iv

    constructor (options) {
        const { key, iv } = options
        this.#key = key
        this.#iv = iv
    }

    /**
     *
     * @param {String} data
     * @param {{ hashKey: true }} options
     * @returns
     */
    encrypt (data) {
        const result = AES.encrypt(data, enc.Utf8.parse(this.#key), { iv: enc.Utf8.parse(this.#iv) }).toString(format.Hex)
        return result
    }

    /**
     *
     * @param {String} data
     * @param {{ hashKey: true }} options
     * @returns
     */
    decrypt (data) {
        const result = AES.decrypt(data, enc.Utf8.parse(this.#key), { iv: enc.Utf8.parse(this.#iv), format: format.Hex }).toString(enc.Utf8)
        return result
    }
}

module.exports = AES256Cryptor
