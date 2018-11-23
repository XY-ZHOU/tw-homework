const a = [1,2,3,4,5];
function itemInArrayMultipliedByTwo(arr){
  for(let i = 0;i < arr.length; i++){
    arr[i]=arr[i]*2;
  }
 return arr;
}
document.write(itemInArrayMultipliedByTwo(a));