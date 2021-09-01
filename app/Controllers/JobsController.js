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
    //             ^^^^ magic string must match a property on the appstate
  }

  addJob() {
    event.preventDefault() // do not forget this line on form submissions
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    // TODO get data from form

    const jobData = {
        name: form.name.value,
        skill: form.skill.value,
        company: form.company.value,
        description: form.description.value,
        pay: form.pay.value,
        number: form.number.value
    }

    try {
      jobsService.addJob(jobData)
    } catch (e) {
      // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
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
  }

  toggleJobForm() {
    document.getElementById('job-form').classList.toggle('visually-hidden')
  }

}