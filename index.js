const express = require('express');
const app = express();
const db = require('./db');

db.connect();

app.use(express.json());

app.use('/products', require('./routes/productsRoutes'));
app.use('/users', require('./routes/usersRoutes'));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('something went wrong');
});

app.listen(3000, () => {
    console.log('listen to port', 3000);
});