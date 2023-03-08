# README

## Problem Statement

Using NodeJS, write an API that accepts a post request with a UTF-8 string payload and returns
a ROT-13 version of the string, storing the original string in a database of your choice (SQLite,
MongoDB, PostgreSQL/MySQL). The API should be capable of accepting a string of 1,000
characters. Then provide an alternate implementation using Ruby on Rails. (No 3rd party
libraries or gems may be used for ROT-13.)
### Built With

* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Jest](https://jestjs.io/)

------------

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* `Node v14.17.5`
* `Express v4.18.1`
* `MongoDB`
* `Mongoose v6.4.1`
* `Jest v29.2.2`

### Helping Libraries:
* body-parser
* dotenv
* nodemon

### Installation

1. Clone the repo and cd into it
sh
git clone https://github.com/salmanali23/rot13.git
2. Move into the project directory
`cd rot13`

3. Install dependencies
`yarn`

4. Start the server
* `yarn run start`
* `yarn run dev` run with nodemon watch

5. Run test suits
`yarn jest`

## Approach

  * A simple api application to convert the given string to ROT13
  * First check whether rotation of string is in db or not.
  * If is then simply return the encryption in db
  * If not the create hash of each character with it's ROT-13 version on runtime and replace each character of original string
  * After this original and rot13 strings are saved in db
  * API Error Handling added at application level
  * Functional test added in `encrypt.spec.js` file

## API Docs
### URL:
  * Method: POST
  * URL: https://API_BASE_URL/api/v1/string_rotation
  for running local it would become `http://localhost:5000/api/v1/string_rotation`

### Request Payload
  {
      "stringRotation": {
      "originalString": "This is a test message"
    }
  }
### Response Payload
  {
    "stringRotation": {
      "originalString": "This is a test message",
      "rotString": "Guvf vf n grfg zrffntr"
    }
  }
