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

module.exports.addi = addi;
module.exports.subtr = subtr;
module.exports.multi = multi;
module.exports.divi = divi;
//module.exports = subtr;
