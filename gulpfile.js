var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
 
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
  //watch files
  var files = [
  './*.scss',
  './*.js',
  './scripts/*.js',
  './*.html',
  './*.php',
  './layouts/*.php'
  ];

  //initialize browsersync
  browserSync.init(files, {
  //browsersync with a php server
  proxy: "http://localhost:8000/",
  notify: true
  });
});
 
// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
  return gulp.src([
      './*.scss'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream:true}));
});

gulp.task('sass:watch', function () {
  gulp.watch('./*.scss', gulp.series('sass'));
});

 
// Default task to be run with `gulp`
gulp.task('default', gulp.series(gulp.parallel('sass','sass:watch', 'browser-sync')));