import * as express from 'express'; 

const app = express ()
const port = 3000;          


app.get('/', (request, response) => {                  
    response.send('Hello world');                       
}); 

app.get('/bsm/', (request, response) => {                  
    response.send('Trabalho em equipe, atenção aos detalhes,proatividade,comunicação');                       
}); 

app.get('/bsm/objectives/', (request,response) =>{
    response.send ('Aprender a operar o workbench mySQL e manusear o banco de dados.');
});

app.listen(port, () => {
    console.log(`Server is running at port${port}`);
});