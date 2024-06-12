const express = require('express');
const app = express();
const port = 3000;

// Rute til at tilføje to tal sammen
app.get('/add', (req, res) => {
  // Modtag de to tal fra query parametrene
  const { num1, num2 } = req.query;

  // Konverter de modtagne tal til tal
  const num1Int = parseInt(num1);
  const num2Int = parseInt(num2);

  // Hvis nogen af tallene ikke er gyldige tal, returner en fejlbesked
  if (isNaN(num1Int) || isNaN(num2Int)) {
    return res.status(400).send('Invalid parameters. Please provide two valid numbers.');
  }

  // Beregn summen af de to tal
  const sum = num1Int + num2Int;

  // Send summen som svar
  res.send(`Sum of ${num1Int} and ${num2Int} is ${sum}.`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
