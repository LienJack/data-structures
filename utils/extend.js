{
  // 原型链继承
  function Person() {
    this.name = 'build'
    this.pets = ['dog', 'cat']
  }
  Person.prototype.eat = function() {
    console.log('梁非凡')
  }

  function Student() {
    this.num = '123'
  }
  let p = new Person()

  Student.prototype = p
  Student.prototype.constructor = Student

}

{
  // 结合继承
  function Person() {
    this.name = 'kongwo'
    this.pets = ['dog','cat']
  }
  Person.prototype.eat = function() {
    console.log('梁非凡')
  }

  function Student() {
    Person.call(this)
    this.num = '1234'
  }
  let p = new Person()
  Student.prototype = p
  Student.prototype.constructor = Student
}

{
  // 寄生式组合继承
  function Person(name,pets) {
    this.name = name
    this.pets = pets
  }
  Person.prototype.eat = function() {
    console.log('吃饭')
  }
  function Student(num, name, pets) {
    Person.call(this, name, pets)
    this.num = num
  }
  function Temp() {}
  Temp.prototype = Person.prototype
  let temp = new Temp()
  Student.prototype = temp
  temp.constructor = Student
}
{
   // 原型链继承
   // 本质上就是生成prototype的副本
  function objectCreate(o) {
    function F() {}
    F.prototype = o 
    return new F()
  }
}
{
  // 寄生组合继承
  function objectCreate(o) {
    function F() {}
    F.prototype = o 
    return new F()
  }
  function objectCreateNew(subClass, superClass) {
    let p = objectCreate(superClass.prototype)
    p.constructor = subClass
    subClass.prototype = p
  }
  // 可以在化简
  function objectCreateNew(subClass, superClass) {
    let p = Object.create(superClass.prototype)
    subClass.prototype  = p
    p.constructor = subClass
  }



}
/**
 * 原型链和寄生的区别就是
 * 原型链是是继承父级的全部this和prototype
 * 寄生型只是继承prototype
 */