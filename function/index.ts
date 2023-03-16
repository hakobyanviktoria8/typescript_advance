function foo1(fName: string, lName: string): string {
  return `This is a ${fName} ${lName}`;
}

console.log(foo1("Ann", "Ben"));

const foo2 = (a: string, b: string): void => {
  console.log(a + b);
};

foo2("asa", "tur");
