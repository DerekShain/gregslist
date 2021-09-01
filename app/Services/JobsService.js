import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

class JobsService {
  addJob(jobData) {
    console.log('add job in jobs service')
    var testJob = new Job(jobData)
    ProxyState.jobs = [...ProxyState.jobs, testJob]
  }
}

// singleton pattern
export const jobsService = new JobsService()