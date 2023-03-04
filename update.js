exports.qry = function (a, b) {
    return "update tbtest set test1 = '" + b + "' where id = " + a
}

exports.outputResult = function (r) {
    return "Result: " + r;
};