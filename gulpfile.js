var   gulp = require('gulp'),
    concat = require('gulp-concat'),
       del = require('del'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();


gulp.task("build", function() {
  return gulp.src(["dev/partials/header.html", "dev/pages/index.html", "dev/partials/footer.html"])
    .pipe(concat("index.html"))
    .on('error', sass.logError)
    .pipe(gulp.dest("build"))
});

gulp.task("sassToCss", function() {
  return gulp.src("dev/styles/**/**.scss")
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest("build/assets/css"));
});

gulp.task("watch", ["browserSync", "sassToCss", "build"], function() {
  gulp.watch("dev/styles/**/*.scss", ["sassToCss"]);
  gulp.watch("dev/**/*.html", ["build", browserSync.reload]);
  gulp.watch("dev/js/**/*.js", browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
});