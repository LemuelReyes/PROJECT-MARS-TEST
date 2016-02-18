// 'use strict';

// DA PLUGINS
var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

// DA PATHS

var jsMain = './src/**/*jsx';
var sassMain = './src/main.scss';
var htmlPath = './src/index.html';
var basePath = './src';
var buildPath = './build';

var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');


var browserify = require('gulp-browserify');


gulp.task('sass', function(){
 gulp.src('./scss/style.scss')
 .pipe(sass())
 .pipe(autoprefixer({
   browsers: ['last 2 versions']
 }))
 .pipe(gulp.dest('./build/css'))
 .pipe(minifyCSS())
 .pipe(rename('style.min.css'))
 .pipe(gulp.dest('./build/css'));
});



gulp.task('compile-react', function() {
 return gulp.src('main.jsx')
 .pipe(plumber())
 .pipe(babel({
   presets: ['es2015', 'react']
 }))
 .pipe(browserify({
   insertGlobals: true,
   debug: true
 }))
 .pipe(gulp.dest('./build/js'));
});

gulp.task('browser-sync', ['compile-react'], function() {


 browserSync.init({
   server: {
     baseDir: './'
   }
 });

 gulp.watch(['./scss/*.scss'], ['sass']);
 gulp.watch(['main.jsx'], ['compile-react']);
 gulp.watch(['main.js','./build/css/*.css', 'index.html']).on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync', 'sass']);


// need this for project
gulp.task('compile-react', function() {
	return gulp.src('main.jsx')
  .pipe(webpack({
    output: {
      filename: 'main.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets:['react', 'es2015']
            }
        }]
    }
  }))
  .pipe(gulp.dest('./'));
});
