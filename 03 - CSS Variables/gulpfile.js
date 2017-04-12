var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    autoprefixer  = require('gulp-autoprefixer'),
    babel         = require("gulp-babel"),
    uglify        = require('gulp-uglify'),
    plumber       = require("gulp-plumber"),
    cleanCSS      = require('gulp-clean-css');

gulp.task('server', ['auto', 'babel'], function() {

    browserSync.init({
        server: "./",
        open: false
    });

    gulp.watch(["./*.html", "./*.css"]).on('change', browserSync.reload);
    gulp.watch("./*.js", ['babel']);
});

gulp.task('auto', function(){
  return gulp.src("./main.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
});

gulp.task('babel', function () {
  return gulp.src("./main.js")
    .pipe(plumber())
    .pipe(babel({
      "presets": ["babel-preset-es2015"].map(require.resolve)
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
