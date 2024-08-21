const url=require('url')
const http=require('http');
const fs=require('fs');
const port=3000;

const server= http.createServer((req,res)=>{

    const req_url=req.url;
    console.log(req_url);

    const parsed_url=url.parse(req_url);
    console.log(parsed_url);

    if(parsed_url.pathname==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(fs.readFileSync('../client/index.html'));
    }
    else if(parsed_url.pathname==='/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(fs.readFileSync('../client/style.css'));
    }

});
server.listen(port,()=>{
   console.log(`server running at http://localhost:${port}`) ;

});