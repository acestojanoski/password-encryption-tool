const bcrypt = require('bcrypt');
const saltRounds = 10;

const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

readline.question('Enter the password that you want to hash: ', (password) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.error('Error with generating Salt');
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                console.error('Error with hashing password');
            }
            console.log('Hashed password: ' + hash);
        });
    });

    readline.close();
});

