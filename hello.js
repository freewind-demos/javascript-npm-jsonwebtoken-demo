const jwt = require('jsonwebtoken')

const data = {foo: 'bar'}
console.log('------ data --------')
console.log(data)

const token = jwt.sign(data, 'my-secret')
console.log('------ token --------')
console.log(token)

const verifyResult = jwt.verify(token, 'my-secret')
console.log('------ verifyResult -------')
console.log(verifyResult)

try {
    jwt.verify(token, 'invalid-secret')
} catch (e) {
    console.log('-------- verify failed ------')
    console.log(e.toString())
}

const decoded = jwt.decode(token)
console.log('--------- decoded -----------')
console.log(decoded)

const decodedWithWrongSignature = jwt.decode(token + '-break-the-signature')
console.log('--------- decodedWithWrongSignature -----------')
console.log(decodedWithWrongSignature)