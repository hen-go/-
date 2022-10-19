const line = '40807 4'

const tokens = line.split(' ')
let k = tokens[1]
let num = tokens[0].slice(0, k).split(''),
  left = tokens[0].slice(k)

let result
num.reverse()
while (num[0] === '0') num.shift()
result = num.join('')

result += left
console.log(result)
