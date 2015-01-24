function countWords(inputWords) {
  return inputWords.reduce(function(res, word) {
    if (res[word]) {
      res[word]++;
    } else { res[word] = 1; }

    return res;
  }, {});
}

module.exports = countWords;
