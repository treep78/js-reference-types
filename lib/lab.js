'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

let wrds = "I parked my car in the harvard yard."

const getNormalizedWords = function(words)
{
  words = words.split(/\s+/); //separate into array by spaces
  for(let i = 0; i < words.length; i++)
  {
    let word = words[i].replace(/\W+/, '');//replace punctuation
    word = word.toUpperCase();//capticalize
    words[i] = word;
  }
  return words; //return result
}


// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function(words)
{
  words = words.split(/\s+/); //separate into array by spaces
  for(let i = 0; i < words.length; i++)
  {
    let word = words[i].replace(/\W+/, '');//replace punctuation
    word = word.toUpperCase();//capticalize
    words[i] = word;
  }
  let wordDic = {};
  for (let i = 0; i < words.length; i++)
  {
    let word = words[i];
    wordDic[word] = true;
  }
  let uniqueWords = [];
  let tempWords = [];
  let w = 0;
  for(tempWords[w++] in wordDic)
  uniqueWords = tempWords;
  return uniqueWords;
}


// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function(words, unique)
{
  words = words.split(/\s+/); //separate into array by spaces
  for(let i = 0; i < words.length; i++)
  {
    let word = words[i].replace(/\W+/, '');//replace punctuation
    word = word.toUpperCase();//capticalize
    words[i] = word;
  }
  let onlyUnique = unique || false;
  if(onlyUnique)
  {
    let wordDic = {};
    for (let i = 0; i < words.length; i++)
    {
      let word = words[i];
      wordDic[word] = true;
    }
    let numWords = 0;
    let word;
    for(word in wordDic)
    {
      numWords = numWords +1;
    }
    return numWords;
  }
  if(!onlyUnique)
  {
    return words.length;
  }
}


// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
