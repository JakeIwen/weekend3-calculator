function addi(data) {
  return Number(data.x) + Number(data.y);
}
function subtr(data) {
  return Number(data.x) - Number(data.y)
}
function multi(data) {
  return Number(data.x) * Number(data.y)
}
function divi(data) {
  return Number(data.x) / Number(data.y)
}
function exp(data) {
  return Math.pow(data.x, data.y)
}
function sqrt(data) {
  if(data.y == undefined) {
    return Math.sqrt(data.x);
  } else {
    return Math.sqrt(data.y);
  }
}
module.exports.addi = addi;
module.exports.subtr = subtr;
module.exports.multi = multi;
module.exports.divi = divi;
module.exports.exp = exp;
module.exports.sqrt = sqrt;
//module.exports = subtr;
