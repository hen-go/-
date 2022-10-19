const n = 5
const nums = [-6, 0, 2, -2, 3]

function foo(n, nums) {
  let dp = Array.from(new Array(n + 1), () => new Array(n + 1))
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = Infinity
  }
  for (let j = 0; j < n + 1; j++) {
    dp[0][j] = Infinity
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dp[i][j] = Math.min()
    }
  }
}

let result = foo(n, nums)
console.log(result)
