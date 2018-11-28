class Stack {
  constructor() {
    this._items = []
  }
  push (element) {
    this._items.push(element);
  };
  pop () {
    return this._items.pop();
  };
  peek () {
    return this._items[this._items.length - 1];
  };
  isEmpty () {
    return this._items.length == 0;
  };
  size () {
    return this._items.length;
  };
  clear () {
    this._items = [];
  };
  print () {
    console.log(this._items.toString());
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

