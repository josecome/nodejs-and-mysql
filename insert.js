exports.qry = function (a) {
    return "insert into tbtest (test1) values ('" + a + "')"
}
exports.outputResult = function (r) {
    return "Result: " + r;
};