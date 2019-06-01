var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'            
        }
    });

    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync']);