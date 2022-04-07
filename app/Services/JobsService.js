import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
  addJob(formData) {
    const newJob = new Job(formData)
    ProxyState.jobs = [...ProxyState.jobs, newJob]
  }
  removeValue(id) {
    const jobs = ProxyState.jobs.filter(v => v.id !== id)
    ProxyState.jobs = jobs
  }
}

export const jobsService = new JobsService();

