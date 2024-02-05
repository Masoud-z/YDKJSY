let students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" },
] as const;

type StudentsType = (typeof students)[number];
type StudentsID = StudentsType["id"];

function getStudentName(studentID: StudentsID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}
