document.getElementById("cambiar").addEventListener("click", () => {
    const p = document.getElementById("texto");
    p.textContent = "Otro texto Dom";
});
  
// Este maneja los múltiples botones
const botones = document.querySelectorAll(".mi-boton");
const texto = document.getElementById("texto");

botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    texto.textContent = `Texto cambiado desde el botón ${index + 1}`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const texto = document.querySelector("#texto");
    const botones = document.querySelectorAll(".opcion");
  
    botones.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Cambiar el texto
        const opcion = btn.dataset.opcion;
        texto.textContent = `Texto cambiado a opción ${opcion}`;
  
        // Restablecer colores a todos
        botones.forEach((b) => {
          b.classList.remove("bg-lime-500");
          b.classList.add("bg-emerald-800", "bg-sky-800", "bg-rose-800");
        });
  
        // Quitar clases originales para evitar que se acumulen
        btn.classList.remove("bg-emerald-800", "bg-sky-800", "bg-rose-800");
  
        // Añadir color destacado solo al botón clickeado
        btn.classList.add("bg-lime-500");
      });
    });
  });
  
  
  
  
  