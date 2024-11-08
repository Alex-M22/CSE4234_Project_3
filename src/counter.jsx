/*
Word: Any sequence of non-whitespace characters.
Sentence: Any sequence of words ending in a period, question mark, exclamation point, colon, or semicolon.
Syllable: Any word of three characters or less;
or any vowel (a, e, i, o, u) or pair of consecutive vowels, except for a final -es, -ed, or -e that is not -le
*/

function countWords(article){
    const words = article.match(/\S+/g); // whitespace
    return words ? words.length : 0;
}



function countSentences(article){
    const sentences = article.match(/[^.!?;:]+[.!?;:]/g); // punctuation as defined by Dr. Fitz: "Any sequence of words ending in a period, question mark, exclamation point, colon, or semicolon"
    return sentences ? sentences.length : 0;
}



function countSyllables(article){
    const words = article.match(/\S+/g); // Get all the words
    if (!words) return 0;

    let syllableCount = 0;
    words.forEach(word => {
        syllableCount += countSyllablesInWord(word); // Count syllables in each word
    });
    return syllableCount;
}


function countSyllablesInWord(word) {
    word = word.toLowerCase();
    
    // if its short enough a word its probably a single syllablew
    if (word.length <= 3) return 1;

    // or any vowel (a, e, i, o, u) or pair of consecutive vowels
    const vowelGroups = word.match(/[aeiou]{1,2}/g); 
    
    if (!vowelGroups) return 0; // no vowels, no syllables

    // disclude endings as per Dr. Fitz request
    const invalidEndings = /(es|ed|e)$/; // except for a final -es, -ed, or -e that is not -le
    if (invalidEndings.test(word) && !word.endsWith("le")) {
        return vowelGroups.length - 1;
    }

    return vowelGroups.length;
}



function computeFleschIndex(words, sents, sylls){
    return 206.835 - (1.015 * (words / sents)) - (84.6 * (sylls / words))
}



// just call computeFleschIndex and have if statements for returning
function classifyArticleReadability(words, sents, sylls){

    const flesch = computeFleschIndex(words, sents, sylls);

    if (flesch >= 90) return "5th grade";
    else if (flesch >= 80) return "7th grade";
    else if (flesch >= 70) return "8th & 9th grade";
    else if (flesch >= 60) return "10th to 12th grade";
    else if (flesch >= 50) return "College";
    else if (flesch >= 30) return "College graduate";
    else return "Error, could not compute flesch index";
}

export {countWords, countSentences, countSyllables, computeFleschIndex, classifyArticleReadability}
