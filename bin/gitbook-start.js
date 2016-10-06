#!/usr/bin/env node

var ejs = require('ejs');
var fs = require ('fs-extra');
var argv = require('minimist')(process.argv.slice(2));



// expresión regular que caza con .ejs

var re = /.ejs/g;


// Creamos la carpeta

fs.mkdirsSync(argv.a);

//Ver los nombres de los archivos dentro de las carpetas

var names = fs.readdirSync('node_modules/gitbook-start-ericlucastania/template');



function recursive(names,folder){
    for (var i in names){
        
        if(names[i].match(re)){
        
            //Renderizamos el fichero
            var data = ejs.renderFile('node_modules/gitbook-start-ericlucastania/template/'+ folder + names[i],{
                
                autor:{
                    name: argv.a,
                    repourl: argv.b,
                    issuesurl: argv.c,
                    readmeurl: argv.d,
                    wikiurl: argv.e
                }
                
            },function(err,data){
                if(err){
                    throw err;
                    
                } else{
                    return data;
                    
                }
            });
            
            
            
            //sustituimos el nombre, para quitarle la extensión ejs
            
            var newstr = names[i].replace(re, '');
            
            
            
           
            fs.writeFile(argv.a + '/' + folder + newstr, data, (err) => {
              if (err) throw err;
            });
        }
        else{
            fs.mkdirsSync(argv.a + '/' +names[i]);
            recursive(fs.readdirSync('node_modules/gitbook-start-ericlucastania/template/' + names[i]),names[i] + '/')
        }
    }
};

recursive(names,'');


