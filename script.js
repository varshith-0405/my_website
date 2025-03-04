let userId;

function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

function showPosts(id) {
  let str = "";
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((value) => {
        str += `<div>
        <b>${value.title}</b>
        <p>${value.body}</p>
        </div>`;
      });
      document.getElementById("content").innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showProfile(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let str = `<div>
      <b>${data.name}</b>
      <p>${data.email}</p>
      </div>`;
      document.getElementById("content").innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showAlbums(id) {
  let str = "";
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((album) => {
        str += `<div>
        <b>${album.title}</b>
        </div>`;
      });
      document.getElementById("content").innerHTML = str;
    })
    .catch((err) => console.log(err));
}

function showtodo(id) {
  let str = "";
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data.map((album) => {
        str += `<div>
        <b>${album.title}</b>
        </div>`;
      });
      document.getElementById("content").innerHTML = str;
    })
    .catch((err) => console.log(err));
}


function showHome() {
  userId = document.getElementById("selUser").value;
  let str = `
   <div class='container-fluid'>
     <div class='row'>
      <div class='d-flex justify-content-between bg-primary text-light p-3'>
       <div>My Social Media</div>
       <div id='username'>User ID: ${userId}</div>
      </div>
     </div>
     <div class='row'>
      <div class='d-flex'>
       <div class='p-2'>
         <p onclick='showPosts(${userId})'>Home</p>
         <p onclick='showAlbums(${userId})'>Album</p>
         <p onclick='showProfile(${userId})'>Profile</p>
         <p onclick='showtodo(${userId})'>ToDo</p>
         <p onclick='showLogin()'>Logout</p>
       </div>
       <div class='p-2' id='content'></div>
      </div>
     </div>
     <div class='row'>
      <div class='bg-primary text-light p-5'>
       <p>&copy; 2025. All rights reserved.</p>
      </div>
     </div>
   </div>
  `;
  document.getElementById("root").innerHTML = str;
  showPosts(userId);
}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p>This is the caption of the website.</p>
  </div>
  <div class='p-5'>
  <select class='form-control m-3' id='selUser'>
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select>
  <p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p>
  </div></div>`;
  document.getElementById("root").innerHTML = str;
}
