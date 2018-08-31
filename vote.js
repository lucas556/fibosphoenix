var FIBOS = require('fibos.js');
// 替换privatekey 为你的私钥
var fibos = FIBOS({
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider: "5...", 
    httpEndpoint: "http://se-rpc.fibos.io:8870",
    logger: {
        log: null,
        error: null
    }
});
var ctx = fibos.contractSync("eosio");
// 替换 你的账号名
var rs = ctx.voteproducerSync("你的账户名", "", ["fibosphoenix"]);
console.log(rs);