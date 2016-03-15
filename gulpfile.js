// 'use strict';

// DA PLUGINS
var gulp = require('gulp');
var webpack = require('webpack-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var historyApiFallback = require('connect-history-api-fallback');

// DA PATHS

var jsMain = './src/**/*jsx';
var sassMain = './src/scss/**/*.scss';
var htmlPath = './src/index.html';
var basePath = './src';
var buildPath = './build';

var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var browserify = require('gulp-browserify');

gulp.task('compile-scss', function(){
 gulp.src(sassMain)
 .pipe(sass())
 .pipe(autoprefixer({
   browsers: ['last 2 versions']
 }))
 .pipe(minifyCSS())
 .pipe(rename('style.min.css'))
 .pipe(gulp.dest(buildPath));
});

// need this for project
gulp.task('compile-react', function() {
	return gulp.src(jsMain)
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message')}))
  .pipe(webpack({
    output: {
      filename: 'main.js'
    },
    debug: true,
    devtool: 'inline-source-map',
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
  .pipe(gulp.dest(buildPath));
});

gulp.task('copy-html', function() {
  gulp.src(htmlPath)
  .pipe(gulp.dest(buildPath));
});

gulp.task('browser-sync', ['compile-react', 'compile-scss', 'copy-html'], function() {

 browserSync.init({
   server: {
     baseDir: buildPath,
     middleware: [historyApiFallback()]
   }
 });

 gulp.watch([htmlPath], ['copy-html']);
 gulp.watch([jsMain], ['compile-react']);
 gulp.watch([sassMain], ['compile-scss']);
 gulp.watch([buildPath+'/main.js', buildPath+'/index.html', buildPath+'/style.min.css']).on('change', browserSync.reload);


});

gulp.task('default', ['browser-sync']);
