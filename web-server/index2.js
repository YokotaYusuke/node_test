const express = require('express')
const path = require("path");
const app = express();

app.use(express.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, "public")));

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if(answer === "2") {
    // res.send("正解！");
    res.redirect("/correct.html");
  } else {
    // res.send("不正解！");
    res.redirect("/wrong.html");
  }
  res.send(answer);
})

app.get('/api/v1/users', function (req, res) {
  res.send('about');
})

app.listen(3000, function() {
  console.log("I am running!");
});
