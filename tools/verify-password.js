const bcrypt = require('bcrypt');
const async = require('async');
const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

let userInputs = {};

async.series([
    next => {
        readline.question('Enter your password: ', password => {
            userInputs.password = password;
            next();
        });
    },
    next => {
        readline.question('Enter your hash: ', hash => {
            userInputs.hash = hash;
            next();
        });
    },
], () => {
    readline.close();

    bcrypt.compare(
        userInputs.password,
        userInputs.hash,
        (err, result) => {
            if (err) {
                console.error('\x1b[31m', err.message);
            }

            if (result) {
                console.log('\x1b[32m', 'The password and the hash are matching!');
            } else {
                console.log('\x1b[31m', 'The password and the hash are not matching!');
            }
        
        }
    );
});

