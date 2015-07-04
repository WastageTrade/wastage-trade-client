var gulp = require('gulp');

sources = {
  "css": "app/assets/css/**/*.css",
  "js": "app/vendor/**/*.js",
  "html": "app/**/*.html"
};

dest = {
  "css": "dist/assets/css/",
  "js": "dist/vendor/",
  "html": "dist/"
}

require('./tasks/sync');

gulp.task('default', ['browser-sync']);
