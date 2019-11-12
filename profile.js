let https = require('https')

let get = (username) => {
    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/users/${username}`,
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
            let profile = JSON.parse(body)
            if  (res.statusCode === 200) {
                // console.log(body)
                console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} followers(s)`)
            } else {
                console.log(`Profile with username '${username}' not found`)
            }
            
        })
    })
    
    
    request.end()
    
    request.on('error', (e) => {
        console.log(e)
    })
}

module.exports = {
    get
}