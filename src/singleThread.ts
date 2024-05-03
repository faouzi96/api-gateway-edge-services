import http from "http"

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': "text/plain"
    });
    res.end("Single Threaded App!\n");
});

const PORT = 5050;

server.listen(PORT, ()=>{
    console.log("Single Threaded Server up running on Port:" + PORT);
});