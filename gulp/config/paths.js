import path from 'path';

const buildFolder = './dist';
const srcFolder = './src';

const filePaths = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: [`${srcFolder}/scss/main.scss`, `${srcFolder}/scss/pages/*.scss`],
    pug: `${srcFolder}/*.pug`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    pug: `${srcFolder}/**/*.pug`,
    images: `${srcFolder}/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
  },
  buildFolder,
  srcFolder,
  projectDirName: path.basename(path.resolve()),
};

export { filePaths };
