const money = '￥20';
function extractAmount(money){
  let numberOfMoney = money.substring(1, money.length);
  return numberOfMoney;
}
 document.write(extractAmount(money));