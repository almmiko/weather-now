# Weather Now

> Project built using [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2 and node v12.18.2.

## Live Preview 
[Visit deployed demo](http://weather-now-demo-v1.s3-website.eu-central-1.amazonaws.com/)

## Installing

```
$ npm install 
```

## Usage

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

# Project structure

```
e2e/                         end-to-end tests
media/                       media files (screenshots) 
src/                         project source code
|- app/                      app components
|  |- __fixtures__           fixture files
|  |- __mocks__              mock files 
|  |- core/                  core modules (singeltons)
|  |- shared/                shared module (common components, layout, styles and utils)
|  |- weather/               weather feature module (components, pipes, services)
|  |- root.component.*       app root component and styles
|  |- root.module.ts         app root module definition
|- assets/                   app assets (images, fonts)
|- environments/             values for various build environments (test, prod)
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
|- test.ts                   unit tests entry point
+- ...config files           tsconfig, DockerFile and additional configuration files
```

## Build

Run `npm run build-prod` to build the production version.

Run `npm run build-dev` to build the dev version.

## Running unit tests

Run `npm run test` to execute the unit tests.

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests.


## Docker 

```
// Build docker image
$ docker build -t weather-now/client .
$ docker run -p 9090:80 weather-now/client
```

