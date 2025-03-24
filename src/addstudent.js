import StorageService from "./services/storage-service.js";
import AddPageComponent from "./components/add-page-component.js";

const serviceStrg = new StorageService();

const addPageC = new AddPageComponent(serviceStrg);

addPageC.start();