async function fetchData() {
  try {
    const serverResponse = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json"
    );

    const planets = await serverResponse.json();

    const destination = document.querySelector(".destination");

    let currentIndex = 0;

    function showPlanet(index) {
      if (index < 0 || index >= planets.length) {
        return;
      }
      const planet = planets[index];
      destination.innerHTML = `
          <h1>${planet.name}</h1>
          <img src="${planet.image}">
        `;
      currentIndex = index;
    }

    showPlanet(currentIndex);

    destination.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % planets.length;
      showPlanet(currentIndex);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
