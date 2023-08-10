const fs = require("fs");
const os = require("os");
const path = require("path");

const homeDirectory = os.homedir();
const filePath = path.join(homeDirectory, "hola.txt");

fs.writeFileSync(filePath, "Hola desde Node", "utf-8");

const exists = fs.existsSync(filePath);

if (exists) {
    console.log("Archivo creado en:", filePath);
} else {
    console.error("No se creó el archivo");
}




