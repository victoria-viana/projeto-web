const readline = require('readline');
const bcrypt = require('bcrypt');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual senha você quer criptografar? ', (pass) => {
    bcrypt.hash(pass, 10, (err, hash) => {
        console.log(hash);
    });
    rl.close();
});