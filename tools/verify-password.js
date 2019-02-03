const bcrypt = require('bcrypt');
const async = require('async');
const readline = require('readline')
    .createInterface({
        input: process.stdin,
        output: process.stdout
    });

async.series([
    next => {
        readline.question('Enter your password: ', password => {
            next(null, password);
        });
    },
    next => {
        readline.question('Enter your hash: ', hash => {
            next(null, hash);
        });
    },
], (err, inputs) => {
    readline.close();

    bcrypt.compare(
        inputs[0],
        inputs[1],
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

