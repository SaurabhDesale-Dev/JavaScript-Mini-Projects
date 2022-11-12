const fullName = document.querySelector('#fullName');
const emailId = document.querySelector('#emailId');
const schoolId = document.querySelector('#schoolId');
const submitBtn = document.querySelector('#submitBtn');

const student = function (fullName, emailId, schoolId) {
  this.fullName = fullName;
  this.emailId = emailId;
  this.schoolId = schoolId;
};
submitBtn.addEventListener('click', (e) => {
  let fname = fullName.value;
  let eId = emailId.value;
  let sId = schoolId.value;
  let studentUser = new student(fname, eId, sId);
  console.log(studentUser);
  e.preventDefault();
});
