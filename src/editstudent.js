import StorageService from "./services/storage-service.js";
import EditPageComponent from "./components/edit-page-component.js";

const serviceStrg = new StorageService();

const editPageC = new EditPageComponent(serviceStrg);

editPageC.start();