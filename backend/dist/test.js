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
const fetchh = require("node-fetch");
const getIp = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("we are asking for ip address");
    try {
        const res = yield fetchh('http://localhost:5000');
        const data = yield res.text();
        console.log("data we got", data);
    }
    catch (err) {
        console.log(err);
    }
    //return res
});
try {
    getIp();
}
catch (_a) {
    console.log("wer are error in takiing input");
}
