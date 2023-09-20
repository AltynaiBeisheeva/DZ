const wrapper = document.querySelector(".wrapper");
const request = new XMLHttpRequest();
request.open("GET", "peoples.json");
request.setRequestHeader("Content-type", "applocation/json"); //указание загаловка
request.send();
request.addEventListener("load", () => {
  const data = JSON.parse(request.response);
  console.log(data);
  data.forEach((person) => {
    const personCard = document.createElement("div");
    personCard.setAttribute("class", "person-card"); // Здесь нужно использовать строку, а не person - card
    personCard.innerHTML = `
      <img src = ${person.image}>
      <h3> ${person.name}</h3>
      <h4>Age: ${person.age}</h4>
      <tt>Color: ${person.color}</tt>

      
  `;

    wrapper.append(personCard);
  });
});
