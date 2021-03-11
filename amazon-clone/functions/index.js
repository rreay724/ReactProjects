const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { response } = require("express");
dotenv.config();

const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);

// To start this run: firebase emulators:start

// any dependencies installed need to be installed while in functions folder in terminal

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved, POW!!! For this amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201 = ok payment created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

//  example endpoint
// http://localhost:5001/clone-2d1c5/us-central1/api
