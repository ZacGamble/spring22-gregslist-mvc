import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import ('./Models/House').House[]} */
  houses = [
    new House({
      id: '',
      bedrooms: 3,
      bathrooms: 2,
      levels: 2,
      price: 490000,
      year: 1983,
      description: "Rustic chic will impress",
      color: 'red',
      imgUrl: 'https://i.pinimg.com/originals/03/e7/7c/03e77cf89d93a55e6ca25dd99c80eeb8.jpg'
    })
  ]
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      id: '',
      title: 'Shop Manager',
      wage: '15 hourly',
      remote: 'false',
      snacks: 'pizza party',
      education: 'PhD'
    })
  ]
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    }),
    new Car({
      color: 'black',
      description: 'Zippy Electric boi',
      img: 'https://blog.vipautoaccessories.com/wp-content/uploads/2020/10/hero-1.jpg',
      make: 'Tesla',
      model: '3',
      mileage: 37000,
      price: 55000,
      year: 2020
    })
  ]
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
