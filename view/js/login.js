let userName = document.getElementsByClassName('userName')[0];
let userPwd = document.getElementsByClassName('userPwd')[0];
let btn = document.getElementsByClassName('btn')[0];
let tip = document.getElementsByClassName('tip')[0];
btn.onclick = function () {
  tip.style = "display: none";
  tip.innerHTML = "";
  if (userName.value == ""|| userPwd.value == "") {
     userPwd.innerHTML = "";
     tip.style = "display:block";
     tip.innerHTML = "账号或密码不能为空，请重新输入"
  } else if ((userPwd.value != "" && userName.value != "" )&&(userName.value != "123" || userPwd.value != "123")) {
     userPwd.innerHTML = "";
     tip.style = "display:block";
     tip.innerHTML = "账号或密码错误，请重新输入";
  } else {
      tip.style = "display:block";
      tip.innerHTML = "登录成功";
  }
}

