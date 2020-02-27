## Overview

This repository is frontend solution for Summer 2020 pre-assignment in Outotec. The solution is written in [Create-react-app](https://github.com/woltapp/summer2020)

## Libraries
- redux
- redux-thunk
- react-bootstrap
- firebase

## Structure of design

The webpage is divided into 4 mains compoments: MenuBar, Requests table, Filter, Request form <br />
*NOTICE: Please enable location in browser to use Suggestion part

Components:
- _MenuBar_: Navbar of page
- _Requests table_: Contain requests which are fetched from firebase database
- _Filter_: Filter requests by factors such as: id, name, priority, etc...
- _Request form_: Contain a form to fill the information of request which is needed to add to the database

## Instruction

### `cd src/ && touch config.js`

Create a config file to fill the firebase configuration. The configuration should be similar as code below<br />
```javascript
export const firebaseConfig = {
    apiKey: "YOUR_API_URL",
    databaseURL: "YOUR_DATABASE_URL",
    authDomain: "YOUR_AUTHENTICATE_URL",
    projectId: "YOUR_PROJECT_NAME",
}
```

### `npm install`

Install the dependencies before starting the project<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
