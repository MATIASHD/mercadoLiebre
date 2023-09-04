const express = require('express');
const path = require('path');

const app = express();
//variable de entorno
const PORT = process.env.PORT || 3001

//Server
app.listen(PORT, () => console.log(`Servidor arriba y en el puerto ${PORT}`));

//Resource
app.use(express.static(path.resolve(__dirname,'./public')));

//Route
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'));
})

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'));
})
app.get('/signin', (req,res) =>{
    res.sendFile(path.join(__dirname,'./views/signin.html'));
})