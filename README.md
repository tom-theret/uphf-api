# uphf-api

A simple wrapper to interact with the internal UPHF (Université Polytechnique Haut-de-France) API

![NPM Version](https://img.shields.io/npm/v/uphf-api)
![NPM Downloads](https://img.shields.io/npm/dy/uphf-api)
![NPM License](https://img.shields.io/npm/l/uphf-api)

> [!important]
> This package is not affiliated with the UPHF (Université Polytechnique Haut-de-France) and is not officially supported by the institution. I am not responsible for any misuse of this package. This package is intended to help students and staff to interact with the internal API of the UPHF.

## 📦 Installation

```bash
# With npm
npm install uphf-api
# With pnpm
pnpm add uphf-api
# With yarn
yarn add uphf-api
```

## 🔧 Usage

### Authentification with credentials

```javascript
conts UPHF = require('uphf-api');

async function main() {
    let client = UPHF.authWithCredentials({
        username: 'username',
        password: 'password'
    });

    console.log(client);
}

main();
```

## ✅ Features

- [x] 🔐 Connection
  - [x] With credentials
  - [ ] With refresh token

- [x] 📰 Actualities
- [x] 📒 Contacts
- [x] 🪪 Features authorization
- [x] 📯 Important news
- [x] 🗺️ Maps
  - [x] Campus
  - [x] Categories
  - [x] Points of interest
- [x] 📅 Personal calendars (Zimbra calendars)
- [x] 🍴 Restaurants
  - [x] General information
  - [x] Menus
- [x] 📅 Schedule
- [x] 🔑 SSO Connection (via CAS for external services)
- [x] ✉️ Unread messages count (Zimbra mailbox)
- [x] 🫴 Useful information
- [x] 👨 User information

## 📜 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](https://github.com/tom-theret/uphf-api/LICENSE) file for details.

## 📝 Contributing

Please read [CONTRIBUTING.md](https://github.com/tom-theret/uphf-api/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## 🙏 Acknowledgments

- [UPHF (Université Polytechnique Haut-de-France)](https://www.uphf.fr/) for the API and account.
- [Raphaël (raphckrman)](https://github.com/raphckrman) for the structure of the library.
