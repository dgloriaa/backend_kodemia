const fs = require("fs");
const os = require("os");
const path = require("path");

const homeDirectory = os.homedir();
const directoryPath = path.join(homeDirectory, "myfolder");

try {
  fs.mkdirSync(directoryPath);
  console.log("Directorio creado en:", directoryPath);

  const filePath = path.join(directoryPath, "hola.txt");
  fs.writeFileSync(filePath, "Hola desde Node", "utf-8");
  console.log("Archivo creado en:", filePath);
} catch (error) {
  console.error("Error:", error.message);
}
