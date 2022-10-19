// [1 ,2 ,3 ,4 ]
// [8 ,7 ,6 ,5 ]
// [9 ,10,11,12]
// [16,15,14,13]

const n = 4
function matrix() {
  let result = [],
    temp = [],
    flag = true
  for (let i = 1; i <= n ** 2; i++) {
    temp.push(i)
    if (i % n === 0) {
      if (flag) {
        result.push(temp)
      } else {
        result.push(temp.reverse())
      }
      flag = !flag
      temp = []
    }
  }

  return result
}

let result = matrix()
let string = ''
for (let i = 0; i < n; i++) {
  if (i !== n - 1) {
    string = string + result[i].join(' ') + '\n'
  } else {
    string = string + result[i].join(' ')
  }
}
console.log(string)
