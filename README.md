# digitalpassport.info

### Installation

1) Clone the project

```
git clone git@github.com:digitalpassport/digitalpassport.info.git1
```

2) Install the node dependencies

```
$ npm install
```

3) Install the front-end JS dependencies

```
$ bower install
```

### Running in development

Serve a preview of the application:

```
$ grunt serve
```

### Testing

Run the unit tests with karma:

```
$ grunt test
```

### Building

Build the app resources:

```
$ grunt build
```

*Note: make sure you've built and committed the app resources (in the /dist folder) before you deploy the app.*

### Deploying on nginx or apache

1) Build, commit, and move the app resources to the server

2) Make sure your server is properly configured to serve the files

### Deploying on Heroku

1) Build and commit the app resources

2) Create a heroku app and push to it
```
$ heroku create
$ heroku ps:scale web=1
$ git push heroku master
```

### Running the deployment version locally

1) Build and commit the app resources

2) Run the app

```
$ node runserver.js
```
