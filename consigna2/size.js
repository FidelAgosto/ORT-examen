const fs = require('fs')

//CREA EL ARCHIVO TXT
fs.writeFile('summary.txt', '', (error) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
});

//ESCRIBE EL NOMBRE DE CADA ARCHIVO
    fs.readdir('../files', (error, archivos) => {
        archivos.forEach(archivo => {
            fs.appendFile('summary.txt','\n' + archivo, (error) => {
                if (error) {
                    console.log(`Error: ${error}`);
                }
            });
        });
    });

//NO SE COMO OBTENER EL PESO DE UN ARCHIVO