interface User {
  name?: string;
  login: string;
  password: string;
}

const user: User = {
  name: "Ann",
  login: "ann@dsd.ds",
  password: "ann123123",
};

function foo(one: number, two: number): number {
  return one * two;
}

function foo1(a: string, b: string): string {
  return a + b;
}

function foo2(a: number, b?: number): void {
  if (b) {
    console.log(a, b);
  }
  console.log(a);
}

foo2(12);

interface Post {
  title: string;
  id?: {
    type: number | string;
  };
}

function post(post: Post): number | string | undefined {
  const p = post.id?.type;
  return p;
}

let post1 = post({
  id: {
    type: 11,
  },
  title: "first post",
});

console.log(post1);

export {};
