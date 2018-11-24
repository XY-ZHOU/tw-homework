const a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function findTheMostFrequentElementInArray(arr) {
  let notRepeatArr = findElementOfNotRepeat(arr);
  let numArr = getNumberOfElement(notRepeatArr,arr);
  let index = findIndexOfBiggestNumOfArr(numArr);
  return (notRepeatArr[index]);
}
document.write("the element of array is " + findTheMostFrequentElementInArray(a));
function findElementOfNotRepeat(arr) {
  let elementsOfNotRepeat = [];
  for (let i = 0; i < arr.length; i++) {
    if (elementsOfNotRepeat.indexOf(arr[i]) == -1) {
      elementsOfNotRepeat.push(arr[i]);
    }
  }
  return elementsOfNotRepeat;
}
function getNumberOfElement(elementsOfNotRepeatArr, arr) {
  let numArr = [];
  for (let i = 0; i < elementsOfNotRepeatArr.length; i++) {
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (elementsOfNotRepeatArr[i] === arr[j]) {
        num++;
      }
    }
    numArr.push(num);
  }
  return numArr;
}
function findIndexOfBiggestNumOfArr(numArr) {
  return (numArr.indexOf(Math.max.apply(null, numArr)));
}