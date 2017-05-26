var sass         = require('gulp-sass');
var gulp         = require('gulp');
var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var cleanCss     = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');
var gulpUtil     = require('gulp-util');
var livereload   = require('gulp-livereload');
var lib          = require('bower-files')();

gulp.task('html', function() {
  return gulp.src(['**/*.html'])
  .pipe(livereload());
});

gulp.task('sass', function() {
  return gulp.src(['assets/scss/app.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', notify.onError(function(error) {
    gulpUtil.log(error);
    return error.message;
  })))
  .pipe(rename('style.css'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(cleanCss())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./'))
  .pipe(notify('Sass compiled!'))
  .pipe(livereload());
});

gulp.task('uglify', function() {
  return gulp.src('assets/js/functions.js')
  .pipe(uglify())
  .on('error', notify.onError(function(error) {
    gulpUtil.log(error);
    return error.message;
  }))
  .pipe(rename('assets/build/functions.min.js'))
  .on('error', notify.onError(function(error) {
    gulpUtil.log(error);
    return error.message;
  }))
  .pipe(gulp.dest('./'))
  .on('error', notify.onError(function(error) {
    gulpUtil.log(error);
    return error.message;
  }))
  .pipe(notify('JS compiled!'))
  .pipe(livereload());
});

gulp.task('bowerJs', function() {
  return gulp.src(lib.ext('js').files)
  .pipe(concat('lib.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/build'))
  .pipe(notify('Bower JS compiled!'))
  .pipe(livereload());
});

gulp.task('bowerCss', function() {
  return gulp.src(lib.ext('css').files)
  .pipe(concat('lib.min.css'))
  .pipe(cleanCss())
  .pipe(gulp.dest('assets/build'))
  .pipe(notify('Bower CSS compiled!'))
  .pipe(livereload());
});

gulp.task('build', ['bowerCss', 'bowerJs', 'sass', 'uglify']);

gulp.task('watch', ['build'], function() {
  livereload.listen();

  gulp.watch(['./**/*.html', './**/*.php'], ['html']);
  gulp.watch(['assets/scss/**/*.scss'], ['sass']);
  gulp.watch(['assets/js/functions.js'], ['uglify']);
});

gulp.task('default', ['watch']);
