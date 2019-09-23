# STARTER KIT FOR MODERN WEBSITE DEVELOPMENT | ES6+, SASS, CSS GRID, HTML5

A modern starter kit with Webpack to transpile SASS and ES6+. Includes a CSS Grid and hot reloading.
This kit was built on top of https://github.com/esausilva/live-reload-vanilla-website-template - make sure to check it out and give some ❤

## Features:

- Live reload
- Webpack Setup
- Sass compilation + minification + autoprefixing
- ES6+ transpilation + minification + uglyfication
- Predefined CSS Grid
- Modularized ES6
- Modularized SASS

## Dependencies:

- @babel/core, babel-loader, @babel/preset-env — Transpile our ES6+ JavaScript to ES5, or whatever browsers we decide to support
- cross-env — Make Windows work with environment variables in CLI
- css-loader, cssnano, mini-css-extract-plugin, node-sass, postcss-loader, postcss-preset-env, sass-loader — Process our Sass, including -autoprefixing, minification and extracting the CSS to a separate file
- file-loader — Handles images in our CSS
- live-server — Development server with auto-reloading capabilities when files change
- npm-run-all — Run multiple npm-scripts in parallel or sequential
- webpack, webpack-cli — Module bundler, the glue that puts everything together

## Run Tasks in package.json

- _start_: Just an alias for _dev:start_,
- _dev:assets_ — Running Webpack in watch mode will watch for changes to files in our /src directory and recompile everything. Webpack will place the compiled files under the /public directory
- _dev:start_ — Start our development server, launch the browser to the /public directory and watch for changes under the /public directory. Website will open to http://localhost:8080/public
- _dev_ — Run in parallel all of the scripts that start with dev:. Basically it will run dev:assets and dev:start giving us a nice development environment with live reload
- _build_ — Run Webpack in production mode, optimizing CSS and JavaScript files. The outputted files will replace the CSS/JS development files under the /public directory, then you can take everything under this directory and deploy it to your production server
