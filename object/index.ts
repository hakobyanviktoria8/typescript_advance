const obj1 = {
  name: "Anna",
  email: "anna@mamd.as",
  age: 21,
  skills: {
    dev: true,
    qa: false,
  },
};

interface objType {
  name: string;
  email: string;
  age: number;
  skills: {
    dev: boolean;
    qa: boolean;
  };
}

const foo = (obj: objType) => {
  return `Name: ${obj.name}, Email: ${obj.email}, Skills: ${obj.skills.dev} `;
};

console.log(foo(obj1));
