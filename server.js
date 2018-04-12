const express = require("express");
const request = require("request");

const url = "https://medium.com/@eesh.t/latest?format=json";

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Eesh" });
});

app.get("/api/medium", (req, res) => {
  request.get({ url: url }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      body = body.replace("])}while(1);</x>", "");
      // const post = body.payload.references.Post;
      res.send(body);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
