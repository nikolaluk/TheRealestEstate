const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');
const {auth} = require('./middlewares/authMiddleware');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
    .then(() => console.log(`DB connected`))
    .catch(err => console.log(err));

//Config
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(auth);

//Router
app.use(routes);

app.listen(3030, () => {console.log('Server listening on port 3030...');});