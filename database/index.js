const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'drink_ratings',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.connect((err, client, done) => {
  if (err) {
    console.log('ERROR postgres', err);
  } else {
    console.log('Pool successfuly connected to postgres booking');
  }
});

module.exports = pool;
