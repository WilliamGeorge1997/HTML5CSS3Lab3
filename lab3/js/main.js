let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");
let submit = document.getElementById("submit");


let usersContainer = [];
if (localStorage.getItem("users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
 if(name.value && age.value && password.value && age.value){
  let user = {
    name:name.value,
    email:email.value,
    password:password.value,
    age:age.value
  };
  usersContainer.push(user);
  localStorage.setItem("users",JSON.stringify(usersContainer));
  location.assign("../users.html")

 }else{
  alert("Please, fill all fields")
  return
 }
}

submit.addEventListener("click", () => {
  addUser();
});
