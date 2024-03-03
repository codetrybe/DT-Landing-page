# Installation instructions for Landing Page

This are the installation instructions for Landing Page Repository

## Prerequisites

- [Node JS](https://nodejs.org/en/download/)
- [Tailwind CSS](https://tailwindcss.com/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)


## Get a copy of the source code

Unless you want to contribute, any method used should be fine.

The recommended method is cloning using git:

```sh
https://github.com/codetrybe/DailyTracker-Landing-Page.git
```

This should clone the repo to your local environment.

Other methods to clone are:

```sh
git@github.com:codetrybe/DailyTracker-Landing-Page.git # If you have ssh configured

gh repo clone codetrybe/DailyTracker-Landing-Page # If you are using gh cli
```

If for any reason you can't clone then you can either use codespaces or download a ZIP.

## Install Project Dependencies

By default css file is already pre-built when you clone the repository.
If by any reason there is no [`css file`](../build/css/style.css), then run:

```sh
npm run build
```

This will create the css file used by the project.

## Run the dev server

To run the project, you need`http-server`

```sh
cd build # Move to the build directory
npm install http-server -g # Install the node http server
http-server # Start the server
```

For the server to start, you need to be in the directory with `index.html` in place.

The server by default will start in port `8080`
