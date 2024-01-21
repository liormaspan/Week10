function anagram(str1,str2){
    const cleanedStr1 = str1
    .split("")
    .filter((char) => char != " ")
    .join("")
    .toLowerCase();
  const cleanedStr2 =str2
    .split("")
    .filter((char) => char != " ")
    .join("")
    .toLowerCase();

  if (cleanedStr1.length != cleanedStr2.length) {
    return false;
  }

  const sortedStr1 = cleanedStr1.split("").sort().join("");
  const sortedStr2 = cleanedStr2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
const result = anagram("Astronomer", "Moon starer");
console.log(result);