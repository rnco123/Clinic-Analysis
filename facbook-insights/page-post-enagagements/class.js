const axios = require("axios");

class PeopleClickCta {
  constructor() {}

  async queryPostEngagedUser(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_engaged_user`,
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
  post_clicks
  async queryPostEngagedFan(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_engaged_fan`,
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
  async queryPostClicks(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_clicks`,
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

}

module.exports = new PeopleClickCta();