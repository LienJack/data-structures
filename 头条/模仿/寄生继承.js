function Man(name) {
  People.call(this);
}
Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  }
})