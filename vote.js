var FIBOS = require("fibos.js");

var FIBOS = require('fibos.js');
// 替换xxxprivatekey 为你的私钥
var fibos = FIBOS({
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider: "5...",
    httpEndpoint: "http://127.0.0.1:8888",
    logger: {
        log: null,
        error: null
    }
});
var ctx = fibos.contractSync("eosio");
// 替换xxxaccount 为你的账号名
var rs = ctx.voteproducerSync("shanglongjie", "", ["eosteaeostea","fibosisfunoo","fibosphoenix"]);
console.log(rs);
