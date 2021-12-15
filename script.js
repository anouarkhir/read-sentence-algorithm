const sentence = "Hello world.";

const readSentence = function (sentence) {
  const sentenceLength = sentence.replace(/[. ]/g, "").split("").length;
  const numOfWords = sentence.replace(/[.]/g, "").split(" ").length;
  const numOfVowels = sentence.match(/[aeiou]/g).length;

  const result = [sentenceLength, numOfWords, numOfVowels];

  return result;
};

console.log(readSentence(sentence));
