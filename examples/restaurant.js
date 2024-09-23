const UPHF = require('uphf-api');

async function main(username, password) {
    let client = await UPHF.authWithCredentials({
        username: username,
        password: password
    });
    let restaurants = await client.getRestaurants();
    let menu = await client.getMenuFromRestaurant(restaurants[0].id);

    console.log(menu);
}

main('username', 'password');