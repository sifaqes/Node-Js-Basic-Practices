const os = require('os');
// const server = require('server');

console.log(os.platform());
console.log(os.release());
console.log('Free mem: ', os.freemem());
console.log('Total  mem: ', os.totalmem());