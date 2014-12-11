var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var open = require("gulp-open");
var clean = require('gulp-clean');

// Development server
gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', function (callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;

  new WebpackDevServer(webpack(myConfig), {
    contentBase: 'src/',
    publicPath: '/' + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
      if (err) throw new gutil.PluginError('webpack-dev-server', err);

      gulp.src('./src/index.html')
        .pipe(open('', {url: 'http://localhost:8080/webpack-dev-server/'}));
    });
});

gulp.task('clean', function() {
  return gulp.src('./dist', {
    read: false
  }).pipe(clean());
});

gulp.task('copy', function () {
 // Copy html
 gulp.src('./src/index.html')
   .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function (callback) {
  var myConfig = Object.create(webpackConfig);
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  webpack(myConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('build', err);
    gutil.log('[build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

// Production build
gulp.task('build', ['clean'], function () {
  gulp.start('copy', 'webpack')
})