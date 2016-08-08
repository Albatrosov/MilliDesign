var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    concatCss = require('gulp-concat-css')

var path = {
    
    prod: {
        
        js: 'prod/js',
        css: 'prod/css'
    },
    
    src: {
        
        js: 'dev/js/**/*.js',
        scss: 'dev/scss/**/*.scss',
        css: 'dev/css/**/*.css',
        
    },
    
    watch: {
        
        js: 'dev/js/**/*.js',
        css: 'dev/scss/**/*.scss'
    }
}

gulp.task('scss', function () {
    gulp.src(path.src.scss) 
        .pipe(sass())
        .pipe(gulp.dest('dev/css'))
});

gulp.task('watch', function() {
    
    watch([path.src.scss], function(event, cb) {
        
        gulp.start('scss');
    });
});

gulp.task('minify-css', function() {
  return gulp.src(path.src.css)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.src.css));
});

gulp.task('concatCSS', function () {
  return gulp.src(path.src.css)
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest(path.prod.css));
});

gulp.task('concatJS', function() {
  return gulp.src(path.src.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.prod.js));
});

gulp.task('uglifyJS', function() {
  gulp.src(path.prod.js)
    .pipe(uglify())
    .pipe(gulp.dest(path.prod.js))
});
gulp.task('default', ['scss', 'minify-css', 'concatCSS', 'concatJS']);