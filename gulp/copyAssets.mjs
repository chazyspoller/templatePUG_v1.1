import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

const copySvg = () => gulp.src('source/img/**/*.svg', {base: 'source'}).pipe(gulp.dest('build'));

const copyImages = () => gulp.src('source/img/**/*.{png,jpg,jpeg,webp}', {base: 'source'}).pipe(gulp.dest('build'));

const copy = () =>
  gulp
    .src(['source/**.html', 'source/fonts/**', 'source/img/**', 'source/favicon/**', 'source/data/**'], {
      base: 'source',
    })
    .pipe(gulp.dest('build'));

const font2woff = () =>
  gulp
    .src(['source/fonts/*.ttf'], {
      base: 'source',
    })
    .pipe(ttf2woff())
    .pipe(gulp.dest('source'));

const font2woff2 = () =>
  gulp
    .src(['source/fonts/*.ttf'], {
      base: 'source',
    })
    .pipe(ttf2woff2())
    .pipe(gulp.dest('source'));


export {copy, copyImages, copySvg, font2woff, font2woff2};
