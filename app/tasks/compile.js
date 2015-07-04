var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

require("./lint");

gulp.task('browserify', ['lint'], function() {
  return browserify('./app/wastt.js')
    .bundle()
    .pipe(source('wastt.js'))
    .pipe(gulp.dest('./build/'));
});
