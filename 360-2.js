const zhu = ['i', 'you', 'he']
const wei = ['am', 'is', 'are']
const bin = ['yours', 'his', 'hers']

const snum = 5
let sentence = [
  'i am yours',
  'you is his',
  'he are hers yours',
  'i am am yours',
  'is his',
]

function correct(sentence) {
  let result = []
  for (let i = 0; i < snum; i++) {
    let wnum = 0
    let words = sentence[i].split(' ')
    if (zhu.includes(words[0])) {
      for (let j = 1; j < words.length; j++) {
        if (wei.includes(words[j])) {
          wnum++
        }
      }
      if (wnum === 1) {
        result.push('YES')
      } else {
        result.push('NO')
      }
    } else {
      result.push('NO')
    }
  }
  return result
}

let result = correct(sentence)
console.log(result)
