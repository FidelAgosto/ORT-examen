const fs = require('fs')

fs.readdir('../files', (error, archivos) => {
    console.log('Cantidad de archivos en la carpeta files son: ' + archivos.length);
});