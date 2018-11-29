const fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
function numberOfFruits(obj){
  let sum = 0;
  for(key in obj){
    sum = sum+parseInt(obj[key]);
  }
  return sum;
}
document.write(numberOfFruits(fruit));