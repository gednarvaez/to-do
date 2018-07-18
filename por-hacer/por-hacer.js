const fs = require('fs');


let listadoxHacer = [];


const guardarDB = () =>{
    let data = JSON.stringify(listadoxHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

const cargarDB = () =>{
    try{
        listadoxHacer = require('../db/data.json');
    }
    catch(e){
        listadoxHacer = [];
    }
}

const crear = (descripcion)=>{
    cargarDB();
    let porHacer = {
        descripcion,
        completado : false,
    }
    listadoxHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () =>{
    cargarDB();
    return listadoxHacer;
}

module.exports = {crear, getListado};
