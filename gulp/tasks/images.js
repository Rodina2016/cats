const gulp = require('gulp'),
imagemin = require('gulp-imagemin');


module.exports = function pug2html(cb) {
    return gulp.src('src/images/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}