export default class StorageService {

    //name e surname formano insieme l'ID

    save(data) {
        localStorage.setItem('students-starred', JSON.stringify(data));
    }

    getStarredData() {
        const starredStudentsString = localStorage.getItem('students-starred');

        if (starredStudentsString) {
            const starredStudents = JSON.parse(starredStudentsString);
            return starredStudents;
        }

        return [];
    }

    addData(student){
        const starredStudentsString = localStorage.getItem('students-starred');
        
        if (starredStudentsString) {
            const starredStudents = JSON.parse(starredStudentsString);
            starredStudents.push(student);
            localStorage.setItem('students-starred', JSON.stringify(starredStudents));
        }
    }

    getStudentByName(name, surname){
        const starredStudentsString = localStorage.getItem('students-starred');
        const starredStudents = JSON.parse(starredStudentsString);
        const studentId = starredStudents.find(s => s.name === name && s.surname === surname);
        return studentId;
    }

    removeStudentByName(name, surname){
        const starredStudentsString = localStorage.getItem('students-starred');
        let starredStudents = JSON.parse(starredStudentsString);

        starredStudents = starredStudents.filter(s => s.name !== name && s.surname !== surname);

        localStorage.setItem('students-starred', JSON.stringify(starredStudents));
    }

    replaceStudent(newStudent, oldName, oldSurname){
        const starredStudentsString = localStorage.getItem('students-starred');
        const starredStudents = JSON.parse(starredStudentsString);

        const studentIndex = starredStudents.findIndex(s => s.name === oldName && s.surname === oldSurname); //quando lo trova mi restituisce il suo indirizzo, non una copia

        starredStudents[studentIndex] = newStudent;

        localStorage.setItem('students-starred', JSON.stringify(starredStudents));
    }
}