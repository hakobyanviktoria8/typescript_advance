enum StatusCode {
  success,
  process,
  failed,
}

const res = {
  message: "Hello world",
  statusCode: StatusCode.success,
};

enum StatusCode {
  Success = "success",
  Faild = "faild",
}

async function getPost(req: { postId: number; status: StatusCode }): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
  }[]
> {
  const res = await fetch("/post", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}

// one vareble multiplay value
enum UserStatus {
  OnLine = "onLine",
  OffLine = "offLine",
}

type User = {
  id: number | string;
  name: string;
  age: number;
  status: UserStatus;
  skkills: [string, number, string, number];
};

const user: User = {
  id: "1",
  name: "Ann",
  age: 23,
  status: UserStatus.OnLine,
  skkills: ["js", 8, "css", 9],
};

console.log(user);
