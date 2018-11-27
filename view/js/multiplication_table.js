const num = 9;
function multiplicationTable(num) {
  for (let j = 1; j <= num; j++) {
    for (let i = 1; i <= num; i++) {
      document.write(i + '*' + j + '=' + (i * j) + " ");
      if (i == j) {
        document.write("<br/>");
        break;
      }
    }
  }
}
multiplicationTable(num);
