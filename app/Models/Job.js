import { generateId } from "../Utils/generateId.js"

export class Job {
  constructor({ id = generateId(), title, wage, remote, snacks, education}) {
    // handle out conditions first
    if (!title || !wage) {
      throw new Error('You can\'t add a job without at least a title and wage')
    }
    // handle out conditions first
    if (wage <= 0) {
      throw new Error('Set a valid wage')
    }
    this.id = id
    this.title = title
    this.wage = wage
    this.remote = remote
    this.snacks = snacks
    this.education = education
  }

  get CardTemplate() {
    return `
    <div class="car col-md-4 p-4">
      <div class="bg-white shadow rounded text-center">
        <span>${this.title}</span>
        <div class="p-3 d-flex flex-column">
          <p class="text-center uppercase"><b></b></p>
          <p class="m-0">Expecting at least ${this.education} but we do offer ${this.snacks}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.wage}</p>
          <div class="d-flex align-items-center">
            <p class="m-0"> </p>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }


}