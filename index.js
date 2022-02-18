import express from 'express';
import bodyParser from 'body-parser'

//importing Users Routes
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;


//Post's Request Middleware Init
app.use(bodyParser.json());

app.use('/users', usersRoutes)
app.get('/',(req,res)=> res.send("Home Page"))

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));