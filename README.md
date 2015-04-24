# passcard.info

### Overview

This is a front-end JS application built with [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com/).

The app uses [Bower](http://bower.io/) as a frontend JS package manager, [Grunt](http://gruntjs.com/) as a JS task runner (previewing the app, building the app, etc.), [Karma](http://karma-runner.github.io/0.12/index.html) for running unit tests, and [Node](https://nodejs.org/) and [npm](https://www.npmjs.com/) to manage all the various JS tools (and also for deployment on [Heroku](http://heroku.com)). The original structure of the app was auto-generated with [Yeoman](http://yeoman.io/).

### Installation

1. Clone the project: `git clone git@github.com:namesystem/passcard.info.git`
2. Install the node dependencies: `$ npm install`
3. Install the front-end JS dependencies: `$ bower install`

### Running in development

Serve a preview of the application: `$ grunt serve`

### Testing

Run the unit tests with karma: `$ grunt test`

### Building

Build the app resources: `$ grunt build`

*Note: make sure you've built and committed the app resources (in the /dist folder) before you deploy the app.*

### Deploying on nginx or apache

1. Build, commit, and move the app resources to the server
2. Make sure your server is properly configured to serve the files

### Deploying on Heroku

1. Build and commit the app resources
2. Create a heroku app: `$ heroku create; heroku ps:scale web=1`
3. Push the app to heroku: `$ git push heroku master`

### Running the deployment version locally

1. Build and commit the app resources
2. Run the app: `$ node runserver.js`

### Adding JS packages

1. Install the package with bower: `$ bower install <package_name>`
2. Ensure the package name and version number are in the "dependencies" section of bower.json
3. When you run the app, check to make sure a script tag for the package has been inserted in index.html
