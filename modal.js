let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".btn")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function (e) {
  e.preventDefault();
  modalC.style.opacity = "1";
  modalC.style.visibility = "visible";
  modal.classList.toggle("modal-close");
});
cerrar.addEventListener("click", function () {
  modal.classList.toggle("modal-close");

  setTimeout(function () {
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
  }, 850);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target == modalC) {
    modal.classList.toggle("modal-close");

    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
});

/**/
function MostrarModal() {
  const btnclick = document.getElementById("enviar");
  btnclick.addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentario").value;
    const valinombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    // si los campos estan vacios
    let camposvacios = true;
    let datosvalidos = false;
    if (nombre !== "" && email !== "" && comentario !== "") {
      camposvacios = false;
    }
    // si nombre y mail son validos
    if (valinombre.test(nombre) && emailRegex.test(email)) {
      datosvalidos = true;
    }
    if (camposvacios === false && datosvalidos === true) {
      document.getElementById("myModal").style.display = "block";
      document.getElementById(
        "saludos"
      ).innerHTML = `<p>${nombre} revise su correo => ${email} para confirmar su registro, gracias por su comentario => ${comentario}</p>`;
    } else {
      alert("Datos vacios o no validos");
    }
  });
}
// call fuction
MostrarModal();
