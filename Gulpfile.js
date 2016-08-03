// -- Variable Inizialitaion --
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webserver = require('gulp-webserver');
var debug = require('gulp-debug');
var Server = require('karma').Server;
var istanbul = require('gulp-istanbul');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var wiredep = require('wiredep');
var inject = require('gulp-inject');

///// -- Main Tasks --

//Run Application in Dev
gulp.task('serve', ['build-scss', 'index'], function () {
  gulp.src('app')
    .pipe(webserver({
      port: 3000,
      livereload: {
        enable: true,
        filter: function (fileName) {
          if (fileName.match(/.html$/)) {
            return false;
          } else {
            return true;
          }
        }
      },
      open: true,
      fallback: 'app/index.html'
    }));
});

//Run Application in Dev with jshint and tests TODO Add jshint
gulp.task('serve-dev', ['build-scss', 'index', 'test'], function () {
  gulp.src('app')
    .pipe(webserver({
      port: 3000,
      livereload: {
        enable: true,
        filter: function (fileName) {
          //files to watch
          return true;
        }
      },
      directoryListing: true,
      open: true
    }));
});

//Test Main Task
gulp.task('test', ['pre-test', 'test-karma'], function () {
  return(gulp.src('spec/**/*.spec.js')
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })));
});


///// -- Auxiliar Tasks --

//Store Vendor scripts
gulp.task('vendor-scripts', function () {
  return gulp.src(wiredep().js)
    .pipe(gulp.dest('app/vendor'));
});

//Store Vendor css
gulp.task('vendor-css', function () {
  return gulp.src(wiredep().css)
    .pipe(gulp.dest('app/vendor'));
});

//Process the index.html file to add bower dependencies and local ones
gulp.task('index', ['vendor-scripts', 'vendor-css'], function () {
  return gulp.src('app/index.html')
    .pipe(wiredep.stream({
      fileTypes: {
        html: {
          replace: {
            js: function (filePath) {
              return '<script src="' + 'vendor/' + filePath.split('/').pop() + '""></script>';
            },
            css: function (filePath) {
              return '<link rel="stylesheet" href="' + 'vendor/' + filePath.split('/').pop() + '" />';
            }
          }
        }
      }
    }))
    .pipe(inject(
      gulp.src(['app/**/*.js', '!app/vendor/**/*.js'], {read: false}), {
        addRootSlash: false,
        transform: function (filePath, file, i, length) {
          return '<script src="' + filePath.replace('app/', '') + '"></script>';
        }
      }
    ))
    .pipe(inject(
      gulp.src(['app/assets/**/*.css'], {read: false}), {
        addRootSlash: false,
        transform: function (filePath, file, i, length) {
          return '<link rel="stylesheet" href="' + filePath.replace('app/', '') + '" />';
        }
      }
    ))
    .pipe(gulp.dest('app'));
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
  return gulp.src('app/assets/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/assets/css'));
});
