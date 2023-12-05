//事件中心
class Pubsub{
  constructor(){
    this.subs = {};
  }
  //订阅
  subscribe(eventName,callback){
    (this.subs[eventName] || (this.subs[eventName] = [])).push(callback)
  }

  //发布消息
  publish(eventName,data){
    this.subs[eventName].forEach(callback => callback(data))
  }

  //取消订阅
  unsubscribe(eventName,callback){
    this.subs[eventName] = this.subs[eventName].filter(item=>item!=callback)
  }
}
class Publisher{
  constructor(pubsub){
    this.pubsub = pubsub;
  }
  publish(eventName,data){
    this.pubsub.publish(eventName,data);
  }
}
class Subscriber{
  constructor(pubsub){
    this.pubsub = pubsub;
  }
  subscribe(eventName,callback){
    this.pubsub.subscribe(eventName,callback);
  }
  unsubscribe(eventName,callback){
    this.pubsub.unsubscribe(eventName,callback);
  }
}
function handlerC (args) {
  console.log('handlerC 参数是',args);
}
function handlerD (args) {
  console.log('handlerD 参数是',args);
}
const pubsub = new Pubsub();

const publisher = new Publisher(pubsub);
const subscriber1 = new Subscriber(pubsub);
const subscriber2 = new Subscriber(pubsub);
const subscriber3 = new Subscriber(pubsub);



subscriber1.subscribe('news',handlerC);
subscriber2.subscribe('weather',handlerC);
subscriber3.subscribe('weather',handlerD);


publisher.publish('news', 'Breaking news: the sky is blue');
publisher.publish('weather', 'It will be sunny tomorrow');

subscriber3.unsubscribe('weather',handlerD);
publisher.publish('weather', 'It will be rainy tomorrow');

// 测试通过
debugger
