# PersonManagement

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Angular Person Management
A Single Page Application built with Angular 19 to manage a list of people. It includes views to list, edit, and delete people, interacting with a REST API.
Features

List all people in a responsive table.
Edit a person's details with form validation.
Delete a person with confirmation.
Uses Angular 19 standalone components, reactive forms, and HttpClient.
Styled with Bootstrap for a professional look.

Prerequisites

Node.js v18 or later
Angular CLI v19 (npm install -g @angular/cli)

Setup

Clone the repository:git clone https://github.com/your-username/angular-person-management.git
cd angular-person-management


Install dependencies:npm install


Start the development server:npm start


Open http://localhost:4200 in your browser.

API
The app uses https://jsonplaceholder.typicode.com/users as a mock API. Replace with your actual API in person.service.ts.
Deployment
To build for production:
ng build

Deploy the dist folder to a hosting service like Netlify.
License
MIT
