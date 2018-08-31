var FIBOS = require('fibos.js');
var config = {
    "chainId": "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    "producer-name": "fibosphoenix",
    "public-key": "FO...",
    "private-key": "5...",
    "httpEndpoint": "http://139.198.17.113:8888",
    "url": "http://fophoenix.com"
};

var fibos = FIBOS({
    chainId: config["chainId"],
    keyProvider: config["private-key"],
    httpEndpoint: config["httpEndpoint"],
    logger: {
        log: null,
        error: null
    }
});

var ctx = fibos.contractSync("eosio");

ctx.regproducerSync(config["producer-name"], config["public-key"], config["url"], 1);
