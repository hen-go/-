const n = 5
const hp = [2, 3, 4, 2, 3]
// const hp = [1, 1, 2, 3, 2, 3]

function foo(hp) {
  let dp = new Array(n + 1).fill(0)
  dp[1] = hp[0]
  dp[2] = dp[1] + hp[1]

  for (let i = 3; i <= hp.length; i++) {
    let temp = [...hp]
    let qiangliji = dp[i - 1] + temp[i - 1]
    let taqianzhan = 0

    for (let j = i - 3; j >= 0; ) {
      if (temp[j] >= 1 && temp[j + 1] >= 2 && temp[j + 2] >= 3) {
        temp[j] -= 1
        temp[j + 1] -= 2
        temp[j + 2] -= 3
        taqianzhan += 5
      } else {
        j--
      }
    }

    for (let j = 0; j < i; j++) {
      taqianzhan += temp[j]
    }
    dp[i] = Math.min(taqianzhan, qiangliji)
  }
  console.log(dp)

  return dp[n]
}

let result = foo(hp)
console.log(result)
