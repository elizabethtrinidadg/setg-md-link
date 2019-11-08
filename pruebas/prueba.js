#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');


//4
ficheroOk = filepath => {
    console.log(
        chalk.white.bgGreen.bold(`Tu fichero ha sido creado correctamente en el directorio  ${filepath}`));
};

//3
const crearFichero = (nombreFichero, extension) => {
    const pathFichero = `${process.cwd()}/${nombreFichero}.${extension}`;
    shelljs.touch(pathFichero);
    return pathFichero;
}

//2
const hacerPreguntas = () => {
    const preguntas = [
        {
            name: 'FICHERO',
            type: 'input',
            message: '¿Cómo se va a llamar tu fichero? (SIN EXTENSIÓN)'
        },
        {
            name: 'EXTENSION',
            type: 'list',
            message: '¿Qué extensión tendrá tu nuevo fichero?',
            choices: ['.js', '.md', '.java', '.rb', '.kt', '.php', '.html', '.css'],
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
        chalk.green(
            figlet.textSync('Creador CLI', {
                font: 'ASCII New Roman',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
        };

const ejecutar = async () => {
//mostrar informacion de la libreria en la cabecera
iniciar();
// preguntas necesarias para crear fichero (nombre, y extension)
const respuestas = await hacerPreguntas();
const { FICHERO, EXTENSION } = respuestas;
console.log(respuestas);
//crear fichero
const pathFichero = crearFichero(FICHERO, EXTENSION);
//añadimos mensaje de creacion correcta del nuevo fichero
ficheroOk(pathFichero);
};

ejecutar();