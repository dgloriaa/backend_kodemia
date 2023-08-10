const fs = require("fs");

fs.writeFileSync('hola.txt', 'Hola desde Node', 'utf-8');

const exists = fs.existsSync('hola.txt')

if (exists) {
    console.log('Archivo creado');
} else {
    console.error("No se creo el archivo")
}

