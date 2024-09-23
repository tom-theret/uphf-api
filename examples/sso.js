const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let ssoTicket = await client.ssoLogin("https://mail.uphf.fr/zimbra/public/preauth.jsp");

    console.log(ssoTicket);
}

main('username', 'password');