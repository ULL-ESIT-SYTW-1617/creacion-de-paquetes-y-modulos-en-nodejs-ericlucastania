var gulp = require('gulp');
var ejs = require("gulp-ejs");
 
 
 
 gulp.task('ejs', function() {

    gulp.src("./template/package.ejs")
        .pipe(ejs({
            autor: {
                name: "Eric"
            }
        }))
        .pipe(gulp.dest("./dist"));
 });