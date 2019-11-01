# pwa-starter-kit
Version: 1.0.0

[![CircleCI](https://circleci.com/gh/7s4r/pwa-starter-kit/tree/master.svg?style=svg)](https://circleci.com/gh/7s4r/pwa-starter-kit/tree/master)

The most advanced serverless starter kit for a progressive web application.
It's bootstrapped with:
* [React 16](https://reactjs.org/docs/getting-started.html) for building rich UI interface
* The blazing fast and zero configuration [Parcel bundler](https://parceljs.org/getting_started.html)
* [Babel 7](https://babeljs.io/)
* [ESLint](https://eslint.org/) for linting with [Airbnb JS style guide](https://github.com/airbnb/javascript).
* [Jest](https://jestjs.io/) for unit testing
* [TestCafe](https://devexpress.github.io/testcafe/documentation/getting-started/) for e2e testing

Based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) methodology for organizing components and [Material UI](https://material-ui.com/getting-started/usage/) as design framework.

Please respect theses [clean code concepts](https://github.com/ryanmcdermott/clean-code-javascript).

## Requirements
[Node.js](https://nodejs.org/), [Yarn](https://yarnpkg.com/en/docs/install), [Heroku](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## Getting Started

To get started, first install all the necessary dependencies.
```
yarn install
```

Start the development server (changes will now update live in browser)
```
yarn dev
```

To view the project, go to: [https://localhost:1234/](https://localhost:1234/)

Don't forget to add [ESLint](https://eslint.org/docs/user-guide/getting-started) to your IDE or run the following command before commiting:
```
yarn lint
```

Run the unit tests
```
yarn test:unit
```

Launch the end-to-end tests (you can add the extension `TestCafe test runner` to run in your favorite IDE)
```
yarn test:e2e
```

Build files for production
```
yarn build
```

Serve builded static files
```
yarn serve
```
