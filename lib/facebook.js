const axios = require("axios");
const querystring = require("querystring");
require("dotenv").config();
const appId = process.env.FACEBOOK_CLIENT_ID;
const appSecret = process.env.FACEBOOK_CLIENT_SECRET;
const redirectUri = `http://localhost:3000/api/facebook/request-token`;
const STATE = "my-state";

class FacebookLib {
  constructor() {}


  async queryUserTimeline(accessToken) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v17.0/me/posts`,
        {
          params: {
            access_token: accessToken,
          },
        }
      );

      const timeline = response.data.data;
      return timeline;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }


  async getAccessToken(code) {
    try {
      const authorizationUri = `https://graph.facebook.com/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=authorization_code&redirect_uri=${redirectUri}&code=${code}`;

      console.log("Authorization URL:", authorizationUri); // Logging authorizationUri variable

      // Send the request to exchange the authorization code for an access token
      const response = await axios(authorizationUri);
      console.log("Access Token RESPONSE:", response);

      const accessToken = response.data.access_token;
      console.log("Access Token:", accessToken);
      return accessToken;
    } catch (error) {
      console.error(error.response.data, "error");
      throw error;
    }
  }


  generateAuthURL() {
    const oauthParams = {
      client_id: appId,
      redirect_uri: redirectUri,
      state: STATE,
      scope: "pages_show_list ,business_management ,page_events ,pages_read_engagement ,pages_manage_ads,read_insights, pages_read_engagement",
      response_type: "code",
      auth_type: "rerequest",
      fbapp_pres: "0",
      ret: "login",
      sso: "0",
    };

    const oauthUrl = `https://www.facebook.com/v12.0/dialog/oauth?${querystring.stringify(
      oauthParams
    )}`;

    console.log("Authorization URL:", oauthUrl); // Logging the generated authorization URL

    return oauthUrl;
  }
}

module.exports = new FacebookLib();