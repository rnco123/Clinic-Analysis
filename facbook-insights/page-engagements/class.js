const axios = require("axios");

class PageEngagements {
  constructor() {}


  async queryPageEnagagedUsers(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_engaged_users`,
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

  async queryPagePostEngagement(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_post_engagement`,
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

module.exports = new PageEngagements();