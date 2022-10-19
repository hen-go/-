let correct = 'today is a good day'
let answer = '       is a go day too'
// let correct = 'the cat'
// let answer = 'the     cat'
correct = correct.trim()
answer = answer.trim()

function foo(correct, answer) {
  correct = correct.split(' ').filter((item) => item !== '')
  answer = answer.split(' ').filter((item) => item !== '')
  let n = correct.length,
    m = answer.length

  let dp = Array.from(new Array(n + 1), () => new Array(m + 1))

  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = i * 2
  }
  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j * 1
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (correct[i - 1] === answer[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        let add = dp[i - 1][j] + 2
        let del = dp[i][j - 1] + 1
        let change
        if (answer[j - 1].length <= correct[i - 1].length / 2) {
          change = dp[i - 1][j - 1] + 3
        } else {
          change = dp[i - 1][j - 1] + 1
        }
        dp[i][j] = Math.min(add, del, change)
      }
    }
  }

  console.log(dp)

  return correct.length - dp[n][m]
}

let result = foo(correct, answer)
console.log(result)

/* 
题目大概意思
*/
