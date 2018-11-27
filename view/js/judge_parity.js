const number=20;
for(let i = 1; i <= number; i++){
  document.write(judgeParity(i));
}
function judgeParity(num){
  if(num%2 == 0){
    return(num+"是偶数<br>");
  }else{
    return(num+"是奇数<br>");
  }
}