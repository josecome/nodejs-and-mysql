exports.qry = function (a) {
    return "delete from tbtest where id = " + a
}

exports.outputResult = function (r) {
    return "Result: " + r;
};