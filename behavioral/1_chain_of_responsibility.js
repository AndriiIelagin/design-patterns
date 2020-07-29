// Behavioral design patterns allow to make better communication
// between different type objects
// улучшить коммуникацию между объектами разного типа

// chain of responsibility - последовательно у одного и того же объекта вызывать какой-то объем операций
//  и последовательно их модифицировать
// Allow transferring requests sequentially along the chain. Every processor make a decision is it's able to process 
// the request by its own or it the request should be transferred further

class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue
  }

  add(num) {
    this.sum += num
    // chain of responsibility implementation
    return this
  }
}

const s1 = new MySum()
console.log(s1.add(8).add(5).add(14).add(1).sum)