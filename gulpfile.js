var gulp = require('gulp');
var debug = require('gulp-debug');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


gulp.task('test', function(){
  console.log('DEBUG: ', debug != null);
  console.log('TS: ', typescript != null);
  console.log('SM: ', sourcemaps != null);
  console.log('UGLIFY: ', uglify != null);
});

gulp.task('ts', function(){
  gulp
    .src('src/scripts/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript({
      out: 'out.js'
      ,sortOutput: true
      ,noExternalResolve: true
    }))
    .js
    //.pipe(uglify({
    //  mangle: false
    //}))
    .pipe(gulp.dest('build/'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
  ;
})
