import express from "express";
import cors from "cors";

import nameRoute from "./src/name";

const app = express();
const port = 3001;

app.use(cors());

app.use("/name", nameRoute);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
