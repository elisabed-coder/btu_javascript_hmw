async function fetchdata() {
  try {
    const response = await fetch("data.json");
    const users = await response.json();

    const container = document.querySelector(".contianer");

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      userDiv.innerHTML = `
          <h1>Name: ${user.firstname}</h1>
          <h2>Job: ${user.job}</h2>
          <p>Email: ${user.about}</p>
          `;

      container.appendChild(userDiv);
    });
  } catch (error) {
    console.error("error happened:", error);
  }
}

fetchdata();
