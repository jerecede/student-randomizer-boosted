export default class StudentCardComponent {

    constructor(student) {
        this.student = student;
    }

    render(name, surname) {

        const studentContainer = document.createElement('div');
        studentContainer.classList.add('student-container');

        const nameContainer = this.createTextElement('span', this.student.name + ' ' + this.student.surname, 'name-container');

        const countryContainer = this.createTextElement('span','Nazionalità: ' + this.student.nationality);

        const genderContainer = this.createTextElement('span','Gender: ' + this.student.gender);

        const ageContainer = this.createTextElement('span','Age: ' + (() => {
            const now = new Date();
            const age = now.getFullYear() - this.student.yob;
            if(age > 0){
                return age;
            }            
            return 0;
        })());

        const editContainer = this.createTextElement('button','edit');
        editContainer.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/editstudent.html?name=' + name + '&surname=' +surname;
        });

        studentContainer.appendChild(nameContainer);
        studentContainer.appendChild(countryContainer);
        studentContainer.appendChild(genderContainer);
        studentContainer.appendChild(ageContainer);
        studentContainer.appendChild(editContainer);

        return studentContainer;
    }

    createTextElement(elementTag, text, nameClass = null){
        const element = document.createElement(elementTag);
        const node = document.createTextNode(text);
        if(nameClass){
            element.classList.add(nameClass);
        }
    
        element.appendChild(node);
    
        return element;
    }
}