// require 
const fs = require('fs');
const colors = require('colors');

const { Module } = require('module');

let listarTabla = (base, limite) => {

    console.log(`=========================`.green);
    console.log(`=====Tabla de ${base}====`.green);
    console.log(`=========================`.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`)
            }
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}