const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

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

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.json("Login Success")
                } else {
                    res.json("Password didn't match")
                }
            } else {
                res.json("User not registered")
            }
        })
})


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
})

app.listen(3001, () => {
    console.log('Server is running...');
});





