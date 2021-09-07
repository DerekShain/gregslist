import { ProxyState } from "../AppState.js"
import { getJobFormTemplate } from "../forms/jobform.js"
import { jobsService } from "../Services/JobsService.js"

function _drawJobs() {
  let template = ''
  ProxyState.jobs.forEach(job => template += job.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class JobsController {
  constructor() {
    ProxyState.on('jobs', _drawJobs)
    
  }

  async addJob() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const jobData = {
        jobTitle: form.jobTitle.value,
        company: form.company.value,
        rate: form.rate.value,
        hours: form.hours.value,
        description: form.description.value,
    }

    try {
      await jobsService.addJob(jobData)
    } catch (e) {
      // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] ...need to do this', e)
      return
    }

    form.reset()

  }

  showJobs() {
    _drawJobs()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-dark text-light" onclick="app.jobsController.toggleJobForm()">Add Job</button>
    `
    document.getElementById('forms').innerHTML = getJobFormTemplate()
    jobsService.getJobs()
  }

  toggleJobForm() {
    document.getElementById('job-form').classList.toggle('visually-hidden')
  }
  async deleteJobs(jobId){
    try{
      await jobsService.deleteJob(jobId)
    }catch(error){
      alert(error.message)
    }
  }
}