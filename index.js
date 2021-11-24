import express from 'express';
import handleEquationRequest from './utils';

var app = express();

app.use(express.json());

app.get("/", ()=>{
    
})

app.post("/", (req, res)=>{
    let lean_code = handleEquationRequest(req.body);
    
});

app.listen(3000);