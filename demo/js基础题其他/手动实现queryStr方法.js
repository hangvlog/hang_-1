const myQueryStr = (url) => {


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