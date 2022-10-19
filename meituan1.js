function commafy(num){
  return num && num
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
      return $2 + ',';
    });
}

let result = commafy(1231423423.22)

console.log(result)//1,231,423,423.22