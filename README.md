## Creación de un paquete npm 

![](./images/npm.PNG)

## Tutorial de como hacer la práctica

## Descripción de la misma

[Práctica: Creación de un Paquete NPM](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicanm.html#práctica-creación-de-un-paquete-npm)



El objetivo de esta práctica es crear un package NodeJS y publicarlo en
[npm](https://www.npmjs.com/). El paquete se construye a partir de el
código que haya desarrollado en la práctica anterior.
    
    
 Se trata de añadir un ejecutable `gitbook-start` (Véase [seccion `bin`en `package.json`](https://docs.npmjs.com/files/package.json#bin))
 Este ejecutable construye una plantilla con la estructura inicial
 del libro y provee a partir de los argumentos que se le pasen los
 mecanismos para su fácil despliegue en 


 1.  GitHub `gh-pages` y en
 2.  [`https://www.gitbook.com/`](https://www.gitbook.com/)
 
 Para analizar los argumentos pasados en línea de comandos un buen
 módulo es [minimist](https://github.com/substack/minimist) 
 
 Como deberán darse de alta en el site de [npm](https://www.npmjs.com/) asegúrense de ponerle a su paquete un
 nombre único que no coincida con el de los otros alumnos, por
 ejemplo `gitbook-start-team-name`
 
 Añada a los otros miembros del equipo como `contributors`. Véase [las seccion people fields de package.json](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)
 Intente que su paquete funcione independientemente del Sistema Operativo (Linux, MacOS X, Windows, etc.)
    
    
 Véase la sección [Creación de Paquetes y Módulos en NodeJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/nodejspackages.html)
 Véase la sección[Gulp](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/gulp/)
 Estudie el paquete [ejs](https://www.npmjs.com/package/ejs) para la creación de plantillas
 Estudie [los paquetes - como `fs` - para el manejo de archivos en Node.JS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/fs.html)




### Pasos Iniciales

Empezamos borrando todo y añadiendo las carpetas bin para meter el script que se iniciará al ejecutar
nuestro paquete npm. También metemos la carpeta template que tendrá los ficheros que pasarán a ser
la estructura principal de nuestro proyecto. 

### Usando los templates .ejs

Cambiaremos el nombre del hombre que hizo el repo inicial por una variable que se sustituirá posteriormente
para ello, donde está su nombre pondremos <%= variable %>


## Cuenta en npm 

Empezaremos con esto creandonos una cuenta en npm, una vez creada. Desde la línea de comandos 
asociaremos nuestro espacio de trabajo con el de la cuenta mediante npm adduser. Una vez asociado 
podremos enviar nuestro directorio hacia npm mediante el comando npm publish.


### Entendiendo minimist

Entendiendo el proceso del minimist. 
    
    Una vez instalado el módulo vemos que podemos separar argumentos,y así poder acceder a
cada uno de los parámetros, por ahora tenemos esto.


        var argv = require('minimist')(process.argv.slice(2));
        console.dir(argv.a);
        
        
        
        if(argv.a){
            console.log("hola me llamo Eric");
            
        }

![fotoTercerPaso](./images/1.PNG)

Ahora el objetivo sería empezar a planificar el script, y ver que hacemos con los .ejs como podemos 
traducirlos para que se copien, para ello seguramente tendremos que hacer uso de alguno de los módulos
de node que nos permita copiar carpetas. Veamos el módulo Filesystem.

fs-extra que es el que nos venía nos permite crear una carpeta con un parámetro que le pasemos, en
este caso usamos la a para indicar el nombre. 1 paso listooo :) un paso menos.

        
        fs.mkdirsSync('../'+argv.a);


## Renderizar los archivos y pasarlos a otra carpeta

Tenemos que renderizar la carpeta template, cuando renderizas, 
se guardar todo en una variable de tipo string y esa variable usamos
para crear un fichero con fs en la nueva carpeta. Hemos usado 
expresiones regulares para que cuando lo introduzca en la nueva carpeta le borre la 
extensión ejs. Quedandonos los archivos perfectamente, como al principio.



## Problemas con las dependencias

Cuando se instala nuestro paquete en otro espacio de trabajo. Para su correcto funcionamiento 
es necesario que tenga una serie de paquetes de node. Estos paquetes debemos ponerlos en el 
apartado dependencies del package.json. Ya que si las ponemos en devDependencies no se instalarán 
cuando nuestro paquete sea descargado.


## Problemas con las rutas(npm install -g)

Una vez instalado correctamente el módulo y comprobado su correcto funcionamiento. Tenemos algunos
problemas con las rutas, ya que si se instala desde el npm -g, deberemos acceder a la carpeta donde
se encuentre para renderizar los archivos. Para solucionar estos problemas hemos usado el paquete 
path, que mediante el comando path.join(__dirname) nos da el directorio donde está el script, por otro lado 
para crear la carpeta donde ubicaremos los scripts renderizados, necesitamos acceder al workspace del
usuario, es decir a la carpeta donde esté trabajando. Para ello usamos el comando process.cwd()


## Componentes del grupo de trabajo
* [Eric Ramos](https://github.com/alu0100786330)
* [Lucas Ruiz](https://github.com/alu0100785265)
* [Tania González](https://github.com/tania77)
