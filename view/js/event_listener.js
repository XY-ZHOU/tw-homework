let ul = document.getElementById('no');
ul.onclick = function (e) {
  let ev = e || window.event;
  let item = ev.target;
  if (item.tagName == 'LI') {
    console.log(item.innerHTML);
  }
}