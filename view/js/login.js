let userName = document.getElementById('userName');
let userPwd = document.getElementById('userPwd');
let tip = document.getElementById('tip');
function showResult() {
  if (isLoginSuccess(userName,userPwd)) {
    showTip("登录成功");
  }else {
    emptyUserPwd();
    showTip("账号或密码错误，请重新输入");
  }
}
function isLoginSuccess(userName,userPwd) {
  return userName.value === "123"|| userPwd.value === "123";
}
function showTip(message){
  tip.innerHTML=message;
}
function emptyUserPwd() {
  userPwd.innerHTML = "";
}