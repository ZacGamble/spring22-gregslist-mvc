import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housingService } from "../Services/HousingService.js";


function _drawHouses() {
  let houseCardsTemplate = ''
  ProxyState.houses.forEach(house => houseCardsTemplate += house.CardTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousingController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _drawHouses()
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
     /**  @type HTMLFormElement */
      // @ts-ignore
      const formElem = event.target
      const formData = {
        // TODO YOUR JOB NOT MINE
        id: formElem.id,
        bedrooms: formElem.bedrooms.value,
        bathrooms: formElem.bathrooms.value,
        footage: formElem.footage.value,
        price: formElem.price.value,
        year: formElem.year.value,
        color: formElem.color.value,
        img: formElem.img.value
      }
      housingService.addHouse(formData)
      
    } catch (error) {
     console.error( "Something went wrong :/", error)
      // show this to the user
    }
  }

  drawHouses() {
    _drawHouses()
  }
}