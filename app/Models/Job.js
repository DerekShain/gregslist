

export class Job{
    constructor(jobData){
        this.id = jobData.id 
        this.jobTitle = jobData.jobTitle
        this.company = jobData.company
        this.description = jobData.description
        this.rate = jobData.rate
        this.hours = jobData.hours
    }

    get CardTemplate(){
        return /*html*/`
        <div class="col-lg-3 mb-4 listing">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="d-flex justify-content-between">
              <span class="">${this.jobTitle}-${this.company}</span>
              <span>Pay Rate: ${this.rate}</span>
            </h5>
            <p>${this.description}</p>
            <p>hours: ${this.hours}</p>
            <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
          </div>
          </div>
        </div>
      `
    }
}