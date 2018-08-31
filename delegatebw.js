var FIBOS = require("fibos.js");

var key = {
    "public-key": "FO...", //你的公钥
    "private-key": "5..."  //你的私钥
}

var account = "shanglongjie"; //你的账户名
var receiver = "shanglongjie";
var stakeNET = 10000;    //抵押NET数量
var stakeCPU = 10000;   //抵押CPU数量

var rpc = ["http://se-rpc.fibos.io:8870",
            "http://sl-rpc.fibos.io:8870",
            "http://to-rpc.fibos.io:8870",
            "http://ca-rpc.fibos.io:8870",
            "http://ln-rpc.fibos.io:8870",
            "http://va-rpc.fibos.io:8870",
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var config = {
    chainId:"6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    keyProvider:key["private-key"],
    httpEndpoint:rpc[getRandomInt(0, 5)],
    expireInSeconds: 60,
    broadcast: true,
    verbose: false,
    sign: true
}

var client = FIBOS(config);

client.transaction(tr => {
    tr.delegatebw({
      from: account,
      receiver: receiver,
      stake_net_quantity: stakeNET.toFixed(4) + ' FO@eosio',
      stake_cpu_quantity: stakeCPU.toFixed(4) + ' FO@eosio',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });