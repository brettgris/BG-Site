// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var del = require('del'),
	 rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    postcss = require('gulp-postcss'),
	 cssnano = require('gulp-cssnano'),
    historyApiFallback = require('connect-history-api-fallback'),
    browserSync = require('browser-sync').create();

gulp.task('jade', function() {
    return gulp.src('Development/jade/**/*.jade')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest("Production/"))
		  .pipe(browserSync.stream());
});

gulp.task('postcss', function() {
    var processors = [
        require('precss'),
        require('postcss-cssnext'),
        require('css-mqpacker')
    ];

    return gulp.src('Development/pcss/compile/*.pcss')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(postcss(processors))
		  .pipe(cssnano())
		  .pipe(rename('main.min.css'))
        .pipe(gulp.dest('Production/css'))
		  .pipe(browserSync.stream());
});

gulp.task('react', function() {
	//set to product mode for minifying
	process.env.NODE_ENV = 'production';
   return browserify('Development/react/App.jsx')
        .transform(babelify, {
            presets: ["es2015", "react"]
        })
        .bundle()
        .on('error', function(err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('Production/js'))
		  .pipe(browserSync.stream());
});

gulp.task('json', function(cb) {
    return gulp.src('Development/data/**/*.json')
        .pipe(gulp.dest('Production/data'))
		  .pipe(browserSync.stream());
});

gulp.task('includes', function() {
    return gulp.src('Development/includes/**/*')
        .pipe(gulp.dest('Production/'))
		  .pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('Development/jade/**/*.jade', ['jade']);
    gulp.watch('Development/react/**/*.jsx', ['react']);
    gulp.watch('Development/pcss/**/*.pcss', ['postcss']);
    gulp.watch('Development/data/**/*.json', ['json']);
    gulp.watch('Development/includes/**/*', ['includes']);
});

// BROWSER SYNC
gulp.task('sync', function() {
    return browserSync.init({
        server: {
            baseDir: "Production/",
            middleware: [historyApiFallback()]
        }
    });
});

gulp.task('clean', function(cb){
	del.sync(['./Production/**/*']);
	cb(null);
})

// Default Task
gulp.task('default', ['clean', 'sync', 'build'], function(){
	browserSync.reload();
});

gulp.task('build', ['jade', 'postcss', 'react', 'json', 'includes',  'watch']);
