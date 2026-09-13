const botonSi = document.getElementById("si");
const botonNo = document.getElementById("no");
const zona = document.getElementById("zonaBotones");
const final = document.getElementById("final");
const cerrar = document.getElementById("cerrar");
const abajo = document.getElementById("abajo");

const mensajes = [
  "no",
  "segura?",
  "oe 😭",
  "ya pues",
  "piénsalo bien",
  "qué mala",
  "JAJA no puedes",
  "acepta nomás"
];

let intento = 0;

function escapar() {
  const anchoZona = zona.clientWidth;
  const altoZona = zona.clientHeight;
  const anchoBoton = botonNo.offsetWidth;
  const altoBoton = botonNo.offsetHeight;

  const maxX = Math.max(0, anchoZona - anchoBoton);
  const maxY = Math.max(0, altoZona - altoBoton);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  botonNo.style.left = `${x}px`;
  botonNo.style.top = `${y}px`;
  botonNo.style.right = "auto";
  botonNo.style.transform = `rotate(${Math.random() * 8 - 4}deg)`;

  intento++;
  botonNo.textContent = mensajes[intento % mensajes.length];

  if (intento === 2) {
    abajo.textContent = "oye solo tienes una opción creo";
  } else if (intento === 4) {
    abajo.textContent = "mucho esfuerzo para decir que no 😭";
  } else if (intento >= 6) {
    abajo.textContent = "ya acepta nomás JAJAJA";
  }
}

botonNo.addEventListener("mouseenter", escapar);

botonNo.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    escapar();
  },
  { passive: false }
);

botonNo.addEventListener("click", (event) => {
  event.preventDefault();
  escapar();
});

botonSi.addEventListener("click", () => {
  final.classList.add("mostrar");
});

cerrar.addEventListener("click", () => {
  final.classList.remove("mostrar");
});
