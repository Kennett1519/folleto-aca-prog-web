document.addEventListener("DOMContentLoaded", () => {
  // Mostrar una alerta de bienvenida
  alert("¡Bienvenido a nuestro folleto informativo!");

  // Botón para mostrar u ocultar datos curiosos
  const btnDatosCuriosos = document.getElementById("btnDatosCuriosos");
  const datosCuriosos = document.getElementById("datosCuriosos");

  btnDatosCuriosos.addEventListener("click", () => {
    // Mostrar datos curiosos
    datosCuriosos.classList.toggle("active");
  });

  // Validación de formulario
  const formContacto = document.getElementById("formContacto");

  formContacto.addEventListener("submit", (event) => {
    const correo = document.getElementById("correo").value;
    if (!correo) {
      alert("Por favor, ingrese un correo electrónico válido.");
      event.preventDefault();
    }
  });
});
