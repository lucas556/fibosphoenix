var http = require('http');
var httpClient = new http.Client();
var httpServerHost = "http://tunnel.fibos.io/1.0/app/token/create";
var account = "fibosphoenix"
var pubkey = "FO6MNoGkrfAnU7a76G6rjV1MwQsrFJKHeqr2bUUii8ymsCqr3bsK"
var rep = httpClient.post(httpServerHost, {
                        json: {
                                        account: account,
                                        pubkey: pubkey
                        }
}).json()
console.log(rep);
