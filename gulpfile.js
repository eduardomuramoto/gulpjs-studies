const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;

//File paths
const SCRIPTS_PATH = 'public/scripts/**/*.js'

// Styles
gulp.task('styles',() => {
  console.log('Starting styles task');
});
// Scripts
gulp.task('scripts',() => {
  console.log('Starting scripts task');

  return gulp.src(SCRIPTS_PATH)
      .pipe(uglify())
     // .pipe(uglify().on('error', function(e){
     //       console.log(e);
     //    }))
      .pipe(gulp.dest('public/dist'));
});
// Images
gulp.task('images',() => {
  console.log('Starting images task');
});

// Watch
gulp.task('watch',() => {
  console.log('Starting watch task');
  require('./server.js');
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});

// Default
gulp.task('default',() => {
  console.log('Starting default task');
});
