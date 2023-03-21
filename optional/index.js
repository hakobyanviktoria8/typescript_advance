"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "Ann",
    login: "ann@dsd.ds",
    password: "ann123123",
};
function foo(one, two) {
    return one * two;
}
function foo1(a, b) {
    return a + b;
}
function foo2(a, b) {
    if (b) {
        console.log(a, b);
    }
    console.log(a);
}
foo2(12);
function post(post) {
    var _a;
    const p = (_a = post.id) === null || _a === void 0 ? void 0 : _a.type;
    return p;
}
let post1 = post({
    id: {
        type: 11,
    },
    title: "first post",
});
console.log(post1);
