import gulp from 'gulp';
import { deleteAsync } from 'del';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';

// Js
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import uglify from 'gulp-uglify';

// Css
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// Svg
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';


// Paths
const src = 'src';
const dist = 'dist';

const path = {
    src: {
        css: src + '/scss/',
        js: src + '/js/',
        svg: src + '/svg/',
    },
    dist: {
        css: dist + '/css/',
        js: dist + '/js/',
        svg: dist + '/svg/',
    }
}

// css
export const css = () => {
    return gulp.src(path.src.css + '*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.dist.css))
}

// js
export const js = () => {
    return gulp.src(
        [
            path.src.js + '*.js'
        ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('contactus.js'))
        .pipe(terser())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.dist.js))
}

// svg
export const svg = () => {
    return gulp.src(path.src.svg + '*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest(path.dist.svg))
}


// clean
export const clean = () => {
    return deleteAsync(dist);
}

// watch
export const watch = () => {
    gulp.watch(path.src.css + '**/*.scss', css);
    gulp.watch(path.src.js + '**/*.js', js);
    gulp.watch(path.src.svg + '**/*.svg', svg);
}

// default
export default gulp.series(
    clean,
    //generateiconfont,
    gulp.parallel(css, js, svg),
    gulp.parallel(watch)
);

// build
export const build = gulp.series(
    clean,
    gulp.parallel(css, js, svg)
);