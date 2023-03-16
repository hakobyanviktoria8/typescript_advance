const arr: [number, string] = [12, "sdsd"];

console.log(arr);

const jsjs: [string, number, ...boolean[]] = ["1212", 1212, true, false];

const skillsArr: readonly string[] = ["dev", "qa"];

// skillsArr.push("devops");
console.log(skillsArr);

const sas: Array<string> = ["sas", "sasa", "sasaass"];
sas.push("asas");
console.log(sas);

const sasReadOnly: ReadonlyArray<string> = ["sas", "sasa", "sasaass"];
// sasReadOnly.push("sasa");
console.log(sasReadOnly);
