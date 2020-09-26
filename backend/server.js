const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = process.env.LOCAL_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }, () => {
  console.log("MongoDB database connection established successfully.");
});

const cardsRouter = require('./routes/cards');
app.use('/cards', cardsRouter)

app.listen(PORT, () => {
  console.log(`App is now listening for request on http://localhost:${PORT}`);
});
