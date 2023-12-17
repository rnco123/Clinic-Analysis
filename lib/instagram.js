const axios = require("axios");
const querystring = require("querystring");
require("dotenv").config();
const appId = process.env.FACEBOOK_CLIENT_ID;
const appSecret = process.env.FACEBOOK_CLIENT_SECRET;
const redirectUri = `http://localhost:3000/api/facebook/request-token`;
const STATE = "my-state";
class InstagramLib {
  constructor() {}


}

module.exports = new InstagramLib();