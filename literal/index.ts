interface Fetch {
  url: string;
  method: string;
}

function fetchData(url: string, method: "post" | "get"): Fetch {
  return {
    url: "hhsasasa",
    method: "get",
  };
}
fetchData("hello", "post");

function fetchDataAll(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}

fetchDataAll("hello", "get");
