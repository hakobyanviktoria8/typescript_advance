"use strict";
const obj1 = {
    name: "Anna",
    email: "anna@mamd.as",
    age: 21,
    skills: {
        dev: true,
        qa: false,
    },
};
const foo = (obj) => {
    return `Name: ${obj.name}, Email: ${obj.email}, Skills: ${obj.skills.dev} `;
};
console.log(foo(obj1));
