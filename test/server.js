const express = require("express");

const app = express();
const PORT = process.env.PORT || 3333;

app.use("/dist", express.static("./dist"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
