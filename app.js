let container = document.querySelector(".card-container");
let URL = "https://restcountries.com/v3.1/all";

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.map((country) => {
          let card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
                    <img src=${country.flags.svg} alt="flag" />
                    <div class="card-text">
                        <h2>${country.name.common}</h2>
                        <p><b>Population: </b>${country.population.toLocaleString()}</p>
                        <p><b>Region: </b>${country.region}</p>
                        <p><b>Capital: </b>${country.capital}</p>
                    </div>`;
      container.appendChild(card);
    });
    sortCards();
  })
  .catch((err)=>{
      console.log("Error occured while retreiving DATA");
  });


  let sortCards = () => {
    let cards = Array.from(container.children);
    cards.sort((a, b) => {
      let nameA = a.querySelector("h2").textContent.toUpperCase();
      let nameB = b.querySelector("h2").textContent.toUpperCase();
      return nameA.localeCompare(nameB);
    });
    container.innerHTML = "";
    cards.forEach((card) => container.appendChild(card));
  };
