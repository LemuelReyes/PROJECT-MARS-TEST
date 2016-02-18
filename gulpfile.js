// Variables oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
var gulp = require ('gulp');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
// FOR REACT
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');


// Declarations ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
gulp.task('watch', function(){
   gulp.watch(['./scss/*.scss'], ['sass-process']);
   gulp.watch(['./js/*.js'], ['uglify']);
   gulp.watch(['./build/*.js', './build/*.css', 'index.html']).on('change', browserSync.reload);
});

//This watched files for any changes then reloads the browser page when any change has been saved.  oooooooooooooooooooooooooooooooooooooo

gulp.task('uglify', function(){
   gulp.src('./js/*.js')
   .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
   .pipe(uglify())
   .pipe(gulp.dest('./build'));
});

//This ugilifies the javascript file then stores it in a build/js folder oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

gulp.task('browserSync', function(){
   browserSync.init({
      server: {
         baseDir:'./'
      }
   });
});
// Runs browserSync on it's own. oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

gulp.task('sass-process', function(){
   gulp.src('./scss/main-style.scss')
   .pipe(sass())
   .pipe(autoprefixer({
      browsers: ['last 2 versions']}))
   .pipe(gulp.dest('./build'))
   .pipe(minifyCSS())
   .pipe(rename('style.min.css'))
   .pipe(gulp.dest('./build'));
});

// Vendor prefixes added to SASS file, compiles, minifies, then inserts it in the build/css folder -oooooooooooooooooooooooooooooooooooo


gulp.task('default', ['watch', 'browserSync']);


// COMPILE REACT ------------------------------------------------------------------------------

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
		.pipe(gulp.dest('./'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: './'
	});

	gulp.watch(['main.jsx'], ['compile-react']);
	gulp.watch(['main.js', 'index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
