class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof Woof, I am ${this.name}`
  }

}

module.exports = Dog
