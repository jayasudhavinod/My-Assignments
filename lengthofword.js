function lastwordlength(s) {
    s = s.trim();
    let words = s.split(" ");
    let lastword = words[words.length - 1];

    return lastword; // return word instead of length
}

let first = "Hello world";
let second = "fly me to the moon";

let word1 = lastwordlength(first);
let word2 = lastwordlength(second);

console.log("Last word:", word1, "& Length:", word1.length);
console.log("Last word:", word2, "& Length:", word2.length);