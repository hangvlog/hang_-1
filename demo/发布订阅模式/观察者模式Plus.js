class Subject {
  constructor() {
    this.observers = {
      "test01": {
        value: 11,
        observerList: []
      },
      "test02": {
        value: 12,
        observerList: []
      },
    };
  }
  addObserver (observer, message) {
    this.observers[message].observerList.push(observer);
  }
  removeObserver (observer, message) {
    // const index = this.observers[message].observerList.findIndex(o => o.name === observer.name);
    // this.observers[message].observerList.splice(index, 1);
    this.observers[message].observerList = this.observers[message].observerList.filter(item => item.name != observer.name);
  }
  notifyObservers (message) {
    this.observers[message].observerList.forEach(item => item.update(this.observers[message].value));
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  update (value) {
    console.log(`${this.name} 收到通知，更新值 ${value}`);
  }
}
function test01(){
  let subject = new Subject();

  let observer1 = new Observer("observer1");
  let observer2 = new Observer("observer2");
  subject.addObserver(observer1, "test01");
  subject.addObserver(observer2, "test01");

  subject.notifyObservers("test01");
  // subject.notifyObservers("test02");
  subject.removeObserver(observer1, "test01");
  // console.log(subject.observers["test01"].observerList);
  subject.notifyObservers("test01");

}
test01()