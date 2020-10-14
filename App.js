function capitalize(str) {
  return str === "" ? str : str[0].toUpperCase() + str.slice(1);
}
function reverse(str) {
  let rts = '';
  for(let i = str.length - 1; i >= 0; i --) {
    rts += str[i]
  }
  return rts;
}
function add() {
  let res = 0;
  Array.from(arguments).forEach(arg => res += arg)
  return res;
}
function subtract(a, b) {
  return a - b;
}
function multiply() {
  let res = 1;
  Array.from(arguments).forEach(arg => res *= arg)
  return res;
}
function divide(a, b) {
  return parseFloat((a / b).toFixed(2));
}
function cypher(str, k) {
  let ans = "";
  for(let i = 0; i < str.length; i ++) {
    if(str[i] !== " " && !str[i].match(/^[.,:!?]/)) {
      ans += String.fromCharCode(str[i].charCodeAt() + k % 26)
    }
    if(str[i] === " ") {
      ans += " ";
    }
    if(str[i].match(/^[.,:!?]/)) {
      ans += str[i];
    }
  }
  return ans;
}

module.exports = {capitalize, reverse, add, subtract, multiply, divide, cypher}
