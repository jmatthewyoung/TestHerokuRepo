import { Router } from 'express';

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

export const testData = Router();

// Initial get everything route
testData.get('/', (req, res, next) => {
    
    try {
        const client = pool.connect()
        const result = client.query('SELECT * FROM test_table');
        const results = { 'results': (result) ? result.rows : null};
        console.log(results);
        client.release();
        return res.json(results);
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
});