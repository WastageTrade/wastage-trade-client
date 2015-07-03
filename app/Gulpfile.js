var gulp = require('gulp');

require('./tasks/build');
require('./tasks/clean');
require('./tasks/watch');
require('./tasks/webserver');

gulp.task('default', ['clean', 'build', 'watch']);
