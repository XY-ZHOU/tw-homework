const colors = ["Red", "Green", "White", "Black"];
function outputWithSpace(arr) {
  return (arr.join(" "));
}
function outputWithPlus(arr) {
  return (arr.join("+"))
}
function outputWithComma(arr) {
  return (arr.join(","))
}
document.write(outputWithSpace(colors)+"</br>");
document.write(outputWithPlus(colors)+"</br>");
document.write(outputWithComma(colors));