let a = '[a, b, c, d]';
let b = [1, 2, 3, 4];
function judgeVariabletType(param){
  if(Object.prototype.toString.call(param) === "[object Array]"){
    return true;
  }
  else{
    return false;
  }
}
document.write(judgeVariabletType(a));
document.write(judgeVariabletType(b));