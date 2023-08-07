// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const EmployeeModel = require('./models/Employee');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority');
// // Connect to MongoDB
// // const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority';
// // mongoose
// //     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch((err) => console.log(err));

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (password === user.password) {
//                     res.json("Login Success")
//                 } else {
//                     res.json("Password didn't match")
//                 }
//             } else {
//                 res.json("User not registered")
//             }
//         })
// })


// app.post('/register', (req, res) => {
//     EmployeeModel.create(req.body)
//         .then(employees => res.json(employees))
//         .catch(err => res.json(err));
// })

// app.listen(3001, () => {
//     console.log('Server is running...');
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Start the server after successful MongoDB connection
    app.listen(3001, () => {
      console.log('Server is running on port 3001...');
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (password === user.password) {
          res.json("Login Success");
        } else {
          res.json("Password didn't match");
        }
      } else {
        res.json("User not registered");
      }
    })
    .catch(err => {
      console.error('Error during login:', err);
      res.status(500).json("Server error");
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => {
      console.error('Error during registration:', err);
      res.status(500).json("Server error");
    });
});




