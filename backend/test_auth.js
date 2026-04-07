require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

console.log("OAuth2Client instantiated successfully with ID:", process.env.GOOGLE_CLIENT_ID);
