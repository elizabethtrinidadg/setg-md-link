#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');


const iniciar = () => {
    console.log(
        chalk.green.green(
            figlet.textSync('Prueba CLI'), {
                font: 'Bubble',
                horizontalLayout: 'default',
                verticalLayout: "default"
            })
        );
}

const ejecutar = async() => {
//mostrar informacion de la libreria en la cabecera
iniciar();
// preguntas necesarias para crear fichero (nombre, y extension)

//crear fichero

//añadimos mensaje de creacion correcta del nuevo fichero
};

ejecutar();