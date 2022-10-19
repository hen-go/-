// const arr = '(()){[}{}[]'
const arr = '}[]'

const kmap = new Map([
  ['[', ']'],
  ['{', '}'],
  ['(', ')'],
])

let stack = []
let less = []
let index = []

for (let i = 0; i < arr.length; i++) {
  if (kmap.has(arr[i])) {
    if (i === arr.length - 1) {
      less.push(arr[i])
      index.push(i)
    } else {
      stack.push(arr[i])
    }
  } else if (!kmap.has(arr[i]) && stack.length) {
    if (arr[i] !== kmap.get(stack[stack.length - 1])) {
      let s = stack.pop()
      stack.pop()
      less.push(s)
      index.push(i - 1)
    } else {
      stack.pop()
    }
  } else {
    less.push(arr[i])
    index.push(i)
  }
}

let result = []
for (let i = 0; i < less.length; i++) {
  if (kmap.has(less[i])) {
    result.push(`${kmap.get(less[i])},${index[i] + 2}`)
  } else {
    let key = [...kmap.keys()].find((k) => kmap.get(k) === less[i])
    result.push(`${key},${index[i] + 1}`)
  }
}

console.log(kmap)
