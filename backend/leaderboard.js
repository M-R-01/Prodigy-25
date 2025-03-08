import { google } from 'googleapis';

export async function getLeaderboard() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS), 
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.SPREADSHEET_ID; 
  const range = 'Leaderboard!A2:C';

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range
  });

  const rows = response.data.values || [];
  return rows.map(([name, score, college_name]) => ({
    name,
    score: parseInt(score) || 0,
    college_name
  }));
}

export async function addEntry(name, score, college_name) {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.SPREADSHEET_ID;
        const range = 'Leaderboard!A:C';
        // // Log the values being added
        // console.log('Adding values:', [name, score, college_name]);
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[name, score, college_name]]
            }
        });
    } catch (error) {
        console.error('Sheets API Error:', error);
        throw error;
    }
}
