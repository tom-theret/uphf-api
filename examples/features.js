const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let features = await client.getFeatures();

    console.log(features);
}

main('username', 'password');