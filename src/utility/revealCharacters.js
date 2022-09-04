export const revealCharacters = (secretText,realText) => {
  let temp = secretText;
  let revealedCount = 0;
  const howManyReveal = Math.ceil(secretText.length * 0.1);
  while (revealedCount <= howManyReveal) {
    temp = temp.map((character, i) => {
      let revealOrNot = Math.random() > 0.5 ? 1 : 0;
      if (revealOrNot && character == "_" && revealedCount <= howManyReveal) {
        revealedCount++;
        return realText[i];
      } else {
        return character;
      }
    });
    return temp;
    //console.log(revealedCount);
  }
};
