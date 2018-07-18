const argv = require("yargs")
.command('crear', 'Crea nueva tarea por hacer', {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
})
.command('actualizar', "Actualiza el estatus de las tareas", {
    descripcion:{
        demand: true,
        alias: 'd',
        desc: 'Actualiza estatus de la tarea'
    },
    completado:{
        demand: true,
        default: true,
        alias: 'c'
    }
})
.help()
.argv;

module.exports = {
    argv
}