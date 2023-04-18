// interface TypeSuccess {
//   status: "success"
// }
// interface TypeFailed {
//   status: "failed"
// }

// const obj: TypeSuccess | TypeFailed = {
//   status: "success"
// }
enum StatusType {
  Success = "success",
  Failed = "failed",
}

interface TypeProp {
  status: StatusType;
}
