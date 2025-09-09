const { watch } = require('gulp')

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  console.log("Translate scss to css...")
  return gulp.src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
};

function cleanStyles() {
  return gulp.src('src/css/**/*.css') // Указываете путь к вашим CSS-файлам
    .pipe(cleanCSS()) // Минифицирует CSS, удаляя лишние пробелы
    .pipe(gulp.dest('dist/css')); // Куда будет сохранен минифицированный файл
}

exports.buildStyles = buildStyles;
exports.default = function () {
  gulp.watch('./src/styles/style.scss', buildStyles);

};
/*const changeScssToCss = 

const watcherScss = () => {
  watch('src/styles/style.scss', )
}
exports.default = watcherScss*/
