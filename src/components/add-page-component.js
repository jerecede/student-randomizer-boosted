export default class AddPageComponent {

    constructor(storageService) {
        this.storageService = storageService;
    }

    async start() {
        const submitAdd = document.querySelector('#form-add');
        submitAdd.addEventListener('submit', (event) => this.add(event));
    }

    //funzioni events

    add(event){
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        const student = {
            name: data.get('name'),
            surname: data.get('surname'),
            nationality: data.get('nationality'),
            gender: data.get('gender'),
            yob: Number(data.get('yob').slice(0, 4))
        }

        console.log();

        this.storageService.addData(student);

        window.location.href = "/index.html";
    }
}