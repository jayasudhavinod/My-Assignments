function isAnagram(str1, str2) {
    // Step 1: Remove spaces & convert to lowercase
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();

    // Step 2: Sort characters
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

    // Step 3: Compare
    return sorted1 === sorted2;
}


console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   