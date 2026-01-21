const pool = require('./db'); 

console.log("Hello World! Node.js is running.");

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Error:', err.stack);
  } else {
    console.log('✅ server.js is successfully using the DB connection!');
    console.log('Current DB Time:', res.rows[0].now);
  }
});