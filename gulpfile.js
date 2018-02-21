const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const livereload = require('gulp-livereload');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

//File paths
const DIST_PATH = 'public/dist'
const SCRIPTS_PATH = 'public/scripts/**/*.js'
const CSS_PATH = 'public/css/**/*.css'

// Styles
gulp.task('styles',() => {
  console.log('Starting styles task');

  return gulp.src(['public/css/reset.css',CSS_PATH])
      .pipe(sourcemaps.init())
      .pipe(autoprefixer())
      .pipe(concat('styles.css'))
      .pipe(minifyCss())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(DIST_PATH))
      .pipe(livereload());
});

// Scripts
gulp.task('scripts',() => {
  console.log('Starting scripts task');

  return gulp.src(SCRIPTS_PATH)
      .pipe(uglify())
     // .pipe(uglify().on('error', function(e){
     //       console.log(e);
     //    }))
      .pipe(gulp.dest(DIST_PATH))
      .pipe(livereload());
});

// Images
gulp.task('images',() => {
  console.log('Starting images task');
});


// Default
gulp.task('default',() => {
  console.log('Starting default task');
});

// Watch
gulp.task('watch',() => {
  console.log('Starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(CSS_PATH, ['styles']);
});
