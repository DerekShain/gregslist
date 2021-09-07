import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

// @ts-ignore
const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/jobs"
})
class JobsService {
  async deleteJob(jobId){
    await api.delete(jobId)
  }
  async addJob(jobData) {
    let res = await api.post('', jobData)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }
  async getJobs(){
    let res = await api.get()
    ProxyState.jobs = res.data.map(j => new Job(j))
  }
}

// singleton pattern
export const jobsService = new JobsService()