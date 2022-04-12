import { CarsController } from "./Controllers/CarsController.js";
import { HousingController } from "./Controllers/HousingController.js";
import { JobsController } from "./Controllers/JobsController.js";

class App {
  carsController = new CarsController()
  housingController = new HousingController()
  // jobsController = new JobsController()
}

window["app"] = new App();
