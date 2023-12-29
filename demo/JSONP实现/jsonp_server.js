const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { pathname, query } = url.parse(req.url);
  const params = qs.parse(query);
  debugger

  const data = { name: "shanyue", id: params.id };

  // res.end("你好")
  if (params.fn) {
    str = `${params.fn}(${JSON.stringify(data)})`;
    res.end(str);
  } else {
    res.end();
  }
});

server.listen(10010, () => console.log("Done"));