const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//mongoose.connect('mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority');
// Connect to MongoDB
const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));



  
app.post('/register', (req, res) => {
})

app.listen(3001, () => {
    console.log('Server is running...');
});





