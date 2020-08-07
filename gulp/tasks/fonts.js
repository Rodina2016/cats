const gulp = require('gulp');

module.exports = function pug2html(cb) {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'))
}