const fs = require("fs");
const os = require("os");
const path = require("path");

const homeDirectory = os.homedir();
const directoryPath = path.join(homeDirectory, "myfolder3");

try {
  fs.mkdirSync(directoryPath);
  console.log("Directorio creado en:", directoryPath);

  const filePath = path.join(directoryPath, "hola.txt");
  fs.writeFileSync(filePath, "Hola desde Node", "utf-8");
  console.log("Archivo creado en:", filePath);

  const directoryContents = fs.readdirSync(directoryPath);
  console.log("Contenido del directorio:", directoryContents);


  fs.rmdirSync(directoryPath, { recursive: true });
  console.log("Directorio eliminado:", directoryPath);
} catch (error) {
  console.error("Error:", error.message);
}
