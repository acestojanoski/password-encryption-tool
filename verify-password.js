const bcrypt = require('bcrypt');

const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

readline.question('Enter your password, then |, and after that hash: ', (passwordAndHash) => {
    passwordAndHash = passwordAndHash.split('|');

    bcrypt.compare(passwordAndHash[0], passwordAndHash[1],
        (err, res) => {
            if (err) {
                console.error(err.message);
            }

            if (res) {
                console.log('Verifyed!');
            } else {
                console.log('Not verifyed!');
            }
        }
    );

    readline.close();
});

