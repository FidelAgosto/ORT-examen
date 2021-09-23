const fs = require('fs')

const parametro = process.argv[2];

console.log(parametro);

   
fs.readdir('../files', (error, archivos) => {
    archivos.forEach(archivo => {
        fs.readFile(archivo, 'utf8', (error, datos) => {
            if (error) throw error;
            let posicion = datos.indexOf(parametro)
            if (posicion !== -1) console.log(archivo)
        });
    });
});

//TIRA ERROR EN LA RUTA, NO LOGRE ENTENDER PORQUE.