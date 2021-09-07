
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

      <div class="col-lg-4 mb-4 p-3 listing">
        <div class="card bg-dark">
          <img src="${this.imgUrl}" alt="listing image" class="rounded">
          <div class="card-body shadow">
            <h5 class="d-flex justify-content-between">
              <span class="">${this.year}, ${this.bedrooms} Bed, ${this.bathrooms} Bath</span>
              <span>$${this.price}</span>
            </h5>
            <p>${this.levels} levels</p>
            <p>${this.description}</p>
            <i class="fas fa-trash-alt" onclick="app.housesController.deleteHouse('${this.id}')"></i>
          </div>
          </div>
        </div>
      `
  }
}