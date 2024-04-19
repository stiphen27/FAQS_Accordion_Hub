let pregunta = document.getElementsByClassName("pregunta");
let iconos = document.getElementsByClassName("icono");


for (let i = 0; i < pregunta.length; i++) {
    pregunta[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display == "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
