const line = 'abcaa'
const nums = line.split('')
let used = new Array(nums.length).fill(0)
let u = []
let result = [],
  temp = []
dfs(temp, result, used)
let res = new Set(result)
let count = 0
for (let s of res) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      count--
      break
    }
  }
  count++
}

console.log(count)
function dfs(temp, result, used) {
  if (temp.length === nums.length) {
    result.push(temp.join(''))
    u.push(temp.join(''))
    return
  }

  for (let i = 0; i < nums.length; i++) {
    if (!used[i]) {
      if (u[0]) {
        used[i] = 1
        temp.push(nums[i])
        if (temp.join('') !== u[0].slice(0, temp.length)) {
          dfs(temp, result, used)
          temp.pop()
          used[i] = 0
        } else {
          temp.pop()
          used[i] = 0
          break
        }
      } else {
        used[i] = 1
        temp.push(nums[i])
        dfs(temp, result, used)
        temp.pop()
        used[i] = 0
      }
    }
  }
}
