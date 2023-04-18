"use strict";
// interface TypeSuccess {
//   status: "success"
// }
// interface TypeFailed {
//   status: "failed"
// }
// const obj: TypeSuccess | TypeFailed = {
//   status: "success"
// }
var StatusType;
(function (StatusType) {
    StatusType["Success"] = "success";
    StatusType["Failed"] = "failed";
})(StatusType || (StatusType = {}));
