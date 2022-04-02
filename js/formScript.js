//Create and display username with first name initial, last name initial, and school name.
function submitInfo() {
  let fName = document.getElementById('firstName');
  let lName = document.getElementById('lastName');
  let sName = document.getElementById('schoolName');

  //store object in variable
  let firstName = fName.value;
  let lastName = lName.value;
  let schoolName = sName.value;

  //append element to display input
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("submitForm").style.display = "block";
  document.getElementById("text").append("User Name:");
  document.getElementById("usrName").append(firstName.charAt(0) + lastName.charAt(0) + schoolName);
}
