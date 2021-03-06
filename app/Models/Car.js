
export class Car{
    constructor(carData){
        this.id = carData.id
        this.make = carData.make
        this.model = carData.model
        this.year = carData.year
        this.description = carData.description
        this.price = carData.price
        this.imgUrl = carData.imgUrl
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing p-3 ">
        <div class="card bg-dark">
          <img src="${this.imgUrl}" alt="listing image" class="rounded">
          <div class="card-body">
            <h6 class="d-flex justify-content-between">
              <span>${this.make}-${this.model}</span>
              <span>$ ${this.price}</span>
            </h6>
            <p>${this.description}</p>
            <i class="fas fa-trash-alt" onclick="app.carsController.deleteCar('${this.id}')"></i>
          </div>
          </div>
        </div>
      `
    }
}