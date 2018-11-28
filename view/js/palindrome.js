function palindrome(message){
  let reverseStr = reverseString(message);
  if(reverseStr === message){
    return true;
  }else{
    return false;
  }
}
function reverseString(message){
  return message.split('').reverse().join('');
}
document.write(palindrome('hello')+'<br/>');
document.write(palindrome('abcba')+'<br/>');