var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    babel         = require("gulp-babel"),
    uglify        = require('gulp-uglify'),
    plumber       = require("gulp-plumber");

gulp.task('server', ['babel'], function() {

    browserSync.init({
        server: "./",
        open: false
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.s+(a|c)ss", ['sass']);
    gulp.watch("./*.js", ['babel']);
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


gulp.task('mini', ['miniJS']);
gulp.task('default', ['server']);
