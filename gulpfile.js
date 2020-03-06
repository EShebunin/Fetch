"use strict";

const autoprefixer  = require("autoprefixer"),
      browsersync   = require("browser-sync"),
      cssnano       = require("cssnano"),
      del           = require("del"),
      gulp          = require("gulp"),
      imagemin      = require("gulp-imagemin"),
      plumber       = require("gulp-plumber"),
      postcss       = require("gulp-postcss"),
      sass          = require("gulp-sass"),
      twig          = require("gulp-twig"),
      webpack       = require("webpack"),
      webpackStream = require('webpack-stream'),
      concat        = require('gulp-concat');

const { watch, src, dest, parallel, series } = require('gulp');


const pagesSrc      = ['src/pages/*.twig', 'src/pages/*.html'],
      pagesWatchSrc = ['src/pages/**/*.twig', 'src/pages/**/*.html'];


const scriptLibSrc    =   ['node_modules/jquery/dist/jquery.min.js', 
                            'node_modules/slick-carousel/slick/slick.min.js',
                            'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                            'node_modules/jquery-lazy/jquery.lazy.min.js',
                            'node_modules/jquery-lazy/jquery.lazy.plugins.min.js'
                          ];
const styleLibSrc     =   ['node_modules/slick-carousel/slick/slick.css',
                            'node_modules/magnific-popup/dist/magnific-popup.css',
                            'node_modules/normalize.css/normalize.css'
                          ]

const styleSrc      = [ 'src/styles/*.scss',
                        'src/styles/*.css'],
      styleWatchSrc = [ 'src/styles/**/*.scss',
                        'src/styles/**/*.css'];


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
function buildLibStyles() {
  return src(styleLibSrc)
    .pipe(plumber({ errorHandler }))
    .pipe(concat('libs.min.css'))
    .pipe(postcss(
      [cssnano()]
    ))
    .pipe(dest('build/styles/'));
}

function buildLibScripts() {
  return src(scriptLibSrc)
    .pipe(plumber({ errorHandler }))
    .pipe(concat('libs.min.js'))
    .pipe(dest('build/scripts/'));
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
  watch(pagesWatchSrc, buildPages);
  watch(pagesSrc, buildPages);
  watch(styleSrc, buildStyles);
  watch(styleWatchSrc, buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

exports.default =
    series(
        clearBuild,
        parallel(
            devServer,
            series(
              parallel(buildPages, buildStyles, buildLibStyles, buildLibScripts, buildScripts, buildAssets),
              watchFiles
            )
        )
    );