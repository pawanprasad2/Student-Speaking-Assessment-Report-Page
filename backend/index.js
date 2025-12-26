const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const reportRouter=require('./routes/report.route')

app.use(
  cors({
    origin: "*",
  })
);

app.use('/api/report',reportRouter)

app.listen(port, () =>
  console.log(`The server is running on the http://localhost:${port}`)
);
