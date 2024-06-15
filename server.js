import { log } from 'console';
import http from 'http'

const server =  http.createServer((req , res  )=> {
    res.writeHead(500 , {'Content-Type' : 'application/json'})
    res.end(JSON.stringify({message : 'eorro' }));
})

const PORT = 8000
server.listen(PORT , ()=>{
    console.log(`ser running on port ${PORT}`);
})