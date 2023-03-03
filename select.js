con.connect(function(err) {
    if (err) throw err;
    con.query("", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });