# To-Do Board

Application for managing a To-Do board, to show, create, update and delete tasks. This app is based on the stack MERN (MongoDB, ExpressJS, ReactJS and NodeJS).

![To-Do board home](https://cdn.jsdelivr.net/gh/drakearch/shared@master/to-do-board/img/to_do_board_home.png)

## Project Setup

Create a MongoDB database, you can create a free instance on https://cloud.mongodb.com. Then, setup the database credentials on the file `src/config/config.json`, you have an example of the json schema on the file `src/config/config.sample.json`. Finally, run the application following the next commands on the terminal.

```console
$ npm install
$ npm start

> to-do-board@1.1.0 start C:\Users\Drake\Workspace\to-do-board
> node index.js

Server on port 3000
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run dev`

Runs the app in the development mode with nodemon.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run webpack`

Runs the app in the development mode for frontend development.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
