/**
 * name: 'attgenericId',
 * name: 'attBaseIdentity',
 * name: 'attAddress',
 * @type {*[]}
 */
const definitions = [{
  identifier: 'cvc:Credential:Email',
  version: '1',
  depends: ['cvc:Contact:email']
}, {
  identifier: 'cvc:Credential:PhoneNumber',
  version: '1',
  depends: ['cvc:Contact:phoneNumber']
}, {
  identifier: 'cvc:Credential:User',
  version: '1',
  depends: ['cvc:User:id', 'cvc:User:realm']
}, {
  identifier: 'cvc:Credential:GenericDocumentId',
  version: '1',
  depends: ['cvc:Document:type', 'cvc:Document:number', 'cvc:Document:name', 'cvc:Document:gender', 'cvc:Document:issueLocation', 'cvc:Document:issueAuthority', 'cvc:Document:issueCountry', 'cvc:Document:placeOfBirth', 'cvc:Document:dateOfBirth', 'cvc:Document:address', 'cvc:Document:properties', 'cvc:Document:image']
}, {
  identifier: 'cvc:Credential:Address',
  version: '1',
  depends: ['cvc:Identity:address']
}, {
  identifier: 'cvc:Credential:Identity',
  version: '1',
  depends: ['cvc:Identity:name', 'cvc:Identity:dateOfBirth']
}];

module.exports = definitions;