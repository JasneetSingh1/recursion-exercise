// FIBONACCI SEQUENCE
// ITERATIVE WAY
function fibs(n) {
  let zero = 0;
  let one = 1;
  const arr = [];

  if (n == 0) return arr;

  if (n == 1) {
    arr.push(zero);
    return arr;
  }
  if (n == 2) {
    arr.push(zero);
    arr.push(one);
    return arr;
  }

  arr.push(zero);
  arr.push(one);
  for (let i = 2; i < n; i++) {
    let num = arr[i - 1] + arr[i - 2];
    arr.push(num);
  }

  return arr;
}

const test = fibs(5);
console.log(test);

// RECURSIVE WAY

function fibsRec(n){
   
    
    
    if(n == 1) {
        
       return [0];
    }
    if(n == 2) {
        
        return [0,1];
     }
   
    else {
        let prevFib = fibsRec(n - 1);
        let nextNum = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
        return [...prevFib, nextNum];
        
    }
    
}

const testRec  = fibsRec(5);
console.log(testRec);