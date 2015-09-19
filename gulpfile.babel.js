import babel from 'gulp-babel'
import gulp from 'gulp'
import mocha from 'gulp-mocha'
import plumber from 'gulp-plumber'
import watch from 'gulp-watch'

gulp.task('compile', () => {
  gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('lib/'));
});

gulp.task('test', () => {
  gulp.src('test/**/*.js')
    .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['compile']);
});
