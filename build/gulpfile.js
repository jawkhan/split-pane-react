const path = require("path");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const { rimraf } = require("rimraf");
const sass = require("gulp-sass")(require("sass"));
const tsProject = ts.createProject("../tsconfig.json");

const output = "../esm";

// Clean the output directory
gulp.task("clean", function (cb) {
  rimraf(output)
    .then(() => cb())
    .catch(cb); // Handle rimraf errors
});

// Compile TypeScript files
gulp.task("build:esm", function () {
  return tsProject
    .src()
    .pipe(tsProject())
    .on("error", (error) => {
      console.error("TypeScript Compilation Error:", error.message);
    })
    .pipe(gulp.dest(output));
});

// Compile Sass files
gulp.task("build:sass", function () {
  return gulp
    .src("../src/**/*.scss")
    .pipe(sass().on("error", sass.logError)) // Log Sass errors
    .pipe(gulp.dest(output));
});

// Default task that runs clean, build:esm, and build:sass
gulp.task("default", gulp.series("clean", "build:esm", "build:sass"));
