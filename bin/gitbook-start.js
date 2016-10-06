var ejs = require('ejs');
var gulp = require('gulp');
var ncp = require("ncp");
var read = require('fs').readFileSync;
var fs = require ('fs-extra');
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv.a);

var re = /.ejs/g;


// Creamos la carpeta

fs.mkdirsSync('../'+argv.a);

// Copiamos todos los archivos


/*
ncp("../template", "../" + argv.a, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});

*/

        
var names = fs.readdirSync('../template');

function recursive(names,folder){
    for (var i in names){
        
        if(names[i].match(re)){
        
            //probando el render
            var data = ejs.renderFile('../template/'+ folder + names[i],{
                
                autor:{
                    name: argv.a,
                    repourl: argv.b
                }
                
            },function(err,data){if(err){console.log(err)} else{return data}});
            
            
            var newstr = names[i].replace(re, '');
            console.log(newstr);
           
            fs.writeFile('../' + argv.a + '/' + folder + newstr, data, (err) => {
              if (err) throw err;
              console.log('It\'s saved!');
            });
        }
        else{
            fs.mkdirsSync('../' + argv.a + '/' +names[i]);
            recursive(fs.readdirSync('../template/' + names[i]),names[i] + '/')
        }
    }
};

recursive(names,'');




