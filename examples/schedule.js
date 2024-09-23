const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let timetable = await client.getSchedules("2024-01-01", "2024-12-31");

    console.log(timetable);
}

main('username', 'password');