const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

/* --- app setup --- */
const app = express();
app.use(cors());
app.use(express.json());

/* --- routes --- */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));

app.get('/',(req,res)=>{
    return res.json({'status':'ok'})

})

/* --- db & server --- */
const PORT = process.env.PORT || 5001;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch(err => console.error(err));
