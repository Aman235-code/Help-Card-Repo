require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const cardRoute = require("./router/card-route");

app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST",
  // credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/cards", cardRoute);

const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running at port ${port}`);
  });
});
