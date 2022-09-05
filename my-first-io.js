const fs = require('fs')
const { argv } = require('process')
const content=fs.readFileSync(argv[2],'utf-8'); 
var lines = content.split('\n').length - 1  
console.log(lines)