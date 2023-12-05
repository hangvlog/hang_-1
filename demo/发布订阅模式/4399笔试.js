// 这是一个使用JavaScript实现的股票报价通知系统的示例代码：发布订阅模式

class StockMarket {
  constructor() {
    this.stocks = {};
    // {股票名称，回掉函数列表}
  }
  register (stockSymbol, callback) {
    if (!this.stocks[stockSymbol]) {
      this.stocks[stockSymbol] = [];
    }
    this.stocks[stockSymbol].push(callback);
  }
  unregister (stockSymbol, callback) {
    if (this.stocks[stockSymbol]) {
      this.stocks[stockSymbol] = this.stocks[stockSymbol].filter(cb => cb !== callback);
    }
  }
  notify (stockSymbol, newPrice) {
    if (this.stocks[stockSymbol]) {
      this.stocks[stockSymbol].forEach(callback => callback(stockSymbol, newPrice));
    }
  }
}

const stockMarket = new StockMarket();
function priceUpdateCallback (stockSymbol, newPrice) {
  console.log(`Received update for ${stockSymbol}: $${newPrice}`);
}
// 注册股票报价更新
stockMarket.register('AAPL', priceUpdateCallback);
// 通知股票报价更新
stockMarket.notify('AAPL', 150);
stockMarket.notify('AAPL', 180);
// 输出：Received update for AAPL: $150
// 取消注册股票报价更新
stockMarket.unregister('AAPL', priceUpdateCallback);
// 再次通知股票报价更新
stockMarket.notify('AAPL', 155);
// 无输出，因为已取消注册


// 这个`StockMarket`类使用一个对象`stocks`来存储股票符号和对应的回调函数列表。
// `register`方法用于添加新的回调函数，`unregister`方法用于移除已注册的回调函数，
// `notify`方法用于调用所有已注册的回调函数并传递新的股票价格。