// a pattern which allows us to build really tight communication 
// between different types of objects

// предоставляет централизованную абстракцию, 
// которая позволяет группе объектов взаимодействовать друг с другом

class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    // mediator
    user.room = this
  }

  send(message, from, to) {
    if(to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const bob = new User('Bob')
const alice = new User('Alice')
const jessica = new User('Jessica')

const room = new ChatRoom()

room.register(bob)
room.register(alice)
room.register(jessica)

bob.send('Hello!', alice)
alice.send('Hello hello!', bob)
jessica.send('Hi to all!')