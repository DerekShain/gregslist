
export class House{
    constructor(houseData){
      this.id = houseData.id
      this.bedrooms = houseData.bedrooms
      this.bathrooms = houseData.bathrooms
      this.levels = houseData.levels
      this.year = houseData.year
      this.price = houseData.price
      this.imgUrl = houseData.imgUrl
      this.description = houseData.description
    }

  get CardTemplate(){
      return /*html*/`

      <div class="col-lg-3 mb-4 listing">
        <div class="card">
          <img src="${this.imgUrl}" alt="listing image" class="rounded">
          <div class="card-body shadow">
            <h5 class="d-flex justify-content-between">
              <span class="shadow">Year - ${this.year}, ${this.bedrooms} Beds, ${this.bathrooms} Baths</span>
              <span>$ ${this.price}</span>
            </h5>
            <p>${this.levels} levels</p>
            <p>${this.description}</p>
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
          </div>
          </div>
        </div>
      `
  }
}