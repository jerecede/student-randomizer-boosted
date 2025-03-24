import StudentCardComponent from "./student-card-component.js";

export default class HomePageComponent {

    constructor(studentService, storageService) {
        this.studentService = studentService;
        this.storageService = storageService;
    }

    async start() {
        this.students = await this.storageService.getStarredData(); //trova dati salvati
        if(this.students.length === 0){ 
            this.students = await this.studentService.getData();  //trova dati locali, e poi li salva
            this.storageService.save(this.students);
            console.log('dati non trovati nello storage, adesso caricati da locale')
        }

        // this.render(this.students);

        //events, cosa fare con i dati a seconda di come visualizzarli

        const btnRandom = document.getElementById('random');
        btnRandom.addEventListener('click', () => this.random());

        const btnAge = document.getElementById('age');
        btnAge.addEventListener('click', () => this.byAge());

        const btnName = document.getElementById('name');
        btnName.addEventListener('click', () => this.byName());
    }

    //funzioni events

    async random(){
        const newStudents = await this.studentService.getDataRandom(this.students);
        this.render(newStudents);
    }

    async byAge(){
        const newStudents = await this.studentService.getDataByAge(this.students);
        this.render(newStudents);
    }

    async byName(){
        const newStudents = await this.studentService.getDataByName(this.students);
        this.render(newStudents);
    }

    render(data) {
        const mainContainer = document.querySelector("#root");
        mainContainer.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const student = data[i];
            
            const cardComponent = new StudentCardComponent(student);
            const card = cardComponent.render(student.name, student.surname);
            mainContainer.appendChild(card);
        }
    }
}