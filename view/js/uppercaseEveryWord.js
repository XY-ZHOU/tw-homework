CONST sentence = 'good afternoon, mr mike.';
function uppercaseEveryWordOfStr(sentence){
  let words =sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    let uppercaseFirstLetter = words[i][0].toUpperCase();
    let otherLetters = words[i].substring(1, words[i].length);
    words[i] = uppercaseFirstLetter+otherLetters;
  }
  let newSentence = words.join(' ');
  return newSentence;
}
document.write(uppercaseEveryWordOfStr(sentence));
