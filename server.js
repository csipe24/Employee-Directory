const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");

const publicP = path.join(__dirname, 'build');
app.use(express.static(publicP));

app.get('*', (req,res) =>{
  res.sendFile(path.join(publicP, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
});