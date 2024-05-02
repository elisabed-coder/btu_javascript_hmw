async function fetchdata() {
  try {
    const userresponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await userresponse.json();
    const userDataDiv = document.querySelector(".user-data");

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      userDiv.innerHTML = `
      <h1>Name: ${user.name}</h1>
      <h4>Username: ${user.username}</h4>
      <p>Email: ${user.email}</p>
      `;

      userDataDiv.appendChild(userDiv);
    });
  } catch (error) {
    console.error("error happened:", error);
  }
}

fetchdata();
