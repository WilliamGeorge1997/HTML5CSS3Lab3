let clearBtn = document.getElementById("clearBtn");
usersContainer = [];

if (localStorage.getItem("users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
  displayUsers(usersContainer);
}

function displayUsers(arr) {
  let container = "";
  for (let i = 0; i < arr.length; i++) {
    container += ` <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].age}</td>
        <td>
          <button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button>
        </td>
      </tr>`;
  }
  document.getElementById("tBody").innerHTML = container;
}

function deleteUser(userIndex) {
  usersContainer.splice(userIndex, 1);
  localStorage.setItem("users", JSON.stringify(usersContainer));
  displayUsers(usersContainer);
}

function clearUsers(usersContainer) {
  usersContainer.splice(0, usersContainer.length);
  localStorage.setItem("users", JSON.stringify(usersContainer));
  displayUsers(usersContainer);
}
clearBtn.addEventListener("click", () => {
  clearUsers(usersContainer);
});
