const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config');
const app = express();
const port = 5000;

global.__basedir = __dirname;
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

require('./model/user_model');
require('./model/post_model');

app.use(cors());
app.use(express.json());

app.use(require('./route/user_route'));
app.use(require('./route/post_route'));
app.use(require('./route/file_route'));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`listening on port ${port}!`));
