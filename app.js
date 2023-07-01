const path = require(`path`);
const express = require(`express`);
const serverless = require('serverless-http');
const morgan = require(`morgan`);
const viewRouter = require(`./routes/viewsRoutes`);
const globalErrorHandler = require(`./controllers/errorController`);
const cookieParser = require(`cookie-parser`);
const appError = require(`./utils/appError`);

// const bodyParser = require("body-parser")

// app.use(bodyParser.urlencoded({ extended: true }));

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === `development`) {
  app.use(morgan(`dev`));
}

app.use(express.json());


app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(`Request Time: 🡒 \t  ${req.requestTime}`);
  // console.log(`🟢 Request Headers:`);
  // console.log(req.headers);
  
  // console.log(`🟢 Request Cookies:`);
  // console.log(req.cookies);
  next();
});






// Router

const productRouter = require(`./routes/productRoutes`);
const userRouter = require(`./routes/userRoutes`);

app.use('/', viewRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

module.exports = app;

/* my emojis:
⦿ 
➔ 
✅
🟢
🍏
☘️
🌿
🔴
🍎
🟡
🡒

👋 
👉 
🫶 
❤️ 
♥️ 
♡ 
🔥 
👈 
🎉 
🤷 
🚀
💥 
🚩
*/
