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
    svgstore = require('gulp-svgstore'),
    imagemin = require('gulp-imagemin'),
    mozjpeg2 = require('imagemin-mozjpeg'),
    imageminGuetzli = require('imagemin-guetzli');


// APP SCSS Styles
gulp.task('app__styles', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream())
});

// APP JS
gulp.task('app__scripts', function () {
    return gulp.src('./app/js/*.js')
        .pipe(rigger())
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({stream: true}))
});


// Local Server
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './dist_vk'
        },
        notify: false
    })
});

// SCSS Styles
gulp.task('styles', function () {
    return gulp.src('./app-vk/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss({level: {1: {specialComments: 0}}})) // Opt., comment out when debugging
        .pipe(gulp.dest('./dist_vk/css'))
        .pipe(browserSync.stream())
});

// JS
gulp.task('scripts', function () {
    return gulp.src('./app-vk/js/*.js')
        .pipe(rigger())
        .pipe(uglify())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(gulp.dest('./dist_vk/js'))
        .pipe(browserSync.reload({stream: true}))
});

// HTML Live Reload
gulp.task('code', function () {
    return gulp.src('./app-vk/view/*.html')
        .pipe(fileinclude())
        .pipe(gulp.dest('./dist_vk'))
        .pipe(browserSync.reload({stream: true}))
});

// img task
gulp.task('img', function () {
    return gulp.src('./app-vk/img/**/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist_vk/img'))
        .pipe(browserSync.reload({stream: true}))
});

// favicon task
gulp.task('favicon', function () {
    return gulp.src('./app-vk/favicon/*.*')
        .pipe(gulp.dest('./dist_vk/favicon'))
        .pipe(browserSync.reload({stream: true}))
});

// fonts task
gulp.task('fonts', function () {
    return gulp.src('./app-vk/fonts/*.*')
        .pipe(gulp.dest('./dist_vk/fonts'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('svgIcons', function () {
    return gulp
        .src('./app-vk/img/icons/*.svg')
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
        .pipe(gulp.dest('./dist_vk/img/'));
});


gulp.task('img', gulp.parallel('img'));

gulp.task('favicon', gulp.parallel('favicon'));

gulp.task('fonts', gulp.parallel('fonts'));

gulp.task('watch', function () {
    gulp.watch('./app-vk/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('./app-vk/js/**/*.js', gulp.parallel('scripts'));
    gulp.watch('./app-vk/view/*.html', gulp.parallel('code'));
    gulp.watch('./app-vk/img/**/*', gulp.parallel('img'));
    gulp.watch('./app-vk/favicon/**/*', gulp.parallel('favicon'));
    gulp.watch('./app-vk/fonts/**/*', gulp.parallel('fonts'));
});

gulp.task('default', gulp.parallel('img', 'favicon', 'fonts', 'styles', 'scripts', 'code', 'browser-sync', 'watch'));