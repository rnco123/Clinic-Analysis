const axios = require("axios");

class PagePostImpressions {
  constructor() {}

  
  
  async queryPostImpression(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_impressions`,
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

  async queryPostImpression(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_impressions_fan`,
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

  async queryPostImpression(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/post_impressions_fan_paid`,
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

module.exports = new PagePostImpressions();