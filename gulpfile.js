var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var watchify    = require('watchify');
var reactify    = require('reactify');
var del         = require('del');

var ENV = 'DEVELOPMENT';

gulp.task('clean', function() {
  del(['build']);
});

gulp.task('browserify', ['clean'], function() {
  var bundler = browserify({
    entries: ['./app/main.js'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher  = watchify(bundler);

  return watcher
    .on('update', function () {
      watcher
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./build/'));
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['browserify']);
