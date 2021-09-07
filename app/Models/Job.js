

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
        <div class="col-lg-4 mb-4 p-3 listing">
        <div class="card bg-dark">
          <div class="card-body shadow">
            <h5 class="d-flex justify-content-between">
              <span class="">${this.jobTitle}</span>
            </h5>
            <h6>
            <span>${this.company}</span>
            </h6>
            <div>
            <li>Pay Rate: ${this.rate}</li>
            <li>${this.description}</li>
            <li>Hours: ${this.hours}</li>
            </div>
            <i class="fas fa-trash-alt" onclick="app.jobsController.deleteJob('${this.id}')"></i>
          </div>
          </div>
        </div>
      `
    }
}