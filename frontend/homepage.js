
let thisArray = [];

window.onload = function () {
    fetch("/login")
      .then((response)=> response.json())
      .then((object) => {
        sites = object;
      });
  };


function locationSearch() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
      if (usernameInput === username && passwordInput === password) {
        fetch("/books" + token)
          .then((response) => response.json()) 
          .then((login) => {
            document.getElementById("books").innerHTML = "Here are yo books" + login.books;
            console.log("does this even work");
          });
      }
    }