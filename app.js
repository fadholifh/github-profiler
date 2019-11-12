let profile = require('./profile.js')
// modular
// let profiles = ['fadholifh', 'rizafahmi']
// profiles.map(user => {
//     return profile.get(user)
// })

// console.log(process.argv)

let profiles = process.argv.slice(2)
profiles.map(profile.get)
//or
// profiles.map(user => profile.get(user))