"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foo(id) {
    if (typeof id === "number") {
        console.log("Number ");
    }
    else if (typeof id === "string") {
        console.log("String ");
    }
    else {
        console.log("first");
    }
}
foo(1);
foo("11");
foo(true);
function foo1(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
foo1({ a: 111 });
foo1({ b: "hi" });
