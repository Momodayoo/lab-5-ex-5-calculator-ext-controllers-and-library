const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');



const Calculator = require('./libraries/Calculator');
let myCalc1 = new Calculator()
let myCalc2 = new Calculator()
myCalc1.add(3,44)
myCalc1.add(4,2)
myCalc2.add(66,4)


const calculatorRoutes = require('./routes/calculatorRoutes');

// map the calculator routes to our app

const testRoutes = require('./routes/myTestRoutes');
const express = require('express');
const app = express ();
const port = 3000;

app.use ('/', express.static('public'));

app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument)
    );

app.get('/', (req, res) => {
    res.send ("Hellow World!");
});

// map the calculator routes to our app

app.listen(port, () => {
    console.log(`Example app listening
        at http://localhost:${port}`);

});