const axios = require("axios");

class PageImpressions {
  constructor() {}


  async queryPageImpression(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_impression`,
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

  

  async queryPageImpressionPaid(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_impressions_paid`,
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

module.exports = new PageImpressions();