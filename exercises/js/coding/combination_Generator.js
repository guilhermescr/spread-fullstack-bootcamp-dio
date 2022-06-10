function combineWords(txt) {
  let txt_letter = txt.split("");
  console.log(txt);
  console.log(txt_letter[0]);
  for (let i = 0; i < txt_letter.length; i++) {
    for (let j = txt_letter.length - 1; j != ""; j--) {
      if (txt_letter[i] == txt_letter[j]) {
        console.log(txt_letter[i]);
      } else if (i == txt_letter.length - 1) {
        return;
      } else if (i === txt_letter.length - txt_letter.length && j === txt_letter.length-1) {
        // nothing happens;
      } else {
        console.log(txt_letter[i] + txt_letter[j]);
      }
    }
  }
}
combineWords("dog");