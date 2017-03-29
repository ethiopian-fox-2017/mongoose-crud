const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

let books = require("./routes/books");
let customers = require("./routes/customers");
let transactions = require("./routes/transactions");

app.use("/books", books);
app.use("/customers", customers);
app.use("/transactions", transactions);

app.listen(3000, () => {
  console.log(`Server started!`);
})
