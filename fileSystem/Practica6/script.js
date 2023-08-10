const fs = require("fs");
const path = require("path");

const databaseFilePath = path.join(__dirname, "database.json");

function readDatabase() {
  try {
    const databaseContent = fs.readFileSync(databaseFilePath, "utf-8");
    return JSON.parse(databaseContent);
  } catch (error) {
    return [];
  }
}

function writeDatabase(data) {
  fs.writeFileSync(databaseFilePath, JSON.stringify(data, null, 2), "utf-8");
}

function addKoder(newKoder) {
  const database = readDatabase();
  database.push(newKoder);
  writeDatabase(database);
  console.log("Nuevo koder registrado:", newKoder);
}

function listKoders() {
  const database = readDatabase();
  console.log("Lista de koders:");
  database.forEach((koder, index) => {
    console.log(`${index + 1}. ${koder.name}`);
  });
}

function resetKoders() {
  writeDatabase([]);
  console.log("Koders eliminados.");
}

function removeKoderByName(name) {
  const database = readDatabase();
  const updatedDatabase = database.filter((koder) => koder.name !== name);
  writeDatabase(updatedDatabase);
  console.log(`Koder "${name}" eliminado.`);
}

const command = process.argv[2];

if (command === "add") {
  const newKoderName = process.argv[3];
  addKoder({ name: newKoderName });
} else if (command === "ls") {
  listKoders();
} else if (command === "reset") {
  resetKoders();
} else if (command === "rm") {
  const koderToRemove = process.argv[3];
  removeKoderByName(koderToRemove);
} else {
  console.log("Comando no reconocido.");
}
