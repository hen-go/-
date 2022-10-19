var m = 12, n = 9
var nums = []


function foo(m,n){
  let arr = [], ans = []
  for(let i = 1; i <= n; i++){
    arr[i - 1] = m * i
    ans[i - 1] = change(arr[i - 1])
  }
  
  console.log(arr)
  console.log(ans) 
  ans.sort((a,b) => a - b)
  console.log(ans[n - 1]) 

  function change(num){
    let arr = num.toString().split('')
    let l = 0, r = arr.length - 1
    while(l < r){
      let di = arr[l]
      arr[l] = arr[r]
      arr[r] = di
      l++
      r--
    }

    return parseInt(arr.join(''))
  }
}

foo(m,n)