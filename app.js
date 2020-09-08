const argv = require('./Config/yargs').argv; //se puede extraear directamente lo que se ocupa del obj de esta manera.
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js') //destructuracion!!

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado: ${archivo.green}`);
            }).catch((err) => {
                console.log(err);
            });
        console.log('crear');
        break;
    default:
        console.log('comando no reconocido');
}