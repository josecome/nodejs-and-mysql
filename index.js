var http = require('http');
var fs = require('fs');
var mysql = require('mysql');

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db"
});
var rst = "";
con.connect(function(err) {
  if (err) throw err;
  con.query("select * from tbtest", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    rst = result;
  });
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Result: ' + rst);
    /*fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });*/
  }).listen(8080);