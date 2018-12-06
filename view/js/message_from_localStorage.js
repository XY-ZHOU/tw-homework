var txt=document.getElementById("txt");
if(!window.localStorage){
 alert("浏览器不支持localstorage");
} else {
  localStorage.setItem('num', '0');
  console.log(localStorage.getItem('num'));
  txt.value=localStorage.getItem('num');
  let newnum=parseInt(localStorage.getItem('num'));
  function accumulate(){
    newnum++;
    localStorage.setItem('newnum', newnum);
    txt.value=localStorage.getItem('newnum');
  }
}