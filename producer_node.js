var fibos = require('fibos');
var fs = require("fs");
var config = {
        "producer-name": "fibosphoenix",
        "public-key": "F...",
        "private-key": "5..."
};

console.notice("正在启动FIBOS name:", config["producer-name"]);
fibos.config_dir = "/fibos/config";
fibos.data_dir = "/fibos/data"

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
        "http-server-address": "0.0.0.0:8888",
        "http-validate-host": false
});

fibos.load("net", {
        "p2p-max-nodes-per-host": 10,
        "p2p-listen-endpoint": "0.0.0.0:9876",
        "p2p-peer-address": "se-p2p.fibos.io:9870",
        "p2p-peer-address": "sl-p2p.fibos.io:9870",
        "p2p-peer-address": "to-p2p.fibos.io:9870",
        "p2p-peer-address": "ca-p2p.fibos.io:9870",
        "p2p-peer-address": "ln-p2p.fibos.io:9870",
        "p2p-peer-address": "va-p2p.fibos.io:9870",
});

fibos.load("producer", {
        'producer-name': config["producer-name"],
        'enable-stale-production': true,
        'signature-provider': config["public-key"] + "=KEY:" + config["private-key"]
});

// 第一次先指定genesis-json, 启动以后, ctrl+c正常关掉.
//fibos.load("chain", {
//    "genesis-json": "/fibos/genesis.json"
//});
// 然后把上面的注释掉, 启动下面的fibos.load('chain').
// 再次启动
fibos.load("chain");
fibos.load("chain_api");


fibos.start();
