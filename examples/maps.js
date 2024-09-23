const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let map = await client.getMapPoints();
    let categories = await client.getMapCategories();
    let campus = await client.getMapCampus();

    console.log(map, categories, campus);
}

main('username', 'password');