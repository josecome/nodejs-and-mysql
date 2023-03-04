exports.qry = function () {
    return "select * from tbtest"
}
exports.outputResult = function (r) {
    var a = "<h1>This is result from database</h1><br>"
    for (var i = 0; i < r.length; i++){
        a += r[i].id + ", " + r[i].test1 + "<br>"
    }
    return "" + a;
};