const express = require ('express');
//const bodyParser = require ('body-parser');
const cors = require ('cors');
//const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

    //Middleware
    app.use(cors());
   
    //routes
    app.use('/', require('./routes/users'))
    app.use('/users', require('./routes/users'));

    //DB config
    const db = require('./config/keys').MongoURI;

    //connect to mongo
    mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB COnnected...'))
    .catch(err => console.log(err));

    /*/ejs
    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    */

    //Bodypa
    app.use(express.urlencoded({ extended: false }));


const posts = require('./routes/api/posts');

app.use('/api/posts', posts);


app.listen(port, (err) => console.log(`Server started on port ${port}`));