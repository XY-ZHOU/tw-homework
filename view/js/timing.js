let beginBtn = document.getElementsByClassName('begin')[0];
let endBtn = document.getElementsByClassName('end')[0];
let res = document.getElementById('result');
let time = 0;
let t1;
beginBtn.onclick = function(){
  t1 = window.setInterval(timing,1);
};
function timing(){
  time = time+1;
}
endBtn.onclick = function(){
  window.clearInterval(t1);
  res.value = translateTime(time);
};
function translateTime(time){
  return (time/1000+"秒");
}

