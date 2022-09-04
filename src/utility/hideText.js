export const hideText = (text) => {
    const skipChar = ["-", " ", "'", "."];
    return text?.split("").map((char) => {
        if (skipChar.includes(char)) return char;
        else return "_";
      })
}