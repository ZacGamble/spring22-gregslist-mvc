import { generateId } from "../Utils/generateId.js"

export class House {
  constructor({ id = generateId(), bedrooms, bathrooms, footage, year, condition, color, img, price}) {
    // handle out conditions first
    if (!bedrooms || !footage || !price) {
      throw new Error('You can\'t add a house without bedrooms, footage, and price')
    }
    // handle out conditions first
    if (price <= 0) {
      throw new Error('Set a valid price')
    }
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.footage = footage
    this.price = price
    this.year = year || ''
    this.condition = condition || ''
    this.color = color || ''
    this.img = img || ''
  }

  get CardTemplate() {
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="a house image">
        <div class="p-3 d-flex flex-column">
          <p class="text-center uppercase"><b>${this.bedrooms} bed - ${this.bathrooms} bath - ${this.footage} square feet - built in ${this.year}</b></p>
          <p class="m-0">${this.condition}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }


}