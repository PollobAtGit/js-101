function makeNegative(num) {
  if (num > 0){
      num = -1 * num;
  }
  return num;
}

console.log(makeNegative(23));
console.log(makeNegative(-23));
console.log(makeNegative(0));