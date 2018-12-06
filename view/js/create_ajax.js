var ajax = new XMLHttpRequest();
ajax.request = function(url,method,callback,post_body) {
  let xhr = this;
  xhr.onreadystatechange = (function(myxhr) {
    return function() {
      if (myxhr.readyState === 4 && myxhr.status === 200) {
       callback(myxhr);
      }
    };
  }(xhr));
  xhr.open(method.toUpperCase(), url, true);
  xhr.send(post_body || "");
};
function myCallback(xhr){
  alert(xhr.responseText);
}
ajax.request("somefile.txt","get",myCallback);
ajax.request("script.php","post",myCallback,"first=John&last=Smith");