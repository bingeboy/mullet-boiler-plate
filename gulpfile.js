/**
* Dependencies.
*/
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var webpack = require('webpack');
var gulp = require('gulp');

var node_modules_dir = path.resolve(__dirname, 'node_modules');

gulp.task('default', function(callback) {
    // run webpack
    webpack(
      require('./webpack.config.js')
      , function(err, stats) {
          if(err) throw new gutil.PluginError("webpack", err);
          gutil.log("[webpack]", stats.toString({
            // output options
          }));
      callback();
    });
});

