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

gulp.task("build-iceland", function() {
  return gulp.src(["dev/pages/travel/partials/header.html", "dev/pages/travel/iceland.html", "dev/partials/footer.html"])
  .pipe(concat("index.html"))
    .on('error', sass.logError)
    .pipe(gulp.dest("build/travel/iceland"))
});

gulp.task("build-sedona", function() {
  return gulp.src(["dev/pages/travel/partials/header.html", "dev/pages/travel/sedona.html", "dev/partials/footer.html"])
  .pipe(concat("index.html"))
    .on('error', sass.logError)
    .pipe(gulp.dest("build/travel/sedona"))
});

gulp.task("sassToCss", function() {
  return gulp.src("dev/styles/**/**.scss")
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest("build/assets/css"));
});

gulp.task("watch", ["sassToCss", "build", "build-iceland", "build-sedona", "browserSync"], function() {
  gulp.watch("dev/styles/**/*.scss", ["sassToCss"]);
  gulp.watch("dev/**/*.html", ["build", browserSync.reload]);
  gulp.watch("dev/pages/travel/*.html", ["build-iceland", browserSync.reload]);
  gulp.watch("dev/pages/travel/*.html", ["build-sedona", browserSync.reload]);
  gulp.watch("dev/js/**/*.js", browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'build'
    },
  })
});