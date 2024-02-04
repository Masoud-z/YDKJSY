let students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" },
] as const;

type Students = (typeof students)[number];
type StudentsID = Students["id"];

function getStudentName(studentID: StudentsID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}
