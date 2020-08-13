const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");

const PORT = 1337
const app = express();

app.use(morgain('dev'));

app.get("/", (req, res) => {
  const posts = postBank.list();

  const html = `<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
    </head>
    <body>
      <ul>
        ${posts.map(post => `<li> ${/* postdata here */}</li>`)}
      </ul>
    <body>
  </html>`

// send response
  res.send(html);
  
  app.listen(PORT, () => (
    console.log('App listning in ort ${PORT}');
  ))
});
