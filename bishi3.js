var x =[4,2,3], y =[1,2,10]
var t = 3
//输出5,0

function egg(){
  for(let i = 0; i < t; i++){
    let cur = x[i], step = 0
    if(x[i] <= y[i]){
      console.log(y[i]-x[i])
      continue
    }
    while(cur !== y[i]){
      if(cur % 3 !== 0){
        cur++
        step++
      }
      else{
        cur /= 3
        step++
      }
    }
    console.log(step)
  }
}

egg()