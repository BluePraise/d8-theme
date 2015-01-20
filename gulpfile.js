var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();
var compass = require('gulp-compass');
var pngcrush = require('imagemin-pngcrush');


// Compile Our Sass with Bundle[d] Compass
gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
  .pipe(plugins.compass({
    config_file: './config.rb',
    css: 'stylesheets',
    sass: 'sass',
    bundle_exec: true
  }))
  .pipe(plugins.autoprefixer('last 2 version'))
  .pipe(gulp.dest('stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  // Watch js and scss file changes.
  gulp.watch('sass/**/*.scss', ['sass']);
});


// Make the images less of a fat bitch.
gulp.task('images', function() {
  return gulp.src('./images/*.{gif,jpg,png,svg}')
    // Pass in options to the task
    .pipe(plugins.imagemin({
      progressive: true,
      optimizationLevel: 5,
      interlaced: true,
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./images/minified'));
});

// Default Task
gulp.task('default', ['sass', 'watch']);

// Maggie's own set of Gulp tasks
gulp.task('speak', function() {
  console.log("Hello, you are about to wrap it up.");
});

// Wraps up the project and make it ready for the
// production environment. Minify CSS. Minify JS
// Minify the images
gulp.task('wrapitup', ['speak','images']);
// gulp.watch(['images']);
