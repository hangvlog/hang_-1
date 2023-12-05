let Vue

class Store {
  constructor(options) {
    // 保存mutations 和 actions
    this._mutations = options.mutations
    this._actions = options.actions
    this.$options = options;
    const state = this.$options.state || {};

    this._wrapedGetters = options.getters;
    this.getters = {}
    const computed = {}
    const store = this;

    Object.keys(this._wrapedGetters).forEach((key) => {
      const fn = this._wrapedGetters[key];
      computed[key] = function () {
        return fn(store.state)
      }
      Object.defineProperty(store.getters, key, {
        get: function () {
          return store._vm[key]
        }
      })
    });
    this._vm = new Vue({
      data: {
        $$state: state
      },
      computed
    })
    // Vue.util.defineReactive(this, "$$state", state);
    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  commit (type, payload) {
    console.log(this)
    const entry = this._mutations[type];
    if (entry) {
      entry(this.state, payload)
    }
  }

  dispatch (type, payload) {
    const entry = this._actions[type];
    console.log(`entry`, entry);
    if (entry) {
      entry(this, payload);
    }
  }

  get state () {
    //  return this.$$state
    return this._vm._data.$$state

  }
  set state (v) {
    console.error('please use replaceState to reset state');
  }
}


function install (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      // 此时，上下文已经是组件实例了
      // 如果this是根实例，则它的$options里面会有store实例
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default { Store, install };

