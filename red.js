/* 

已知一个序列的生成方式如下：

• 序列生成需要一个基础序列A，这个序列由n个 不大于100的数字组成，同时给定镜像复制次数m。

• 然后对于A进行m次镜像复制，例如序列A={1，2，3}，则一次镜像复制后得到的序列是{1，2，3，3，2，1}，两次镜像复制得到的序列是B={1，2，3，3，2，1，1，2，3，3，2，1} 。

现在给出你生成一个序列所需要的参数，请你计算该序列的第k位是多少。

*/

const n = 6,
  m = 20,
  k = 65
const nums = [1, 2, 3]

function foo() {
  let temp = [...nums]
  temp = [...temp, ...nums.reverse()]
  let s = k % (n * 2)
  return temp[s - 1]
}

let result = foo()
console.log(result)
