#!/usr/bin/env node

var path = require('path');
var ejs = require('ejs');
var fs = require ('fs-extra');
var argv = require('minimist')(process.argv.slice(2));



// expresión regular que caza con .ejs
var direct = process.cwd() + '/';
var re = /.ejs/g;
var ruta = path.join(__dirname);


if ((argv.a) || argv.b || argv.c || argv.d || argv.e){
    //console.log("holi");


// Creamos la carpeta

fs.mkdirsSync(direct + argv.a);

//Ver los nombres de los archivos dentro de las carpetas

var names = fs.readdirSync(ruta + '/..' + '/template/');



function recursive(names,folder){
    for (var i in names){
    
        if(names[i].match(re)){
        
            //Renderizamos el fichero
            var data = ejs.renderFile(ruta + '/..' + '/template/' + folder + names[i],{
                
                autor:{
                    name: argv.autor,
                    repourl: argv.repo,
                    issuesurl: argv.issue,
                    readmeurl: argv.readme,
                    wikiurl: argv.wiki
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
            
            
            
           
            fs.writeFile(direct + argv.a + '/' + folder + newstr, data, (err) => {
              if (err) throw err;
            });
        }
        else{
            fs.mkdirsSync(direct + argv.a + '/' +names[i]);
            recursive(fs.readdirSync(ruta + '/..' + '/template/' + names[i]),names[i] + '/')
        }
    }
};

recursive(names,'');
}
else {
    console.log("Maaaaaal");
}


