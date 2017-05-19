const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const LessAutoprefix = require("less-plugin-autoprefix");
const autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });

gulp.task("less", function() {
  return gulp
    .src("./less/**/*.less")
    .pipe(sourcemaps.init())
    .pipe(less({ plugins: [autoprefix] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("default", function() {
  browserSync.init({
    server: "./"
  });

  gulp.watch("less/*.less", ["less"]);
  gulp.watch("*.html").on("change", browserSync.reload);
});
