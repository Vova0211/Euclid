const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

function buildStyles() {
  return src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest('build/'));
};

function cleanJs() {
  return src('src/js/index.js')
    .pipe(uglify())
    .pipe(dest('build/'));
}

function cleanHTML() {
  return src('src/pages/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build/'));
}

function watchStyle() { watch('src/styles/style.scss', buildStyles)}
function watchJS() {  watch('src/js/index.js', cleanJs)}
function watchHTML() {  watch('src/pages/index.html', cleanHTML)}
// function() {watch('build/*', browsersync)}

/*
function browsersync() {
  browserSync.init({
    server: {baseDir: "build/"},
    notify: false,
    online: true,
  })
}
exports.cleanHTML = cleanHTML;
exports.browsersync = browsersync;*/
exports.build = series(buildStyles, cleanJs, cleanHTML)
exports.default = parallel(watchHTML, watchJS, watchStyle)
