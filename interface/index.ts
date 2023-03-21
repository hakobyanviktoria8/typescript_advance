interface User {
  name: string;
  age: number;
}

interface UserId {
  id: number;
}

interface UserData extends User, UserId {
  skills: string[];
}

const user: UserData = {
  name: "Ann",
  age: 23,
  id: 1,
  skills: ["React.js", "TapeScript", "Redux"],
};

export {};
