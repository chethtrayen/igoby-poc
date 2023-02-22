import express from "express";
import cors from "cors";

import nameRoute from "./src/name";
import bodyParser from "body-parser";

const port = 3001;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/name", nameRoute);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
