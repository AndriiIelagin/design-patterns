// allow to set traps/hooks 
// for insrance to prevent unneccessary requests to a server

const networkFetch = url => `${url} - response from server`
// function networkFetch(url) {
//   return `${url} - response from server`
// }

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - response from cache`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('node.io'))
console.log(proxiedFetch('express.io'))
console.log(proxiedFetch('node.io'))