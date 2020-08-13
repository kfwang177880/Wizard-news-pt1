const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");

const app = express();

app.use(morgain('dev'));

app.get("/", (req, res) => {
  const posts = postBank.list();
  );

  <!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
        ${posts.map(post => <li> ${/* postdata here */</li>)}
      </ul>
    <body>
  </html>

  res.send(html)
  
});
