// позволяет создавать определенную абстрактную оболочку над функционалом объекта,
// который позволяет управлять им, но уже через другой объект,
// который будет им управлять и записывать состояние, например Redux

class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(target) {
    this.target = target
    this.executedCommands = []
  }

  execute(command) {
    this.executedCommands.push(command)
    return this.target[command]()
  }
}

const x = new Command(new MyMath(2))
console.log(x.execute('square'))
console.log(x.execute('cube'))
console.log(x.executedCommands)