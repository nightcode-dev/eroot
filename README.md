# welcome to eroot repository 
welcome to my github page and eroot repository 
eroot is a mini router to help you to make your router with a few time and easier than other modules, frameworks and libraries 
## how to install it 
1. in frist you need to clone this repository with github cli
`git clone https://github.com/nightcode-dev/eroot`
2. you need to require it in your project so write this code in your js file 
`var eroot = require('./eroot/eroot.js')`
>dont forget you should to clone this repository in The same path

now you install my repository
## how to use it?
1. create a new object from eroot class:
`var router = new Eroot();`
2. if you want to add a path to your router use addRout method 
 `router.addRout(yourpath,yourdata,yourStatusCode,yourContentType,isItPath)`
 - yourpath : its your rout for example `/` 
 - yourdata : its your data to show for this rout you add
- yourStatusCode : its a statusCode for your selected rout
- yourContentType : its a content type of your data show in header of request and need for rendering
- isItPath : its a true or false varible to Specifies a data parameter you entered is a path to serve or no 
3. use routing method to routing your webserver very sweet and easy 
`http.createServer(rq,rs) => {
router.routing(rq,rs);
})`
> dont forget to passing rq and rs to method

now you use my module very easy 
have fun ;)




