function countWordOccurrences(inputString) {
    const words = inputString.split(' ');
    const wordCountMap = new Map();

    words.forEach(word => {
        const sanitizedWord = word.toLowerCase(); // Convert word to lowercase for case-insensitive counting
        if (wordCountMap.has(sanitizedWord)) {
            wordCountMap.set(sanitizedWord, wordCountMap.get(sanitizedWord) + 1);
        } else {
            wordCountMap.set(sanitizedWord, 1);
        }
    });

    return wordCountMap;
}

const text = "This is a test. This is only a test. Count the occurrences of each word in this test.";
const wordCountMap = countWordOccurrences(text);

console.log("Word Occurrences:");
wordCountMap.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
