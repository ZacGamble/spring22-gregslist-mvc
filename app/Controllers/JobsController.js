import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../components/JobForm.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _drawJobs() {
  let jobCardsTemplate = ''
  ProxyState.jobs.forEach(job => jobCardsTemplate += job.CardTemplate)
  document.getElementById("listings").innerHTML = `
  <div class="row jobs">
  ${jobCardsTemplate}
</div>
`
  document.getElementById('listing-modal-form-slot').innerHTML = getJobForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Job'
}

//Public
export class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs);
    _drawJobs()
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
}
