"use strict";

const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync");
const cssnano = require("cssnano");
const del = require("del");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const twig = require("gulp-twig");
const webpack = require("webpack");
const webpackStream = require('webpack-stream');

const { watch, src, dest, parallel, series } = require('gulp');


const pagesSrc = ['src/pages/*.twig', 'src/pages/*.html'];
const libSrc   = ['node_modules/jquery/dist/jquery.min.js', 
                  'node_modules/slick-carousel/slick/slick.min.js',
                  'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                  'node_modules/jquery-lazy/jquery.lazy.min.js',
                  'node_modules/jquery-lazy/jquery.lazy.plugins.min.js'];
const styleSrc = ['src/styles/*.scss',
                  'src/styles/*.css'];


function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browsersync.create().init(params);
  cb();
}

function errorHandler(errors) {
    console.warn('Error!');
    console.warn(errors);
  }

function clearBuild() {
    return del('build/');
  }


function buildPages() {
  return src(pagesSrc)
    .pipe(plumber({ errorHandler }))
    .pipe(twig())
    .pipe(dest('build/'));
}

function buildStyles() {
  return src(styleSrc)
    .pipe(plumber({ errorHandler }))
    .pipe(sass())
    .pipe(postcss([
        autoprefixer(),
        cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildLibScripts() {
  return src(libSrc)
    .pipe(plumber({ errorHandler }))
    .pipe(dest('build/scripts/lib/'));
}
function buildScripts() {
  return src('src/scripts/**/*.js')
    .pipe(plumber({ errorHandler }))
    .pipe(webpackStream({output: {filename: 'bundle.js'}}))
    .pipe(dest('build/scripts/'));
}

function buildAssets(cb) {
    src(['src/assets/**/*.*', '!src/assets/img/**/*.*'])
        .pipe(plumber({ errorHandler }))
        .pipe(dest('build/assets/'));
    src("src/assets/img/**/*.*")
        .pipe(imagemin())
        .pipe(dest("build/assets/img"));
    cb();
}

function watchFiles() {
  watch(pagesSrc, buildPages);
  watch(styleSrc, buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

exports.default =
    series(
        clearBuild,
        parallel(
            devServer,
            series(
              parallel(buildPages, buildStyles, buildLibScripts, buildScripts, buildAssets),
              watchFiles
            )
        )
    );