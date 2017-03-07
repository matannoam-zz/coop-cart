# Coop Cart
organize coop buying groups

## Getting started
```Shell
git clone <THIS RESPOSITORY>

yarn install  # Install dependencies
# or
npm install

yarn start  # start the development server
# or
npm start
```
([what's `yarn`?](https://yarnpkg.com))

After the node modules are installed and the development server is running, open your browser to [http://localhost:8080](http://localhost:8080). Open the JavaScript console to see logging.

Replay your actions in development with [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension).
Available for Chrome, Firefox, and Electron.


Build a release for production with
```Shell
yarn build
# or
npm build
```
which will display the gzipped size of the build.

Analyze the size of the code and dependecies (pre-compressed) with
```Shell
yarn size:imports
# or
npm size:imports
```

## Made With
- [preact](https://preactjs.com/) - "a fast 3kB alternative to React with the same ES6 API."
- [pre-bp](http://github.com/pre-bp/pre-bp) - a small predictable state container
- [normalize.css](https://necolas.github.io/normalize.css/) is in the html header for nice, modern styles.

## a react app without react
React is great, but it's bigger than it needs to be to start a project.

pre-bp is a boilerplate app based on [preact](https://preactjs.com/),
"a fast 3kB alternative to React with the same ES6 API." It includes a router and redux, and is ready to use with [redux-devtools-extnesion](https://github.com/zalmoxisus/redux-devtools-extension).
