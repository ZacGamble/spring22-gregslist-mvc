import { House } from "../Models/House.js"
export function getHouseForm(house) {
  house = house || new House({})
  return `
  <form onsubmit="app.housingController.addHouse('${house.id}')">
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="Beds" class="form-label">Beds</label>
        <input type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="beds"
          placeholder="Beds..." required value="${house.bedrooms}">
      </div>
      <div>
        <label for="bathrooms" class="form-label">Baths</label>
        <input type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="Baths"
          placeholder="Baths..." required value="${house.bathrooms}">
      </div>
      <div>
      <label for="levels" class="form-label">Levels</label>
      <input type="text" class="form-control" name="levels" id="levels" aria-describedby="Baths"
        placeholder="Levels..." required value="${house.levels}">
    </div>
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="year" class="form-label">Year</label>
        <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
          placeholder="Year..." min="1950" max="2022" required value="${house.year}">
      </div>
      <div>
        <label for="color" class="form-label">Color</label>
        <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required value="${house.color}">
      </div>
      <div>
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
          placeholder="Price..." min='1' required value="${house.price}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="img" class="form-label">Image Url</label>
        <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="img"
          placeholder="Image Url..." required value="${house.imgUrl}">
      </div>
    </div>
    <div class="mb-3">
      <div>
        <label for="description" class="form-label">Description</label>
        <textarea type="text" class="form-control" name="description" id="description"
          aria-describedby="description" placeholder="Description..." min="5" max="250" required value="${house.description}"> </textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">${house.id ? 'Save' : 'Create'}</button>
    </div>
  </form>`
}