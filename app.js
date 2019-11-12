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

let request = https.request(options, (res) => {
    // console.log('Got res: ', res.statusCode)
    let body = ''
    res.on('data', (data) => {
        body = body + data
    })
    res.on('end', () => {
        console.log(body)
    })
})

request.end()

request.on('error', (e) => {
    console.log(e)
})