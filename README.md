<div align="center">
  <h1>Express Boilerplate</h1>
</div>

<p align="center">
  Boilerplate for Node.js Express RESTful API application with Swagger, Jest, and Coveralls
</p>

<br />

This boilerplate include the following features:

- [Swagger](https://swagger.io/) API documentation based on JSDoc
- Unit Test and Integration Test along with Test Coverage using [Jest](https://facebook.github.io/jest/) testing framework

---


## Getting Started

```zsh
$ git clone <repo-url> <project-name>
$ cd <project-name>
$ cp .env.sample .env
$ npm install
```


## Commands

### Run

```zsh
# Run the application for development
$ npm start
# Run the application in production
$ npm run start:prod
```

### Test

```zsh
# Test
$ npm run test                          # Run all test
$ npm run test:unit                     # Run only unit test
$ npm run test:integration              # Run only integration test
# Test (Watch Mode for development)
$ npm run test:watch                    # Run all test with watch mode
$ npm run test:watch:unit               # Run only unit test with watch mode
$ npm run test:watch:integration        # Run only integration test with watch mode
# Test Coverage
$ npm run test:coverage                 # Calculate the coverage of all test
$ npm run test:coverage:unit            # Calculate the coverage of unit test
$ npm run test:coverage:integration     # Calculate the coverage of integration test
# Test consistent coding style (Lint)
$ npm run lint                          # Lint all sourcecode
$ npm run lint:app                      # Lint app sourcecode
$ npm run lint:test                     # Lint test sourcecode
```
