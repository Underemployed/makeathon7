const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./db conn/connection'); 
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = 3000;

const corsOptions = {
    //origin: process.env.FRONTEND_URL,
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

//import routers
const incidentRouter = require('./routes/incidentRouters');
const userRouter = require('./routes/userRouters');
const authRouter = require('./routes/authRouters');
const errorMiddleware = require('./middlewares/errorMiddleware');
const contactRouters = require('./routes/contactRouters');
const adminRouter = require('./routes/adminRouters');
const aiChatRouter = require('./routes/aiChatRouter');

//use Routers
// app.use('/api', authMiddleware); 
app.use('/api/incidents', incidentRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/contact', contactRouters);

app.use('/api/admin', adminRouter);
app.use('/api/ai', aiChatRouter);

app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.post('/hello', (req, res) => {
    res.send('Hello, POST request!');
});

app.use(errorMiddleware)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});