export default class EditPageComponent {

    constructor(storageService) {
        this.storageService = storageService;
    }

    start() {
        this.render();

        const submitEdit = document.querySelector('#form-edit');
        submitEdit.addEventListener('submit', (event) => this.edit(event));

        const submitRemove = document.querySelector('#form-remove');
        submitRemove.addEventListener('submit', (event) => this.remove(event));
    }

    //funzioni events

    // async edit(){
    //     const newStudents = await this.studentService.getDataRandom(this.students);
    //     this.render(newStudents);
    // }

    render() {
        const params = new URLSearchParams(window.location.search);
        this.name = params.get('name');
        this.surname = params.get('surname');

        const student = this.storageService.getStudentByName(this.name, this.surname);

        const mainContainer = document.querySelector("#root-edit");

        const html =`
            <form id="form-edit" class="form-edit">

                <label for="name">name</label>
                <input type="text" name="name" id="name" maxlength="14" value='${student.name}' required>

                <label for="surname">surname</label>
                <input type="text" name="surname" id="surname" maxlength="14" value='${student.surname}' required>

                <label for="nationality">nationality</label>
                <input type="text" name="nationality" id="nationality" value='${student.nationality}' required>

                <label for="yob">birthday</label>
                <input type="date" name="yob" id="yob" value='${Number(student.yob)}-01-01' required>

                <label for="gender">gender</label>
                <select name="gender" id="gender">
                    <option value="${student.gender}" selected>${student.gender}</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" value="edit">
            </form>
            <form id="form-remove" class="form-remove">
                <input type="submit" value="remove">
            </form>
            `;

        mainContainer.innerHTML = html;
    }

    remove(event){
        event.preventDefault();

        this.storageService.removeStudentByName(this.name, this.surname);

        window.location.href = "/index.html";
    }

    edit(event){
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

        this.storageService.replaceStudent(student, this.name, this.surname);

        window.location.href = "/index.html";
    }
}