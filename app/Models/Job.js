import {generateId} from "../Utils/generateId.js"

export class Job{
    constructor(jobData){
        this.id = jobData.id || generateId()
        this.name = jobData.name
        this.skill = jobData.skill
        this.company = jobData.company
        this.description = jobData.description
        this.pay = jobData.pay
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
        <div class="card">
          <div class="card-body">
            <h5 class="d-flex justify-content-between">
              <span class="shadow">${this.name}-${this.company}</span>
              <span>${this.pay}</span>
            </h5>
            <p>${this.skill}</p>
            <p>${this.description}</p>
          </div>
          </div>
        </div>
      `
    }
}