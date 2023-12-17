const axios = require("axios");

class PageUnlikes {
  constructor() {}


  async queryForPageUnLikes(accessToken,pageId) {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v18.0/${pageId}/insights/page_fan_removes_unique`,
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

module.exports = new PageUnlikes();