const skills: string[] = ["dev", "qa", "devops"];

for (const item of skills) {
  console.log(item.toUpperCase());
}

let newArr = skills
  .filter((x: string) => x !== "devops")
  .map((x) => x + "! ")
  .reduce((a, b) => a + b);

console.log(newArr);

const nums: number[] = [1, 2, 3, 434, 4, 5, 6, 6, 565, 34, 656, 56];

let newNums = nums.reduce((a: number, b: number) => a + b);

console.log(newNums);

const users: string[] = ["Anna", "Asd", "Ajed"];

let asd = users.map((x) => x + "11");
let asdf = asd.map((x, idx: number) => {
  return {
    id: idx,
    name: x,
  };
});

console.log(asdf);

const logs: any[] = [12, 32, "dsd", "dsds"];

let newLogs = logs.map((x) => (typeof x === "number" ? x * 2 : x + " done!"));

console.log(newLogs);
