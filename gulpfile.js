var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var debug = require('gulp-debug');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var merge = require('merge-stream');

gulp.task('test', function(){
  console.log('DEBUG: ', debug != null);
  console.log('TS: ', typescript != null);
  console.log('SM: ', sourcemaps != null);
  console.log('UGLIFY: ', uglify != null);
});


var tsProject = typescript.createProject({
  removeComments: true,
  //out: 'out.js',
  sortOutput: true,
  declarationFiles: true,
  noExternalResolve: true
});

gulp.task('ts', function(){

  var tsResult = gulp
    .src('src/scripts/**/*.ts')
    .pipe(debug({title:'original'}))
    .pipe(sourcemaps.init())
    .pipe(debug({title:'sm init'}))
    //.pipe(typescript( tsProject, { referencedFrom: ['routing/login-routing.ts'] } ))
    .pipe(typescript(tsProject))
  ;


  var concatTargetList = fs.readdirSync('src/scripts/routing')
    .filter(function(file){
      return fs.statSync(path.join('src/scripts/routing', file)).isFile() && _.endsWith(file, '.ts');
    });
    
  var concatTargetList = concatTargetList.map(function(file) {		

    var newName = file.replace(/\.ts$/, '.js');

    return tsResult.js
      .pipe(typescript.filter(tsProject, {referencedFrom: ['routing/' + file]}))
      //.pipe(typescript.filter(tsProject, {referencedFrom: ['routing/login-routing.ts']}))
      .pipe(debug({title: 'compiled'}))
      .pipe(concat(newName))
      ;
  });

  
//  return streamqueue(concatTargetList[0], concatTargetList[1])
  return merge(concatTargetList)
      //.pipe(uglify({
      //  mangle: false
      //}))
      .pipe(debug({titile: 'merged'}))
      .pipe(rev())
      .pipe(gulp.dest('build/'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('build/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('build/'))
      ;
});
