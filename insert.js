con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Record successfully inserted");
    });
  });