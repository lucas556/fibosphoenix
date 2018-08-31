var http = require('http');
var httpClient = new http.Client();
var httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";
var account = "fibosphoenix"
var pubkey = "FO..." //YOUR PUB KEY
var rep = httpClient.post(httpServerHost, {
                        json: {
                                        account: account,
                                        pubkey: pubkey
                        }
}).json()
console.log(rep);
