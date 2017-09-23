'use strict';

import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import template from 'gulp-template';
import yargs from 'yargs';

let root = '';

// map of all paths
let paths = {
  directiveTemplates: path.join(__dirname, 'generator', 'directive/**/*.**'),
  componentTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  serviceTemplates: path.join(__dirname, 'generator', 'service/**/*.**'),
  dest: path.join(__dirname, 'dist')
};

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const module = yargs.argv.module;
  const parentPath = yargs.argv.path || '';
  const destPath = path.join(parentPath, name);

  return gulp.src(paths.componentTemplates)
    .pipe(template({
      name: name,
      upName: cap(name),
      module: module,
      upModule: cap(module),
      moduleName: module + cap(name),
      upModuleName: cap(module) + cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', module + '-' + name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('directive', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const module = yargs.argv.module;
  const parentPath = yargs.argv.path || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.directiveTemplates)
    .pipe(template({
      name: name,
      upName: cap(name),
      module: module,
      upModule: cap(module),
      moduleName: module + cap(name),
      upModuleName: cap(module) + cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', module + '-' + name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('service', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const module = yargs.argv.module;
  const parentPath = yargs.argv.path || '';
  const destPath = path.join(resolveToComponents(), parentPath, name + "-service");

  return gulp.src(paths.serviceTemplates)
    .pipe(template({
      name: name,
      upName: cap(name),
      module: module,
      upModule: cap(module),
      moduleName: module + cap(name),
      upModuleName: cap(module) + cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', module + '-' + name);
    }))
    .pipe(gulp.dest(destPath));
});
