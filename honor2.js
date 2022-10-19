const s1 = 'AABCD',
  target1 = 'CDAA'
const s2 = 'AABCD',
  target2 = 'ABCD'
const s3 = 'AABCD',
  target3 = 'CFS'
const string = [s1, s2, s3]
const target = [target1, target2, target3]

function foo() {
  let result = ''
  for (let i = 0; i < 3; i++) {
    let flag = 0
    for (let j = 0; j < string[i].length; j++) {
      if (string[i].includes(target[i])) {
        flag = 1
        break
      } else {
        let first = string[i].slice(0, 1)
        let last = string[i].slice(1)
        string[i] = last + first
      }
    }
    if (flag) {
      result += '1'
    } else {
      result += '0'
    }
  }
  return result
}

//解法二
function foo1() {
  let result = ''
  for (let i = 0; i < 3; i++) {
    string[i] += string[i]
  }
  for (let i = 0; i < 3; i++) {
    if (string[i].includes(target[i])) result += '1'
    else result += '0'
  }
  return result
}

let result = foo1()
console.log(result)
