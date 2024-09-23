const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let actualities = await client.getActualities();

    console.log(actualities);
}

main('username', 'password');