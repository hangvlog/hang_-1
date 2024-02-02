function parse (url) {
  // 一、夹杂在 ? 与 # 之前的字符就是 qs，使用 /\?([^/?#:]+)#?/ 正则来抽取
  // 使用正则从 URL 中解析出 querystring
  // 二、通过 Optional Chain 来避免空值错误
  const queryString = url.match(/\?([^/?#:]+)#?/)?.[1];

  if (!queryString) {
    return {};
  }
  debugger

  queryObj = queryString.split("&").reduce((params, block) => {
    // 三、如果未赋值，则默认为空字符串
    const [_k, _v = ""] = block.split("=");
    // 四、通过 decodeURIComponent 来转义字符，切记不可出现在最开头，以防 ?tag=test&title=1%2B1%3D2 出错
    const k = decodeURIComponent(_k);
    const v = decodeURIComponent(_v);

    if (params[k] !== undefined) {
      // 处理 key 出现多次的情况，设置为数组
      params[k] = [].concat(params[k], v);
    } else {
      params[k] = v;
    }
    return params;
  }, {});
  return queryObj;
}
function test01 () {
  // {name: '山月', a: [3, 4]}
  let url1 = "https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3&a=4";
  console.log(parse(url1));

  // {name: '山月', a: 3}
  let url2 = "https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3#hash";
  console.log(parse(url2));

  // {name: '1+1=2'}
  let url3 = "https://shanyue.tech?name=1%2B1%3D2";
  console.log(parse(url3));
}
test01()
debugger

