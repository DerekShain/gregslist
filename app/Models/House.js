import {generateId} from "../Utils/generateId.js"

export class House{
    constructor(houseData){
      this.id = houseData.id || generateId()
      this.year = houseData.year
      this.size = houseData.size
      this.rooms = houseData.rooms
      this.garage = houseData.garage
      this.price = houseData.price
      this.description = houseData.description
      this.img = houseData.img
    }

  get CardTemplate(){
      return /*html*/`

      <div class="col-lg-3 mb-4 listing">
        <div class="card">
          <img src="${this.img}" alt="listing image" class="rounded">
          <div class="card-body">
            <h5 class="d-flex justify-content-between">
              <span class="shadow">Year - ${this.year}- Rooms - ${this.rooms}</span>
              <span>${this.price}</span>
            </h5>
            <p>${this.description}</p>
          </div>
          </div>
        </div>
      `
  }
}