const repeatString = function(string, times) {
  let repeatedString = '';
for(let i = 0; i < times; i++){
  repeatedString += string;
}
if (times >= 0){
  return repeatedString
}
else {
  return "ERROR"
}
};

module.exports = repeatString;
