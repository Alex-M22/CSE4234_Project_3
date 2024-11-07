
/*

these are the calls
                            words : countWords(art.content),
                            sentences : countSentences(art.content),
                            syllables : countSyllables(art.content),
                            flesch : computeFleschIndex(countWords(art.content),countSentences(art.content), countSyllables(art.content)),
                            grade : classifyArticleReadability(countWords(art.content),countSentences(art.content), countSyllables(art.content)),
*/

function countWords(article){
    return 1;
}

function countSentences(article){
  return 2;
}

function countSyllables(article){
  return 3;
}

function computeFleschIndex(words, sents, sylls){
  return 4;
}

function classifyArticleReadability(words, sents, sylls){
  return 5;
}

export {countWords, countSentences, countSyllables, computeFleschIndex, classifyArticleReadability}
