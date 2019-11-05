#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

//2
const hacerPreguntas = () => {
    const preguntas = [
        {
            name: 'FICHERO',
            type: 'input',
            message: '¿Cómo se va a llamar tu fichero? (SIN EXTENSIÓN)'
        },
        {
            name: 'EXTENSIÓN',
            type: 'LIST',
            message: '¿Qué extensión tendrá tu nuevo fichero?',
            choices: ['.js', '.ts', '.java', '.rb', '.kt', '.php', '.html', '.css'],
            filter: function(val) {
                return val.split('.')[1];
            }
        }
    ];
    return inquirer.prompt(preguntas);
}

//1
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
const respuestas = await hacerPreguntas();
//crear fichero

//añadimos mensaje de creacion correcta del nuevo fichero
};

ejecutar();