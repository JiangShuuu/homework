/* eslint-disable */
const express = require("express");
const app = express();
import axios from "axios";
import qs from "querystring";
require("dotenv").config();

app.post("/", async (req, res) => {
  try {
    if (!req.query.code) {
      return res.json("no code found");
    }
    const accessToken = await getAccessTokenFromCode(req.query.code);
    const userData = await getFacebookUserData(accessToken);
    return res.json({ userData });
  } catch (error) {
    console.log("[Facebook Login API Error]", error);
    return res.json("Error occured");
  }
});

async function getAccessTokenFromCode(code) {
  const params = qs.stringify({
    client_id: process.env.FB_CLIENT_ID,
    client_secret: process.env.FB_CLIENT_SECRET,
    redirect_uri: process.env.FB_REDIRECT_URI,
    code
  });
  const { data } = await axios.get(
    `https://graph.facebook.com/v11.0/oauth/access_token?${params}`
  );
  return data.access_token;
}

module.exports = app
