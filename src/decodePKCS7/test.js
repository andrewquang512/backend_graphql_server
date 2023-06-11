// /* eslint-disable */
// const fs = require('fs')
// const forge = require('node-forge')

//https://www.apple.com/appleca/AppleIncRootCertificate.cer
// openssl x509 -in AppleIncRootCertificate.cer -inform der -out AppleIncRootCertificate.cer.pem
// const cer_pem_data = fs.readFileSync('AppleIncRootCertificate.cer.pem');
// var crt = forge.pki.certificateFromPem(cer_pem_data);


const receiptAsBase64 =
	'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'

// 
// // Load the app receipt
// const receiptAsn1 = forge.asn1.fromDer(
//     Buffer.from(receiptAsBase64, 'base64').toString('binary'),
// )
// const receiptPkcs7 = forge.pkcs7.messageFromAsn1(
// 	receiptAsn1
// )
// // var receipt = forge.pkcs7.messageFromPem(
// // 	`-----BEGIN PKCS7-----\n${receiptAsBase64}-----END PKCS7-----\n`,
// // )
// 
// // Load the Apple Inc. Root certificate
// const appleCerData = fs.readFileSync('AppleIncRootCertificate.cer')
// const appleCertificate = forge.pki.certificateFromAsn1(forge.asn1.fromDer(appleCerData.toString('binary')))
// if (
// 	7 * 24 * 60 * 60 * 1000 >=
// 	new Date(appleCertificate.validity.notAfter).getTime() - new Date().getTime()
// ) {
// 	// TODO: Download the new one from https://www.apple.com/appleca/AppleIncRootCertificate.cer
// 	console.warn(
// 		'Download the new one from https://www.apple.com/appleca/AppleIncRootCertificate.cer',
// 	)
// }
// // Verify that the certificates form a valid chain
// const chain = forge.pki.createCaStore([appleCertificate])
// let receiptValid = false
// try {
// 	receiptValid = forge.pki.verifyCertificateChain(chain, receiptPkcs7.certificates)
// } catch (error) {
// 	console.error(error.stack || error)
// }
// console.log('The chain of trust is verified:', receiptValid)
// 
// const asn1 = forge.asn1
// const test1 = forge.asn1.prettyPrint(receiptAsn1)
// // console.log(test1)
// 
// 
// 
// // Decode the PKCS#7 container and extract the payload
// // var payload = receiptPkcs7.rawCapture.content.value[0].value
// 
// // // Decode and parse the payload using asn1js
// // var payload_asn1 = asn1.fromBER(Buffer.from(receiptPkcs7.rawCapture.content.value[0].value))
// // var payload_set = payload_asn1.result.valueBlock.value
// 
// // // Convert the payload to a JSON object
// // var receipt_object = {}
// // for (var i = 0; i < payload_set.length; i++) {
// // 	var attribute = payload_set[i]
// // 	var type = attribute.valueBlock.value[0].valueBlock.valueDec
// // 	var value = attribute.valueBlock.value[2].valueBlock.valueHex
// // 	switch (type) {
// // 		case 2: // bundle_id
// // 			receipt_object.bundle_id = forge.util.decodeUtf8(value)
// // 			break
// // 		case 3: // application_version
// // 			receipt_object.application_version = forge.util.decodeUtf8(value)
// // 			break
// // 		case 4: // opaque_value
// // 			receipt_object.opaque_value = forge.util.bytesToHex(value)
// // 			break
// // 		case 5: // sha1_hash
// // 			receipt_object.sha1_hash = forge.util.bytesToHex(value)
// // 			break
// // 		case 17: // in_app
// // 			var in_app_asn1 = asn1.fromBER(value)
// // 			var in_app_set = in_app_asn1.result.valueBlock.value
// // 			var in_app_object = {}
// // 			for (var j = 0; j < in_app_set.length; j++) {
// // 				var subattribute = in_app_set[j]
// // 				var subtype =
// // 					subattribute.valueBlock.value[0].valueBlock.valueDec
// // 				var subvalue =
// // 					subattribute.valueBlock.value[2].valueBlock.valueHex
// // 				switch (subtype) {
// // 					case 1701: // quantity
// // 						in_app_object.quantity = parseInt(
// // 							forge.util.decodeUtf8(subvalue),
// // 						)
// // 						break
// // 					case 1702: // product_id
// // 						in_app_object.product_id =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1703: // transaction_id
// // 						in_app_object.transaction_id =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1704: // original_transaction_id
// // 						in_app_object.original_transaction_id =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1705: // purchase_date
// // 						in_app_object.purchase_date =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1706: // original_purchase_date
// // 						in_app_object.original_purchase_date =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1708: // expires_date
// // 						in_app_object.expires_date = parseInt(
// // 							forge.util.decodeUtf8(subvalue),
// // 						)
// // 						break
// // 					case 1712: // web_order_line_item_id
// // 						in_app_object.web_order_line_item_id =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 					case 1713: // cancellation_date
// // 						in_app_object.cancellation_date =
// // 							forge.util.decodeUtf8(subvalue)
// // 						break
// // 				}
// // 			}
// // 			if (!receipt_object.in_app) {
// // 				receipt_object.in_app = []
// // 			}
// // 			receipt_object.in_app.push(in_app_object)
// // 			break
// // 	}
// // }
// 
// // Print the receipt object
// // console.log(receipt_object)
// 
// // Decode the PKCS#7 container and extract the payload
// const ASN1 = require('@lapo/asn1js');
// const Base64 = require('@lapo/asn1js/base64');
// const asn = ASN1.decode(Base64.decode(receiptAsBase64));
// 
// const test2 = asn.toPrettyString('  ')
// console.log(test2)


var asn1js = require('asn1js');

// const test = Base64.decode(receiptAsBase64)
// const test2 = (Buffer.from(receiptAsBase64, 'base64').toString('ascii'))
const test3 = Uint8Array.from(Buffer.from(receiptAsBase64, 'base64').toString('latin1'), c => c.charCodeAt(0))
// const test3 = Uint8Array.from(atob(receiptAsBase64), c => c.charCodeAt(0))
// const test5 = asn1js.fromBER(Base64.decode(receiptAsBase64))
const test5 = asn1js.fromBER(test3)




const test = test5.result.valueBlock.toJSON()
console.log(test)
// console.log(test5)