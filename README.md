# digitalpassport

## Installation

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

## Running in development

Serve a preview of the application:

```
$ grunt serve
```

## Testing

Run the unit tests with karma:

```
$ grunt test
```

## Building the app

```
$ grunt build
```

## Deploying on nginx or apache

1) Build the app resources

2) Commit the files in the /dist folder and move them to the server

3) Make sure your server is configured to serve the files

## Deploying on Heroku

1) Build and commit the app resources
```
build
```
2) Create a heroku app and push to it
```
$ heroku create
$ git push heroku master
```

## Running the deployment version locally

1) Build the app resources

2) Run the app

```
$ node runserver.js
```
