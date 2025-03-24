export default class StudentService {

    static STUDENTS_LOCAL_URL = '../../assets/students.json';

    async getData() {
        const url = StudentService.STUDENTS_LOCAL_URL;

        const dataPromise = fetch(url)
            .then(resp => resp.json())
            .then(students => { return students })
            .catch(error => console.log(error));

        return dataPromise;
    }

    getDataRandom(data) {
        const cloneArray = data.slice();
        const newArray = [];
        
        while(cloneArray.length > 0){
            const randomIndex = Math.round(Math.random() * (cloneArray.length - 1));

            const randomStudent = cloneArray[randomIndex];

            newArray.push(randomStudent);

            cloneArray.splice(randomIndex, 1);
        }

        return newArray;
    }

    getDataByAge(data) {
        const newStudents = data.slice();
        newStudents.sort((s1, s2) => s1.yob - s2.yob);
        return newStudents;
    }

    getDataByName(data) {
        const newStudents = data.slice();
        newStudents.sort((s1, s2) => s1.name.localeCompare(s2.name));
        return newStudents;
    }
}