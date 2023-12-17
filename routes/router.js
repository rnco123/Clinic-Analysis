const express = require("express");
const router = express.Router();
;
const axios = require("axios");
const facebookLib = require("../lib/facebook");
const googleLib = require("../lib/google");
router.get("/api", async (req, res) => {
  try {
    res.status(200).json({ message: "Welcom to the Cinclal San Miguel" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

function getLibraryForPlatform(platform) {
  switch (platform) {
    case "facebook":
      return facebookLib;
    case "google":
      return googleLib;
    default:
      return null;
  }
}


router.get("/api/:platform/request-token", async (req, res, next) => {
  const { state, code } = req.query;
  console.log("State", state);
  console.log("Code", code);
  try {
    const platformInterface = getLibraryForPlatform(req.params.platform);

    console.log(platformInterface, "platformInterface");
    console.log("Requested for acesstoken");
    const accessToken = await platformInterface.getAccessToken(code);
    console.log("Requested for acesstoken after");

    console.log("Acess token", accessToken);

  } catch (error) {
    console.log(error, "ERROR!");
    res.status(500).json({
      message: "An error occurred during token request.",
      error: error.message,
    });
  }
});



module.exports = router;