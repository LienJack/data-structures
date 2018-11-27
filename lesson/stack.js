function Stack() {
  var items = [];
  this.push = function (element) {
    items.push(element);
  };
  this.pop = function () {
    return items.pop();
  };
  this.peek = function () {
    return items[items.length - 1];
  };
  this.isEmpty = function () {
    return items.length == 0;
  };
  this.size = function () {
    return items.length;
  };
  this.clear = function () {
    items = [];
  };
  this.print = function () {
    console.log(items.toString());
  };
}

var stack = new Stack()
console.log(stack.isEmpty())

/**
 * 进制转换
 * @param {*} decNumber 
 * @param {*} base 
 */
function baseConcerter(decNumber, base) {
  const remStack = new Stack()
  let rem
  let baseString =''
  let digits = '012345679ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]
  }
  return baseString
}
console.log(baseConcerter(100345, 2))

