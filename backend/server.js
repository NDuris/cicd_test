const express = require('express');
const app = express();
const port = 3000;

// Route to add two numbers together
app.get('/add', (req, res) => {
  // Extract the two numbers from the query parameters
  const { num1, num2 } = req.query;

  // Convert the received numbers to integers
  const num1Int = parseInt(num1);
  const num2Int = parseInt(num2);

  // If either of the numbers are not valid integers, return an error message
  if (isNaN(num1Int) || isNaN(num2Int)) {
    return res.status(400).send('Invalid parameters. Please provide two valid numbers.');
  }

  // Calculate the sum of the two numbers
  const sum = num1Int + num2Int;

  // Send the sum as a text response
  res.send(`Sum of ${num1Int} and ${num2Int} is ${sum}.`);
});

// Rute til /api-stien
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
