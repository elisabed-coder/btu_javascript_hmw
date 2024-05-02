// const targetCountry = "Georgia";
// const people = [
//   { name: "eli", age: 25, Country: "Georgia" },
//   {
//     name: "salome",
//     age: 24,
//     Country: "Spain",
//   },
//   {
//     name: "Tina",
//     age: 22,
//     Country: "Spain",
//   },
//   {
//     name: "Elene",
//     age: 34,
//     Country: "Georgia",
//   },
//   {
//     name: "Nini",
//     age: 19,
//     Country: "France",
//   },
// ];

// function filterPeopleByCountry(people, targetCountry) {
//   const filteredPeople = people.filter(
//     (person) => person.Country === targetCountry
//   );
//   filteredPeople.forEach((person) => console.log(person));
// }

// filterPeopleByCountry(people, targetCountry);
// let num = prompt("get the number");

// function solution(number) {
//   let sum = 0;
//   if (number < 0) {
//     console.log(sum);
//   } else if (number > 0) {
//     for (let i = 1; i < number; i++) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum = sum + i;
//       }
//     }
//     console.log(sum);
//   }
// }

// solution(num);

// let getstring = prompt("enter the word");

// function duplicateEncode(word) {
//   word = word.toLowerCase(); // Convert the word to lowercase to ignore capitalization
//   let charCounts = {}; // Object to store counts of each character

//   // Count occurrences of each character in the word
//   for (let char of word) {
//     charCounts[char] = (charCounts[char] || 0) + 1;
//   }

//   // Construct the encoded string based on character counts
//   let encodedWord = "";
//   for (let char of word) {
//     if (charCounts[char] === 1) {
//       encodedWord += "("; // Character appears only once
//     } else {
//       encodedWord += ")"; // Character appears more than once
//     }
//   }

//   return encodedWord;
// }

// duplicateEncode(getstring);
document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.getElementById("products-container");
  const searchInput = document.getElementById("search-input");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let products = data;
      renderProducts(products);

      searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProdcuts = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProdcuts);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // am funqcias ekranze gamoaqvs cardebi da parametrshi shemodis serveridan mosuli damushavebuli
  // info
  function renderProducts(products) {
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src='${product.image}' alt='${product.title}'/>
        <div class='product-info'>
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p class='price'>$${product.price}</p>
        </div>
        `;
      productContainer.appendChild(productCard);
    });
  }
});
