/* 
小明要从城市1走到城市n，最多走k步
starts为起点城市
ends为终点城市
costs为城市间路线所需步数

求到达城市n所需的最小步数
 */

const n = 5, //城市个数
  m = 6, //道路数量
  k = 3 //最多走几步
const starts = [1, 1, 2, 3, 3, 4]
const ends = [2, 5, 3, 4, 5, 5]
const costs = [1, 3, 1, 2, 1, 1]

function foo(n, k, starts, ends, costs) {
  let roads = new Map()
  let cost = new Map()
  //将每个城市可到达的城市以及对应的cost储存在map里
  for (let i = 0; i < m; i++) {
    if (roads.has(starts[i])) {
      roads.set(starts[i], [...roads.get(starts[i]), ends[i]])
      cost.set(starts[i], [...cost.get(starts[i]), costs[i]])
    } else {
      roads.set(starts[i], [ends[i]])
      cost.set(starts[i], [costs[i]])
    }
  }

  if (roads.get(1).includes(n) && cost.get(1)[roads.get(1).indexOf(n)] === 1) {
    return 1
  }

  let line = [1],
    result = [],
    money = Infinity

  function dfs(line) {
    if (line.length > k + 1) return
    if (line.length === k + 1 && line[k] !== n) return
    if (line.length <= k + 1 && line[line.length - 1] === n) {
      result.push(line.slice(0))
    }

    for (let i = 1; i <= n; i++) {
      if (roads.has(line[line.length - 1])) {
        if (roads.get(line[line.length - 1]).includes(i)) {
          line.push(i)
          dfs(line)
          line.pop()
        } else {
          continue
        }
      } else {
        return
      }
    }
  }
  dfs(line)

  //计算所需最少的步数
  for (let s of result) {
    let temp = 0
    for (let i = 0; i < s.length - 1; i++) {
      temp = Math.max(temp, cost.get(s[i])[roads.get(s[i]).indexOf(s[i + 1])])
    }
    money = Math.min(money, temp)
  }

  return money
}

let result = foo(n, k, starts, ends, costs)
console.log(result)
