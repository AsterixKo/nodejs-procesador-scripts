const fs = require('fs');//es una libreria que existe
const fileName = process.argv[1];

if(!fileName){
    throw new Error('No existe el archivo');
}

//cada vez que guardamos este archivo se ejecutará este watch
fs.watch(fileName, ()=> console.log(`El archivo ${fileName} ha sido modificado`));
console.log(`Comprobando el estado del archivo`);

//es un array de rutas, la primera es la de node,
//la siguiente la de mi app.js, los siguientes valores son argumentos
console.log('process.argv', process.argv);

