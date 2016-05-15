/* This is the gulp file for the backend of Dispater*/
var gulp = require('gulp')
var ts = require("gulp-typescript")
var sourcemaps = require("gulp-sourcemaps")
var del = require("del")


/*create typescript project*/

var tsServerProject = ts.createProject("tsconfig.json",{
    typescript:require("typescript")
})

// Cleanup by deleting target directory
gulp.task("clean", () => {
    del.sync("./dist");
});

/*compile typescript*/
gulp.task("compile", function() {
    gulp.src("./src/*.ts")
    .pipe(sourcemaps.init())
    .pipe(ts(tsServerProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
    
    gulp.src("package.json")
    .pipe(gulp.dest("./dist"));
})

gulp.task("default", ["clean","compile"], () => {});