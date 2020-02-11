var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    fileinclude = require('gulp-ex-file-include'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    notify = require('gulp-notify'),
    rsync = require('gulp-rsync'),
    basePath = require('path'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore');


gulp.task('svgIcons', function () {
    return gulp
        .src('./app/img/icons/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = basePath.basename(file.relative, basePath.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./dist/img/'));
});


// Local Server
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './dist'
        },
        notify: false
    })
});

// SCSS Styles
gulp.task('styles', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
});

// JS
gulp.task('scripts', function () {
    return gulp.src('./app/js/*.js')
        .pipe(rigger())
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({stream: true}))
});

// HTML Live Reload
gulp.task('code', function () {
    return gulp.src('./app/view/*.html')
        .pipe(fileinclude())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream: true}))
});

// img task
gulp.task('img', function () {
    return gulp.src('./app/img/**/*.*')
        .pipe(gulp.dest('./dist/img'))
        .pipe(browserSync.reload({stream: true}))
});

// favicon task
gulp.task('favicon', function () {
    return gulp.src('./app/favicon/*.*')
        .pipe(gulp.dest('./dist/favicon'))
        .pipe(browserSync.reload({stream: true}))
});

// fonts task
gulp.task('fonts', function () {
    return gulp.src('./app/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('img', gulp.parallel('img'));

gulp.task('favicon', gulp.parallel('favicon'));

gulp.task('fonts', gulp.parallel('fonts'));

gulp.task('watch', function () {
    gulp.watch('./app/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('./app/js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('./app/view/*.html', gulp.parallel('code'));
    gulp.watch('./app/img/**/*', gulp.parallel('img'));
    gulp.watch('./app/favicon/**/*', gulp.parallel('favicon'));
    gulp.watch('./app/fonts/**/*', gulp.parallel('fonts'));
});

gulp.task('default', gulp.parallel('img', 'favicon', 'fonts', 'styles', 'scripts', 'code', 'browser-sync', 'watch'));