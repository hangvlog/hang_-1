
// 三个对象
// 发布订阅中心
// 维护所有发布者 订阅者
obj = {
  messageName:{
    publisher:[],
    subscriber:[],
    message:[],
  }
}
// 添加发布者/订阅者（messageName,entity）
addPublisher(publisher1,'message1')
addSubscriber(subscriber,'message1')
// 通知所有订阅者（订阅者（messageName））
notify('message1')



// 消息的发布者
// 维护自身名称 发布订阅中心
// 发布消息(messageName,messageContent)消息名称，消息内容）


// 消息订阅者
// 维护自身名称  发布订阅中心
// 订阅消息(messageName,callback)[消息名称和对应的回调]

