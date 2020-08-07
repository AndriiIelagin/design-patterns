class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} is doing ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} earns ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'process of development application'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'process of testing'
  }
}

const dev = new Developer('Andrew', 100000)
console.log(dev.getPaid())
console.log(dev.work())