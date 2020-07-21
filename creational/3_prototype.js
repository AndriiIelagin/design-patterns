const car = {
  wheels: 4,

  init() {
    console.log(`Hello, I have ${this.wheels} wheels and my owner is ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Bob'
  }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()