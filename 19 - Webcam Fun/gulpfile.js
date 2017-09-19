var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    babel         = require("gulp-babel"),
    uglify        = require('gulp-uglify'),
    plumber       = require("gulp-plumber"),
    cleanCSS      = require('gulp-clean-css');

gulp.task('server', ['sass', 'babel'], function() {

    browserSync.init({
        server: "./",
        open: false
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.s+(a|c)ss", ['sass']);
    gulp.watch("./*.js", ['babel']);
});

gulp.task('sass', function() {
  return gulp.src("./main.sass")
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'nested',
      includePaths: require('node-normalize-scss').includePaths
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task('babel', function () {
  return gulp.src("./main.js")
    .pipe(plumber())
    .pipe(babel({
      "presets": ["babel-preset-env"].map(require.resolve)
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task('miniJS', function () {
  return gulp.src("dist/main.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});

gulp.task('miniCSS', function () {
  return gulp.src("dist/main.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});


gulp.task('mini', ['miniJS', "miniCSS"]);
gulp.task('default', ['server']);
