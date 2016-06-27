// -- Variable Inizialitaion --
var gulp = require('gulp');
var Server = require('karma').Server;
var istanbul = require('gulp-istanbul');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

///// -- Main Tasks --
//Run Application in Dev
gulp.task('serve', ['watch'], function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
});

//Build Application for Prod
gulp.task('build-prod', ['build-scss', 'jshint', 'minify-html', 'minify-css', 'minify-js']);

//Test Main Task
gulp.task('test', ['pre-test', 'test-karma'], function () {
  return(gulp.src('spec/**/*.spec.js')
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })));
});

//Run Application in prod-mode
//TODO Add task for running with the dist folder

///// -- Auxiliar Tasks --
//Watch Task
gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['bower', 'inject-files', 'jshint']);
  gulp.watch('app/**/*.scss', ['build-scss']);
});

//Inject bower files task
gulp.task('bower', function () {
  gulp.src('app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('app/index.html'));
});

//Inject css and js files
gulp.task('inject-files', function () {
  return gulp.src('./app/index.html')
    .pipe(
      inject(gulp.src(['./app/**/*.js', '.app/**/*.css'], {read: false}))
    );
});

//Pre test task coverage with istanbul
gulp.task('pre-test', function () {
  return gulp.src(['app/**/.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

//Unit Tests Karma task - single run
gulp.task('test-karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, function () {
    done();
  }).start();
});

//Unit Tests Karma task - TDD
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, function () {
    done();
  }).start();
});

//HTML minification
gulp.task('minify-html', function () {
  gulp.src('app/**/*.HTML')
    .pipe(minifyHTML())
    .pipe(gulp.dest('app/dist/html'));
});

//CSS minification
gulp.task('minify-css', function () {
  gulp.src('app/**/*.css')
    .pipe(minifyHTML())
    .pipe(gulp.dest('app/dist/css'));
});

//JS minification
gulp.task('minify-js', function () {
  gulp.src('app/**/*.js')
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js'));
});

//Jshint Task
gulp.task('jshint', function () {
  return gulp.src('app/**/*.js')
    .pipe(ngAnnotate())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//Sass Compilation Task
gulp.task('build-scss', function () {
  return gulp.src('assets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles/css'))
    pipe(browserSync.reload({
      stream: true
    }));
});
