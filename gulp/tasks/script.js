const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');

module.exports = function script(cb) {
    return gulp.src('src/js/main.js')
        .pipe(sourcemap.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(sourcemap.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js'))
    return cb()
}