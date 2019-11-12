let https = require('https')

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/fadholifh',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}
// read data
let request = https.request(options, (res) => {
    // console.log('Got res: ', res.statusCode)
    let body = ''
    res.on('data', (data) => {
        body = body + data
    })
    res.on('end', () => {
        // console.log(body)
        let profile = JSON.parse(body)
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
    })
})


request.end()

request.on('error', (e) => {
    console.log(e)
})