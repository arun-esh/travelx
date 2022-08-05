const path = require(`path`);
const express = require(`express`);
const morgan = require(`morgan`);
const viewRouter = require(`./routes/viewsRoutes`);

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

if (process.env.NODE_ENV === `development`) {
  app.use(morgan(`dev`));
}

// Router

const productRouter = require(`./routes/productRoutes`);
const userRouter = require(`./routes/userRoutes`);

app.use('/', viewRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;
