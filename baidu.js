const line = 'baiduoxiaojiabankanjiaran'

function foo() {
  const yuan = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (let i = 0; i < line.length - 4; i++) {
    if (!yuan.includes(line[i]) && !yuan.includes(line[i + 3])) {
      if (
        yuan.includes(line[i + 1]) &&
        yuan.includes(line[i + 2]) &&
        yuan.includes(line[i + 4])
      ) {
        if (
          line[i + 1] !== line[i + 2] &&
          line[i + 2] !== line[i + 4] &&
          line[i + 1] !== line[i + 4]
        ) {
          count++
        }
      }
    }
  }

  return count
}
let result = foo(line)
console.log(result)
