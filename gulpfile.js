var gulp = require('gulp'),
  uglify = require('gulp-uglify');

gulp.task('minify', function () {
    gulp.src('script.js')
       .pipe(uglify())
       .pipe(gulp.dest('build'))
});
