class Queue {
  constructor(){
    this._items = []
  }
  enqueue(element){
  this._items.push(element);
  };
  dequeue(){
    return this._items.shift();
  };
  front(){
    return this._items[0];
  };
  isEmpty(){
    return this._items.length == 0;
  };
  clear(){
  this._items = [];
  };
  size(){
    return this._items.length;
  };
  print(){
    console.log(this._items.toString());
    };
}

// function hotPotato (nameList, num) {
//   var queue = new Queue()
//   for (let i=0; i<nameList.length; i++) {
//     queue.enqueue(nameList[i])
//   }
//   var eliminated = ""
//   while (queue.size() > 1) {
//     for(let i =0; i < nameList.length; i++) {
//       queue.enqueue(queue.dequeue())
//     }
//     eliminated = queue.dequeue()
//     console.log(eliminated+'在击鼓游戏中淘汰')
//   }
//   return queue.dequeue()
// }
// var name= ["1", "2", "3", "4", "5", "6" ]
// var winer = hotPotato(name, 7)
// console.log('胜利者', + winer)

var queue = new Queue()
queue.enqueue('1')
var queue2 = new Queue()
queue2.enqueue('2')
queue.print()
queue2.print()