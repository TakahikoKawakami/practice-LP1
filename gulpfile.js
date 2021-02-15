const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// Sassをコンパイルする
const compileSass = () =>
    src("src/css/*.sass")
    .pipe(
        sass({
            outputStyle: "expanded"
        })
    )
    .pipe(dest("dest/css"));

// Sassファイルを監視
const watchSassFiles = () => 
    watch("src/css/*.sass", compileSass);

// pugをコンパイルする
const compilePug = () =>
    src(["src/**/*.pug", "!src/**/_*.pug"])
        .pipe(
            pug({
                pretty: true
            })
        )
        .pipe(dest("dest"))

const watchPugFiles = () =>
        watch(["src/**/*.pug", "!src/**/_*.pug"], compilePug);

// run npx gulp
exports.default = () =>
    watchSassFiles();
    // watchPugFiles();