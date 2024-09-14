const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Load OAuth2 credentials
const credentials = JSON.parse(fs.readFileSync('credential.json'));
const { client_secret, client_id, redirect_uris } = credentials.web;

// Create OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// Define the scopes needed
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// Step 1: Generate the authorization URL and redirect user to Google for authentication
app.get('/auth', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(authUrl);
});

// Step 2: Handle the callback from Google and exchange the authorization code for tokens
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    // Save tokens for future use
    fs.writeFileSync('tokens.json', JSON.stringify(tokens));
    res.send('Authentication successful! You can close this tab.');
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    res.status(500).send('Error during authentication');
  }
});

// Schedule Google Meet endpoint
app.post('/schedule', async (req, res) => {
  const { summary, startTime, endTime } = req.body;

  try {
    // Load the tokens
    const tokens = JSON.parse(fs.readFileSync('tokens.json'));
    oauth2Client.setCredentials(tokens);

    // Initialize the Google Calendar API
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const event = {
      summary: summary,
      start: {
        dateTime: startTime,
        timeZone: 'America/Los_Angeles', // Change as needed
      },
      end: {
        dateTime: endTime,
        timeZone: 'America/Los_Angeles', // Change as needed
      },
      conferenceData: {
        createRequest: {
          requestId: 'sample123',
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    // Insert the event into the calendar
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
      conferenceDataVersion: 1,
    });

    res.json({
      hangoutLink: response.data.conferenceData.entryPoints[0].uri,
    });
  } catch (error) {
    console.error('Error scheduling Google Meet:', error);
    res.status(500).send('Error scheduling Google Meet');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Open the following URL in your browser to authorize the app:`);
  console.log(`http://localhost:${port}/auth`);
});
