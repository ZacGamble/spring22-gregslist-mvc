import { generateId } from "../Utils/generateId.js"

export class House {
  constructor({ id, bedrooms, bathrooms, levels, year, description, color, imgUrl, price}) {
    // handle out descriptions first
    this.id = id 
    this.bedrooms = bedrooms || ''
    this.bathrooms = bathrooms || ''
    this.levels = levels || ''
    this.price = price || 0
    this.year = year || ''
    this.description = description || ''
    this.imgUrl = imgUrl || ''
  }

  get CardTemplate() {
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img style="max-height: 500vh;" class="w-100 rounded-top" src='${this.imgUrl}' alt="a house image">
        <div class="p-2 mdi mdi-pen bg-light edit" onclick="app.housingController.handleSubmit('${this.id}')"></div>
        <div class="p-3 d-flex flex-column">
          <p class="text-center uppercase"><b>${this.bedrooms} bed - ${this.bathrooms} bath - ${this.levels} levels - built in ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
          </div>
          <i class="mdi mdi-delete selectable text-light bg-danger on-hover" title='delete' onclick="app.housingController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }


}