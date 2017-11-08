// return masked string
function maskify(cc) {
//
    var x = cc.toString();
// replace x with #
    var y = x.replace(/.(?=.{4,}$)/g, '#');
// check the length of the string and stop at 4
    for (var i = (y.length - 4); i < y.length; i++) {
        y[i] = x[i];
    }
    return y;
}
