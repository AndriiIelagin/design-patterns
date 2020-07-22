// Добавлять новый функционал, поведение для уже сеществующих классов
// For adding new functionality for existing classes

class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `${this.ip}:${this.port}`
  }
}

// decorator - get object, update it with new functionality and return it
function aws(server) {
  server.isAws = true
  server.awsInfo = function () {
    return server.url
  }
  return server
}

function azure(server) {
  server.isAzure = true
  server.port += 500
  return server
}

const s1 = aws(new Server('82.37.53.25', 8080))
console.log(s1.isAws)
console.log(s1.awsInfo())

const s2 = azure(new Server('32.78.82.64', 5000))
console.log(s2.isAzure)
console.log(s2.url)