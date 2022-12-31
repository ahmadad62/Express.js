const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {  // get the index root in port 3000 and send some information to the client side
    // res.send('hi');
    // res.status(404);
    // res.json({ massage: 'success' });
    res.render('index.ejs', { text: "World" });
    console.log(text)
})

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000) // listen on port 3000