const n = 5,
  k = 3
let str = 'aBcBa'
console.log(str)

function change(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (i < k) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }

  return result
}

let result = change(str)
console.log(result)
