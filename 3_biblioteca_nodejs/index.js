// const os = require('os');
// // const server = require('server');
// console.log(os.platform());
// console.log(os.release());
// console.log('Free mem: ', os.freemem(), ' bytes');
// console.log('Total  mem: ', os.totalmem(), ' bytes');
// console.log(os.uptime());
const fs = require('fs');

// creat  archivo
fs.writeFile('./text.txt', 'Hola soy siphax zerrouki', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado con exito');
});
// leer archivo
fs.readFile('./text.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})


// console.log('Ultima  linea');



// Script err
// const users = query('SELECT * FROM USERS');
// quer('SELECT * FROM users', function(err, users) {
//     if (err) {
//         console.log(err);
//     }
//     if (users) {
//         console.log(users);
//     }
// });