import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import webpHtml from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import gulpPug from 'gulp-pug';

import { plugins } from '../config/plugins.js';
import { filePaths } from '../config/paths.js';
import { logger } from "../config/logger.js";

const pug = (isBuild, serverInstance) => {
  return gulp.src(filePaths.src.pug)
	.pipe(gulpPug())
    .pipe(logger.handleError('HTML'))
    .pipe(fileInclude())
    .pipe(plugins.replace(/@img\//g, 'images/'))
    .pipe(plugins.if(isBuild, webpHtml()))
    .pipe(
      plugins.if(
        isBuild,
        versionNumber({
          value: '%DT%',

          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },

          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(gulp.dest(filePaths.buildFolder))
    .pipe(serverInstance.stream());
};

export { pug };
