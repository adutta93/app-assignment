const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRouter');

const app = express();


// middlewares
app.use(express.json());
app.use(morgan('dev'));
// app.use(express.static(`${__dirname}/public`));


// ROUTS
app.use('/api/v1/users', userRouter);



// server
const port = 3000;
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
});