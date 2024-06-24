import express from 'express';
import path from 'path';

import appMarkup from './src/render';
const app = express();
const PORT = process.env.PORT || 3004;

// Serve static files from the 'dist' directory
app.use(express.static(path.resolve(__dirname, '../dist')));

// Serve SSR of React components
app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React with Express</title>
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="app">${appMarkup}</div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
