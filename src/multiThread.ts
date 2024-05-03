import cluster from 'cluster';
import express from 'express';
import { cpus } from 'os';

const numCPUs = cpus().length;

if(cluster.isPrimary){
    console.log(`Master ${process.pid} is running!`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code ,signal)=>{
      console.log(`Worker ${worker.process.pid} has died`);
    });
} else {

    const app = express();
    app.get("/", (req, res)=>{
        res.status(200).send("MultiThreaded App is running!");
    });
    
    const PORT = 5050;
    
    app.listen(PORT, ()=>{
        console.log("MultiThreaded Server is up running on PORT: "+ PORT);
    });
}