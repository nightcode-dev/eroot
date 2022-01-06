var fs = require('fs');
var pt = require('path')
class Eroot {
   constructor(){
      this.routs = []
   }
   addRout(path,data,stat,type,method,isPath){
      var obj = {
       url:`${path}`,
       data:`${data}`,
       stat:stat,
       type:`${type}`,
       method:`${method}`,
       isPath:isPath
      }
      this.routs.push(obj);     
   }
   
   routing(rq,rs){
           var routs = this.routs;
           routs.forEach((rout) => {
              if(rq.url == rout.url && rq.method == rout.method){
                 if(rout.isPath === false){
                    if(rout.stat == null){
                       if(rout.type == null){
                          rs.writeHead(200,{'Content-Type':'text/plain'});
                          rs.end(rout.data);
                       }else{
                          rs.writeHead(200,{'Content-Type':`${rout.type}`});
                          rs.end(rout.data);
                       } 
                    }else{
                       if(rout.type == null){
                          rs.writeHead(rout.stat,{'Content-Type':'text/plain'});
                          rs.end(rout.data);
                       }else{
                          rs.writeHead(rout.stat,{'Content-Type':`${rout.type}`});
                          rs.end(rout.data);
                       }
                    }
                 }else{
                    if(rout.stat == null){
                       if(rout.type == null){
                          rs.writeHead(200,{'Content-Type':'text/plain'});
                          fs.readFile(rout.data,'utf8',(err,data) => {
                            rs.end(data)
                          })
                       }else{
                          rs.writeHead(200,{'Content-Type':`${rout.type}`});
                          fs.readFile(rout.data,'utf8',(err,data) => {
                            rs.end(data)
                          })
                       } 
                    }else{
                       if(rout.type == null){
                          rs.writeHead(rout.stat,{'Content-Type':'text/plain'});
                          fs.readFile(rout.data,'utf8',(err,data) => {
                            rs.end(data)
                          })
                       }else{
                          rs.writeHead(rout.stat,{'Content-Type':`${rout.type}`});
                          fs.readFile(rout.data,'utf8',(err,data) => {
                            rs.end(data)
                          })
                       }
                    }
                 }
                
              }
              
           })

   }
}
   
module.exports = Eroot