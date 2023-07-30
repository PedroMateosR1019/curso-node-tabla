const { describe } = require('yargs');


const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'

                })
                .options('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la cosnola',
                })
                .options('h',{
                    alias: 'Multiplicador',
                    type: 'number',
                    demandOption: false,
                    default: 10,
                    describe: 'Numero hasta el cual se multiplica',
                })
                .check((argv, options)=>{
                    console.log('yargs',argv)
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                
                }
                return true;

                })                
                .argv;

//Exportar los argumentos
module.exports=argv;