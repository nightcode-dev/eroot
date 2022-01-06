var Eroot = require('./eroot.js');
var http = require('http');
var eroot = new Eroot();
eroot.addRout('/','home page',200,'text/plain','GET',false)
eroot.addRout('/a','a is a ftist word',200,'text/plain','GET',false)
eroot.addRout('/b','b is a second word',200,'text/plain','GET',false)
http.createServer((rq,rs) => {
   
   eroot.routing(rq,rs);
   console.log(`req for ${ rq.url } with ${ rq.method } method`)
   
}).listen(3000);