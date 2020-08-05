// Стратегия — это поведенческий паттерн проектирования, 
// который определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс, 
// после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.

class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}
class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 3
  }
}

// strategy pattern
class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))
console.log(commute.travel(new Taxi()))