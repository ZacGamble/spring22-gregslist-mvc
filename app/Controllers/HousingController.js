import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housingService } from "../Services/HousingService.js";
import { Pop } from "../Utils/Pop.js";


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

async function _getAllHousing(){
  try {
    await housingService.getAllHousing()
  } catch (error) {
      Pop.toast(error.message, 'error')
  }
}
export class HousingController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _getAllHousing()
  }

  async handleSubmit(id) {
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
        levels: formElem.levels.value,
        price: formElem.price.value,
        year: formElem.year.value,
        imgUrl: formElem.imgUrl.value,
        description: formElem.description.value
      }
      // await housingService.addHouse(formData)
      if(id == 'undefined'){
        await housingService.addHouse(formData)
      }else{
        formData.id = id
        await housingService.editHouse(formData)
      }
      
    } catch (error) {
     console.error( "Something went wrong :/", error)
      // show this to the user
    }
  }
  async removeHouse(id){
    try {
      if (await Pop.confirm()) {
        await housingService.removeHouse(id)        
      }
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
  openEditor(id) {
    let house = ProxyState.houses.find(h => h.id == id)
    if (!house) {
      Pop.toast("Invalid house Id", 'error')
      return
    }

    document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm(house)
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).show()
  }
  drawHouses() {
    _drawHouses()
  }
}