A collection of gulp tasks that I like to use in angularjs projects. This
project is intended to be included in other projects as a git submodule.

## How to include common-tasks in a project

### Create the git submodule

    cd <project_root>
    mkdir gulp
    cd gulp
    git submodule add https://github.com/Ludachrispeed/common-tasks.git
    cd ..
    git submodule init
    git submodule update

### Create project-specif tasks

If you have a project-specific gulp task called `special-task.js`, put it in the
`gulp` directory as a sibling of the `common-tasks` directory:

    app/
      +- styles/
      +- index.html
    gulp/
      +- special-task.js    <-- project-specific task
      +- common-tasks/      <-- git submodule
        +- clean.js
        +- styles.js
        +- ... etc.
    dist/
      +- css/
      +- index.html

## How to Use

1. Run the asset pipeline

  - *For development*: `gulp dev`

  - *For production* (includes minification): `gulp prod`

2. Deploy

  - *For development* (opens browser and watches all relevant files): `gulp serve`

  - *For production*: Copy the contents of `dist/` to your server

## Assumptions

### npm packages

It's assumed you have the following npm packages installed in your project using
`npm install --save-dev`

    del                    gulp-size
    gulp                   gulp-sourcemaps
    gulp-autoprefixer      gulp-uglify
    gulp-concat            gulp-watch
    gulp-minify-css        gulp-webserver
    gulp-ng-annotate       main-bower-files
    gulp-plumber           require-dir
    gulp-sass              run-sequence
    gulp-imagemin

# License

MIT
