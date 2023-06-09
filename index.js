// function to take input and count vowels and return

const express = require("express");
const app = express();
app.use(express.json());

let countVowel = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  string = string.toLowerCase();
  count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
};

let add = () => {};
let subtract = () => {};
let multiply = () => {};
let divide = () => {};

app.get("/countvowels", (req, res) => {
  let string = req.body.abc; //validate here further
  let vowels = countVowel(string);
  res.send({ vow: vowels });
});

app.get("/add", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  const num3 = Number(req.query.num3);
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    res.status(400).send({ error: "please enter a valid number" });
    console.log("enter valid number");
  } else {
    const sum = num1 + num2 + num3;
    res.status(200).send({ sum });
  }
});
app.get("/subtract", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.send({ error: "please enter a valid number" });
    console.log("enter valid number");
  } else {
    const ans = num1 - num2;
    res.send({ ans });
  }
});
app.get("/multiply", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    res.send({ error: "please enter a valid number" });
    console.log("enter valid number");
  } else {
    const ans = num1 * num2;
    res.send({ ans });
  }
});
app.get("/divide", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2) || num2 == 0) {
    res.send({ error: "please enter a valid number" });
    console.log("enter valid number");
  } else {
    const ans = num1 / num2;
    res.send({ ans });
  }
});
app.get("/addlist", (req, res) => {
  const numbers = req.query.number;
  const num = numbers.split(",");
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  res.send({ sum });
});
app.get("/multiplylist", (req, res) => {
  const numbers = req.query.number;
  const num = numbers.split(",");
  let sum = 1;
  for (let i = 0; i < num.length; i++) {
    sum *= Number(num[i]);
  }
  res.send({ sum });
});
const port = 3001;
const ip = "localhost";
app.listen(port, ip, () => {
  console.log("started listenning");
});

/*
Payload/Body =>
{
  "username" : "vivek"
  "pass" : "123"
}
GET, POST, PUT, PATCH, DELETE, ...

create read update delete -> CURD operation
read -> GET, POST
create -> POST
update -> PUT(crate or replace) and PATCH(update)
delete -> 

idempotent (google form submission, taking care for operation can be done only once)
non idempotent

Security -
HTTP vs HTTPS


status code
2** -> 200, 201, ... successful scenario
4** -> client side issues
400 -> bad request
404 -> page not found

5** ->server side errors
500 -> internal server error

Authentication vs Authorization

*/
