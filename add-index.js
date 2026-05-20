let data = ["chrome", true, 132.8];
// add "webkit" at index 5
data [5] = "webkit";
console.log(data);

// pop → removes last element
data.pop();
console.log("After pop:", data);

// push → add at end
data.push("firefox");
console.log("After push:", data);

// shift → removes first element
data.shift();
console.log("After shift:", data);