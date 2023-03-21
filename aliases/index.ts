type User = {
  name: string;
  age: number;
  skills: string[];
};

type UserId = {
  id: number;
};

type UserData = User & UserId;

const user: UserData = {
  name: "Ann",
  age: 21,
  skills: ["HTML", "CSS"],
  id: 112,
};

export {};
