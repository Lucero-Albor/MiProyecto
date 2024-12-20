//Construccion del backend
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const PORT=5000;
app.listen(PORT, ()=> console.log(`Servidor corrienndo en http://localhost:${PORT}`));
