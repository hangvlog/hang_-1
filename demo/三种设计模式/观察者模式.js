//被观察者对象
class Person {
  constructor() {
    this.dataObservers = {
      //被观察的属性 可以有多个
      'level': {
        data: 10,
        observer: []
      }
    };
  }
  //注册观察者
  registerObserver (observer, health) {
    (this.dataObservers[health].observer || (this.dataObservers[health].observer = [])).push(observer);
  }
  //移除观察者
  removeObserver (observer, health) {
    this.dataObservers[health].observer.filter(item => item !== observer);
  }
  //通知观察者
  notifyObservers (health,args) {
    this.dataObservers[health].observer.forEach(item => item.update(args));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update (data) {
    console.log(`观察者对象${this.name}观察到了等级变化，等级是${data.data}`)
  }
}

const person = new Person();

const levelUp = new Observer('levelUp');
const levelDown = new Observer('levelDown');

//添加观察者对象
person.registerObserver(levelUp, 'level');
person.registerObserver(levelDown, 'level');

//自身状态改变，派发更新
person.notifyObservers("level",{data:'新的100'})
debugger