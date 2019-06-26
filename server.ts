//Install express server
const express = require('express');
const path = require('path');

const app = express();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/Demo'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Demo/index.html'));
});

app.get('/db/*', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      console.log(results);
      client.release();
      return results;
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);