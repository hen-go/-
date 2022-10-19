/* 
变量名转换
首字母大写则不转换
如其他出现的大写字母转为下划线加小写字母
如果大写字母前已经有下划线，则不添加下划线只转小写
当出现连续的大写字母，只在其第一个和最后一个字母前添加下划线
*/

const line = 'simpleHT_mE'

function change() {
  let result = ''
  if (line[0] === line[0].toUpperCase()) return line
  let s = line.split('_')
  let temp = []
  for (let ss of s) {
    while (ss.length) {
      for (let i = 0; i < ss.length; i++) {
        if (ss[0] === ss[0].toLowerCase()) {
          if (ss[i] === ss[i].toLowerCase()) {
            if (i === ss.length - 1) {
              temp.push(ss.slice(0))
              ss = ''
              break
            } else {
              continue
            }
          } else {
            temp.push(ss.slice(0, i))
            ss = ss.slice(i)
            break
          }
        } else if (ss[0] === ss[0].toUpperCase()) {
          if (ss[i] === ss[i].toUpperCase()) {
            if (i === ss.length - 1) {
              temp.push(ss.slice(0))
              ss = ''
              break
            } else {
              continue
            }
          } else {
            temp.push(ss.slice(0, i))
            ss = ss.slice(i)
            break
          }
        }
      }
    }
  }

  result = temp[0]
  for (let i = 1; i < temp.length; i++) {
    if (
      temp[i][temp[i].length - 1] === temp[i][temp[i].length - 1].toUpperCase()
    ) {
      if (i === temp.length - 1) {
        result = result + '_' + temp[i].slice(0).toLowerCase()
        // temp[i + 1] = temp[i][temp[i].length - 1] + temp[i + 1]
      } else {
        result = result + '_' + temp[i].slice(0, -1).toLowerCase()
        temp[i + 1] = temp[i][temp[i].length - 1] + temp[i + 1]
      }
    } else {
      result = result + '_' + temp[i].toLowerCase()
    }
  }
  result = result.split('__').join('_')
  return result
}

let result = change()
console.log('first')
