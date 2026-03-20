const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/notes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", noteRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
