/* 
统计单词数量，7-eleven,he's算一个单词
可能包含url链接
*/

// const s = 'Visit our website at https://www.oppo.com/customer to learn more!'
const s = "He's 27 7-eleven."

console.log('123-456-7890ww'.match(/[a-zA-Z]+/))
// console.log('https://www.oppo.com/customer'.startsWith('http'))

function countWords() {
  let words = s.split('\n').join(' ').split(' ')
  let count = words.length
  for (w of words) {
    if (w.startsWith('http://') || w.startsWith('https://')) count--
    else if (w.match(/[a-zA-Z]+/) === null) count--
  }
  return count
}

let result = countWords()
console.log(result)
