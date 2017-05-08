var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'letter_app',
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock'
});

connection.connect();

connection.query('SELECT * from letters', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();
