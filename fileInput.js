const Student = require('./student');
const fs = require('fs');

function getStudentsFromFile(filename) {
  let fileData = fs.readFileSync(filename,'utf8');
  fileData = fileData.split('\n').slice(0,-1);

  let students = [];
  for(let line of fileData) {
    let tmpList = line.split(' ');
    let tmpStudentName = tmpList.slice(0,1)[0];
    let tmpStudentMarks = tmpList.slice(1).map(s => parseInt(s));
    let tmpStudent = new Student(tmpStudentName,tmpStudentMarks);
    students = [].concat(students,tmpStudent);
  }
  return students;

}

module.exports = {
  getStudentsFromFile: getStudentsFromFile
};

console.log(getStudentsFromFile('input.txt'));
