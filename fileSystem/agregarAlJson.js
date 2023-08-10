const fs = require('fs')

const content = fs.readFileSync('nombres.json', "utf-8")

const contentAsObj = JSON.parse(content);

console.log(typeof contentAsObj);

contentAsObj.push({ name: "jon" });

fs.writeFileSync('nombres.json', JSON.stringify(contentAsObj));

