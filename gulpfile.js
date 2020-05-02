

const gulp = require('gulp');
const minCSS = require('gulp-csso');
const {src, dest} = require('gulp');
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create();

function MinMyCSS() { 
    return src('dist/css/**/*.css').pipe(minCSS()).pipe(dest('dist')).pipe(browserSync.stream())
}
function images() { 
    return src('image/*').pipe(imagemin()).pipe(dest('dist/image')).pipe(browserSync.stream())
}

function watch()  {
    //This part are from module 3.4 but modified for this project. 
    browserSync.init({
        server: {
          baseDir: './dist'
        }        
    });
    gulp.watch('./dist/css/**/*.css', MinMyCSS);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.images = images;
