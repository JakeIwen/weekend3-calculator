function stringToUSD(number){
  return number.toLocaleString('en', {style: 'currency', currency: 'USD'});
}

module.exports = stringToUSD;
