
var ncp = require("ncp");
var fs = require ('fs-extra');
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv.a);


// Creamos la carpeta

fs.mkdirsSync('../'+argv.a);

// Copiamos todos los archivos

ncp("../template", "../" + argv.a, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});





if(argv.a){
    console.log("hola me llamo Eric");
    
}