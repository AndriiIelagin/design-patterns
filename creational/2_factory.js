class BasicMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 250
  }
}

class MembershipFactory {
  static list = {
    basic: BasicMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'basic') {
    const Membership = MembershipFactory.list[type] || MembershipFactory.list.basic
    const member = new Membership(name)
    member.type = type
    member.define = () => {
      console.log(`${name} ${type}: ${member.cost}`)
    }
    return member
  }
}
const factory = new MembershipFactory()

const members = [
  factory.create('Bob'),
  factory.create('Alice', 'premium')
]

members.forEach(m => {
  m.define()
})