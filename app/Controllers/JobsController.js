import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../components/JobForm.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let jobs = ProxyState.jobs;
  let jobCardsTemplate = ''
  ProxyState.jobs.forEach(job => jobCardsTemplate += job.CardTemplate)
  document.getElementById("listings").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.jobsController.addJob()">Add Job</button>  
    <div class="jobs d-flex flex-wrap my-3">
      ${jobCardsTemplate}
    </div>
  </div>
  `
}

//Public
export class JobsController {
  constructor() {
    ProxyState.on("jobs", _draw);
    _draw()
  }

  addJob() {
    try { event.preventDefault();
      
      jobsService.addJob()
    } catch (error) {
      
    }
  }

  async removeJob(id) {
    const yes = await Pop.confirm('Remove Job')
    if (yes) {
      // jobsService.removeJob(id)
    }
  }
  drawJobs(){
    _draw()
  }
}
