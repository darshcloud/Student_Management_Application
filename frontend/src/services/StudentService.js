import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/students/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete('http://127.0.0.1:8000/students/' + studentId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/students/', {
    studentId:null,
    firstName:student.firstName.value,
    lastName:student.lastName.value,
    registrationNumber:student.registrationNumber.value,
    email:student.email.value,
    course:student.course.value
  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/students/' + stuid + '/', {
    firstName:student.firstName.value,
    lastName:student.lastName.value,
    registrationNumber:student.registrationNumber.value,
    email:student.email.value,
    course:student.course.value
  })
   .then(response => response.data)
}