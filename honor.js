const ip1 = '192.168.1.1',
  ip2 = '192.168.1.0',
  code = '255.255.255.0'

function foo() {
  let ip1s = ip1.split('.')
  let ip2s = ip2.split('.')
  let codes = code.split('.')
  let count = 0
  let result = '',
    ipout = ''
  for (let i = 0; i < 4; i++) {
    ipout = ipout + (ip1s[i] & codes[i]) + '.'
    if ((ip1s[i] & codes[i]) === (ip2s[i] & codes[i])) count++
  }
  ipout = ipout.slice(0, -1)
  if (count === 4) {
    result = `1 ${ipout}`
  } else {
    result = `0 ${ipout}`
  }
  return result
}

let result = foo()
console.log(result)
