var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to MongoDB Atlas cluster
mongoose.connect('mongodb+srv://Manviii:q6GsPAO1LDINWyNp@cluster0.7h5naax.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a new Express app
const app = express();

function CompletePayment(payment) {
    // mock implementation of a payment process
    return "success";
  }


// Define the User schema
const User = mongoose.model('User', {
    name: String,
    age: Number,
    batch: String,
    payment: Object
  })
  
  app.use(bodyParser.json())
  
  // Handle POST requests to the /users endpoint
  router.post('/submit', async (req, res) => {
    // Get the user data from the request body
    const { name, age, batch, payment } = req.body
  
    // Do some basic validation
    if (!name || !age || !batch || !payment) {
      // res.redirect('/')
      return res.status(400).send({ error: 'All fields are required' })
    }
    if (age < 18 || age > 65) {
      
      return res.status(400).send({ error: 'Age must be between 18 and 65' })
    }
  
    try {
      // Save the user to the database
      const user = await User.create({ name, age, batch, payment })
  
      // Call the mock CompletePayment() function
      const paymentResult = await CompletePayment(payment)
  
      // Return the payment result to the front-end
      res.send({ paymentResult })
    } catch (error) {
      // Handle any errors when saving or calling the mock function
      res.status(500).send({ error: 'Error saving user to database or completing payment' })
    }
  })
  

module.exports = router;
