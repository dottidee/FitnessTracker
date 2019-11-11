const express = require ('express');
//const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');
//DB config
const db_uri = require('./config/keys').MongoURI;

const posts = require('./routes/api/posts');

const app = express();
const port = process.env.PORT || 5000;

    //connect to mongo
    mongoose.connect(db_uri, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('MongoDB COnnected...'))
    .catch(err => console.log(err));

    //Middleware
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
   
    //routes
    app.use('/users', require('./routes/users'));
    app.use('/api/posts', posts);

app.listen(port, (err) => console.log(`Server started on port ${port}`));