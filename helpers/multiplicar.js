const colors = require('colors');

const { rejects } = require('assert');
const { promises } = require('dns');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async(base=5, listar=false, Multiplicador=10) =>{
    try {
        
        let salida='', consola = '';
        for(let i = 1; i<=Multiplicador; i++){
            consola += `${base}${'x'.red}${i} ${'='.green} ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar){
        console.log('========================='.green);
        console.log('TABLA DEL:'.green,colors.blue (base));
        console.log('========================='.green);
        
        console.log(consola);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;

            
    } catch (err) {
        throw err;            
    }
       
}

module.exports={
    crearArchivo
}


