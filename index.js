
const calculatorRoutes = require('./routes/calculatorRoutes');

// map the calculator routes to our app

const testRoutes = require('./routes/myTestRoutes');
const express = require('express');
const app = express ();
const port = 3000;

app.use ('/', express.static('public'));

app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

app.get('/', (req, res) => {
    res.send ("Hellow World!");
});

// map the calculator routes to our app

app.listen(port, () => {
    console.log(`Example app listening
        at http://localhost:${port}`);

});