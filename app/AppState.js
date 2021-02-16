import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  money = 0
  quarter = .25
  snacks = {
    pepsi:{
      name: "Pepsi",
      cost: 1.25
    }
    ,mountaindew:{
      name: "Mountain Dew",
      cost: 2
    }
    ,sprite:{
      name: "Sprite",
      cost: 3.75
    }
    ,rootbeer:{
      name: "Rootbeer",
      cost: 2.50
    }
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
