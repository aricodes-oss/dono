# Dono

[![Build Status](https://drone.aricodes.net/api/badges/aricodes-oss/dono/status.svg)](https://drone.aricodes.net/aricodes-oss/dono)

Your friendly neighborhood donation tracking system for speedrunning marathons.

# Installation/Usage

(to be completed - will just be "clone a repo, edit .env file, run `docker-compose up --build`" type deal, will include instructions on setting up reverse proxy later)

# For Developers

## Starting the project

Run `docker-compose up --build` in the root of the repository to start the project, and go to `localhost:3000` in your browser to see the app.

## Code style

I'm a big believer in opinionated code formatters, so this project uses them on both the frontend and backend. We use [prettier](https://prettier.io/) for javascript on the frontend and [Black](https://github.com/psf/black) for python on the backend. As long as you run your code through those formatters there should be no formatting issues, and our test suite will check to make sure you are conforming to their respective styleguides.

## Contributing

Please submit your changes as pull requests to the project! If applicable, please include tests for your changes. All tests and linters must pass before
