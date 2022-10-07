const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    if(req.url === "/")
    {
        res.setHeader("content-type","application/html");
        res.write("src  ");
        res.write("public  ");
        res.end("data  ");
    }

    else if(req.url === "/src")
    {
        const data = fs.readFileSync('./src.txt','utf-8');
        res.end(data);
    }

    else if(req.url === "/public")
    {
        const data = fs.readFileSync('./public.txt','utf-8');
        res.end(data);
    }

    else if(req.url === "/data")
    {
        const data = fs.readFileSync('./data.txt','utf-8');
        res.end(data);
    }
});

server.listen(8000);