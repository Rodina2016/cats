const gulp = require('gulp');
const watch = require('gulp-watch');
const pug2html = require('./gulp/tasks/pug2html');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const images = require('./gulp/tasks/images');
const fonts = require('./gulp/tasks/fonts');

gulp.task('watch', function(){
    watch(['src/pages/**/*.pug'], function(event, cb) {
        pug2html()
    });
    watch(['src/styles/**/*.scss'], function(event, cb) {
        styles()
    });
    watch(['src/js/**/*.js'], function(event, cb) {
        script()
    });
    watch(['src/images/**/*.*'], function(event, cb) {
        images()
    });
    watch(['src/fonts/**/*.*'], function(event, cb) {
        fonts()
    });
});

module.exports.start = gulp.series(pug2html, styles, script, images);