const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
  // onde pegaremos os arquivos fontes
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

exports.default = styles;
