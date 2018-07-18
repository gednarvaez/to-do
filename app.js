const argv = require('./config/yargs').argv;
const porHacer =  require('./por-hacer/por-hacer'); 
const color = require('colors');



let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('===================POR HACER==============='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('==========================================='.green);

        }
    
    break;
    case 'actualizar':
        console.log("Actualiza la lista de tareas");
        break;
    default:
    console.log("comando no es reconocido");
        break;
}
 