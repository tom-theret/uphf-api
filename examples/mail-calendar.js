const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let mail = await client.getMailCalendar();

    console.log(mail);
}

main('username', 'password');