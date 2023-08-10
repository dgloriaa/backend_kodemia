const fs = require('fs')
const obj =[{ name: 'daniel'}, { name: 'david'}, { name: 'ale'}];

const objString = JSON.stringify(obj);
fs.writeFileSync('nombres.json', objString, "utf-8")