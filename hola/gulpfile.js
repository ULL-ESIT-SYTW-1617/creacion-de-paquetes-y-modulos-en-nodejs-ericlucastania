//GULP

var gulp  = require('gulp');
var shell = require('gulp-shell');
 
 

gulp.task('gitbook', function()
{
    return gulp.src('./scripts')
        .pipe(shell([
            "gitbook install"
        ]))        
        .pipe(shell([
           "./scripts/losh generate-gitbook && generate-wiki && deploy-gitbook && deploy-wiki" 
        ]))
           
       
});


gulp.task('default', function(){
    gulp.watch(['txt/*.md', 'scripts/**',  'book.json'], ['gitbook']); 
});