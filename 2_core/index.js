// Core modules = módulos embutidos

// Módulo operational system (os)
const os = require("os");

// console.log(os.arch()); // Architetura (32, 64 ou outro)
// console.log(os.platform()); // windows, unix
// console.log(os.type()); // windows, linux
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.freemem()); // bytes
// console.log(os.totalmem()); // bytes
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());

// Módulo fs = filesystem
const fs = require("fs");

// Escreve o texto em um novo arquivo
fs.writeFileSync("./batata.txt", "BATATA É BOM DEMAIS");

const arquivo = fs.readFileSync("./batata.txt");
console.log(arquivo.toString());
