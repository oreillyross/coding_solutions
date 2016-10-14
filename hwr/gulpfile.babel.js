/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp'
import babel from 'gulp-babel'
import eslint from 'gulp-eslint'

const paths = {
  allSrcJs: 'src/**/*.js',
  gulpFile: 'gulpfile.babel.js',
}

gulp.task('default', ['build'])

gulp.task('build', ['lint'], () =>
  gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('lib'))
)

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
)
