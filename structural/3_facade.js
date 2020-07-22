// Создать более простой и понятный интерфес для управления и взаимодействия с компонентами
// Create more clear and straightforward interface for interaction, for example, jQuery library

class Complaints {
  constructor() {
    this.complaints = []
  }
  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

// facade
class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    switch (type) {
      case 'service':
        complaint = new ServiceComplaints()
        break;
      default:
        complaint = new ProductComplaints()
        break;
    }
    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Bob', 'service', 'not available'))
console.log(registry.register('Alice', 'fdgfdg', 'got error'))