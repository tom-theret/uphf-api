const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let contacts = await client.getContacts("STAFF","Tom");

    console.log(contacts);
}

main('username', 'password');