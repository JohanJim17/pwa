const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Placer", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Arquitecto", image: "images/coffee4.jpg" },
  { name: " Bendecido", image: "images/coffee5.jpg" },
  { name: " Vida", image: "images/coffee6.jpg" },
  { name: "Inventor", image: "images/coffee7.jpg" },
  { name: "Vuelta", image: "images/coffee8.jpg" },
  { name: "Acusador", image: "images/coffee9.jpg" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Probar</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("servicio worker registrado"))
      .catch(err => console.log("servicio worker no registrado", err))
  })
}