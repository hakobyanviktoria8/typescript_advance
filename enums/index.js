"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 0] = "success";
    StatusCode[StatusCode["process"] = 1] = "process";
    StatusCode[StatusCode["failed"] = 2] = "failed";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Hello world",
    statusCode: StatusCode.success,
};
(function (StatusCode) {
    StatusCode["Success"] = "success";
    StatusCode["Faild"] = "faild";
})(StatusCode || (StatusCode = {}));
function getPost(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch("/post", {
            method: "POST",
            body: JSON.stringify(req),
        });
        const data = yield res.json();
        return data;
    });
}
var UserStatus;
(function (UserStatus) {
    UserStatus["OnLine"] = "onLine";
    UserStatus["OffLine"] = "offLine";
})(UserStatus || (UserStatus = {}));
const user = {
    id: "1",
    name: "Ann",
    age: 23,
    status: UserStatus.OnLine,
    skkills: ["js", 8, "css", 9],
};
console.log(user);
