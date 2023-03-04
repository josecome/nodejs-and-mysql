var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var s = require('./select');

con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_db"
});
var rst = "";
con.connect(function(err) {
  if (err) throw err;
  //console.log(s.qry());
  con.query(s.qry(), function (err, result, fields) {
    if (err) throw err;
    rst = s.outputOfSelect(result);
  });
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(rst);
  }).listen(8080);