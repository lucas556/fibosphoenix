var FIBOS = require("fibos.js");
var prikey = FIBOS.modules.ecc.randomKeySync(); //私钥
var pubkey = FIBOS.modules.ecc.privateToPublic(prikey); //公钥
console.log("公钥: %s\n私钥: %s",pubkey,prikey)
