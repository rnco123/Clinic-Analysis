const axios = require("axios");

class PeopleClickCta {
  constructor() {}


  async queryUserTimeline(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_total_actions`,
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

  async queryUserTimeline(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_fans`,
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