// specify that in the params that the arguments should be numbers
const pow1 = (x:number, y:number) => {
  return Math.pow(x, y);
}

pow1(4, 9)



// specify a string as a return value type
const pow2 = (x:number, y:number):string => {
  return Math.pow(x, y).toString();
}

pow2(4, 9)