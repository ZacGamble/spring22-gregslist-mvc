import { CarsController } from "./Controllers/CarsController.js";
import { HousingController } from "./Controllers/HousingController.js";

class App {
  carsController = new CarsController()
  housingController = new HousingController()
}

window["app"] = new App();
