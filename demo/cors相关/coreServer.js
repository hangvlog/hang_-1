const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  console.log(req.getHeaders());
  debugger
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end("cors测试")
  // const { pathname, query } = url.parse(req.url);
  // const params = qs.parse(query);
  // debugger

  // const data = { name: "shanyue", id: params.id };

  // // res.end("你好")
  // if (params.callback) {
  //   str = `${params.callback}(${JSON.stringify(data)})`;
  //   res.end(str);
  // } else {
  //   res.end();
  // }
});

server.listen(10010, () => console.log("Done"));