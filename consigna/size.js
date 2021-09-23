const fs = require('fs')

fs.writeFile('summary.txt', '', (error) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
});

    fs.readdir('../files', (error, archivos) => {
        archivos.forEach(archivo => {
            fs.appendFile('summary.txt','\n' + archivo, (error) => {
                if (error) {
                    console.log(`Error: ${error}`);
                }
            });
        });
    });