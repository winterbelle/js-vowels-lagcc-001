'use strict';

var isAVowel = function(lttr){
  lttr = lttr.toLowerCase();
  if (lttr === 'a' || lttr === 'e' || lttr === 'i' || lttr === 'o' || lttr === 'u') {
    console.log(lttr + " is a vowel");
    return true;
  } else {
    console.log(lttr + " is not a vowel");
    return false;
  }

};

module.exports = isAVowel;
