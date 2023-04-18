"use strict";
let input;
input = 3;
input = "hi";
// input = ["dsd", 121];
function run(i) {
    if (typeof i === "number") {
        console.log("Number", i++);
    }
    else if (typeof i === "string") {
        console.log("Number", i + " all");
    }
    else {
        console.log(i);
    }
}
run(input);
