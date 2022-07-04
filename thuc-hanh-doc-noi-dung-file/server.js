const fs = require('fs');
console.log('start')
 fs.readFile('text.txt',"utf-8",function (error, data){
     console.log(data)

 });
console.log('end')
