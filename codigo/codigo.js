const wrapTextoMain = document.getElementById("wrapTextoMain");
const secondary = document.getElementById("secundario");

setTimeout(() => {
  wrapTextoMain.classList.add("wrapTextoMainUbicado");
  secondary.classList.add("secundarioUnicado");
}, 400);

// MENU //

const containerMenu = document.getElementById("wrapCardMenu");
const data = [
  {
    titulo: "Arepa fina amarilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa fina blanca",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa de relleno blanca",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa de relleno amarilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa BBQ blanca",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa BBQ amarilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa con queso blanca",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arepa con queso amarilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Pan de bono plain",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Pan de bono guayaba",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Pan de bono dulce de leche",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Pan de queso",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Boñuelo",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Empanada de pollo",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Empanada de res",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Morcilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Chorizo",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Harina premezclada buñuelo",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Harina premezclada natilla",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Arequipe",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Bandejas",
    img: "/../img/productos/1.png",
  },
  {
    titulo: "Por encargo",
    img: "/../img/productos/1.png",
  },
];
const nuevoCard = (item) => {
  // titulo
  const nuevoTitulo = document.createElement("h2");
  nuevoTitulo.innerText = item.titulo;
  // Imagen
  const nuevaCajaImg = document.createElement("div");
  const nuevaImg = document.createElement("img");
  nuevaImg.setAttribute("src", item.img);
  nuevaCajaImg.appendChild(nuevaImg);
  nuevaCajaImg.classList.add("imgCardMenu");

  // BR
  const nuevoBr = document.createElement("br");

  // BTN
  const nuevoCajaBtn = document.createElement("div");
  const nuevoBtn = document.createElement("button");
  nuevoBtn.innerText = "Comprar";
  nuevoCajaBtn.appendChild(nuevoBtn);
  nuevoCajaBtn.classList.add("cajaBtns");

  // CARD
  const nuevaCard = document.createElement("div");
  nuevaCard.classList.add("cardMenu");
  nuevaCard.appendChild(nuevoTitulo);
  nuevaCard.appendChild(nuevaCajaImg);
  nuevaCard.appendChild(nuevoBr);
  nuevaCard.appendChild(nuevoCajaBtn);

  containerMenu.appendChild(nuevaCard);
};
data.forEach((item) => {
  nuevoCard(item);
});
