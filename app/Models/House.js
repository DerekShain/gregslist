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
      this.number = houseData.number
    }

  get CardTemplate(){
      return /*html*/`

      <div class="col-lg-3 mb-4 listing">
        <div class="card">
          <img src="${this.img}" alt="listing image" class="rounded">
          <div class="card-body shadow">
            <h5 class="d-flex justify-content-between">
              <span class="shadow">Year - ${this.year}- Rooms - ${this.rooms}</span>
              <span>$ ${this.price}</span>
            </h5>
            <p>${this.size} sq.ft</p>
            <p>${this.garage} car garage</p>
            <p>${this.description}</p>
            <p>Call ${this.number}</p>
          </div>
          </div>
        </div>
      `
  }
}