const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true, // deprecated in mongoose v4
    // useFindAndModify: false, // deprecated  more info: https://mongoosejs.com/docs/deprecations.html
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 9090;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

