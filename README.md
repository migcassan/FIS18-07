# Presupuesto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Building docker image

Run `docker build --rm -f "Dockerfile" -t presupuesto:latest .` to build the docker image.

## Running image Docker

Run `docker run --rm -it -e DB=mongodb://prueba:prueba3@ds135384.mlab.com:35384/presupuestotest -p 3000:3000/tcp presupuesto:latest` to execute the start-up of the docker container.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
requisitos realizados del microservicio avanzado:
`1) autenticacion con JWT(JSON WEB TOKEN)`
`2) validacion de formularios en ANGULAR`
`3) Enrutamiento con Angular Routing`
`4) Validacion para la integridad de la base de datos`