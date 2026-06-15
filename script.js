const salsas = {

  bolognesa: {
    nombre: "Bolognesa",
    foto: "https://i.postimg.cc/J7DqLfkN/bolonesa.jpg",
    ingredientes: [
      "Carne picada de ternera y cerdo",
      "Cebolla",
      "Zanahoria",
      "Apio",
      "Ajo fresco",
      "Vino blanco",
      "Tomate triturado",
      "Sal",
      "Pimienta negra",
      "Aceite de oliva extra virgen",
      "Laurel",
      "Leche"
    ],
    consejo: "Nuestra recomendación: acompañarla con rigatones, tagliatelle o lasagna."
  },

  
  napolitana: {
    nombre: "Napolitana",
    foto: "https://i.postimg.cc/3J9V4Mtd/napolitana.jpg",
    ingredientes: [
      "Tomate perita",
      "Aceite de oliva extra virgen",
      "Ajo fresco",
      "Albahaca",
      "Sal",
      "Pimienta",
      "Oregano"
    ],
    consejo: "Fresca y aromática, ideal para quienes aman los sabores italianos clásicos."
  },

  funghi: {
    nombre: "Funghi",
    foto: "https://i.postimg.cc/T3tx6LzB/funghi.jpg",
    ingredientes: [
      "Crema de leche",
      "Aceite de oliva",
      "Cebolla",
      "Ajo",
      "Hongos de pino",
      "Champiñon",
      "Sal",
      "Vino blanco"
    ],
    consejo: "Una experiencia gourmet con sabores intensos y elegantes."
  },

  pesto: {
    nombre: "Pesto",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7GwIW3Z44XgDvNeCl58AEOWHihxPcibEFXAkNnTGaA&s=10",
    ingredientes: [
      "Albahaca",
      "Aceite de oliva extra virgen",
      "Queso rallado",
      "Nueces",
      "Ajo fresco",
      "Sal"
    ],
    consejo: "Un clásico italiano que combina a la perfección con nuestros tagliatelle."
  },

  pestoRosso: {
    nombre: "Pesto Rosso Panna",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzRNHM4mD9x1HmDhS1r1XV52Bjs2VhW51p89dJN_r4Q&s=10",
    ingredientes: [
      "Tomates secos",
      "Aceite de oliva extra virgen",
      "Nueces",
      "Almendras",
      "Piñones",
      "Ajo fresco",
      "Sal",
      "Pimienta negra",
      "Queso rallado",
      "Albahaca fresca",
      "Crema de leche",
      "Vinagre balsamico de modena"
    ],
    consejo: "La unión perfecta entre lo mediterráneo y una textura cremosa."
  },

  cuatroQuesos: {
    nombre: "Cuatro Quesos",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHzxdHkr6dV8Vf4aTXdfAdTsOHCrKZNcKwZ60V18ZBA&s=10",
    ingredientes: [
      "Leche entera",
      "Harina de trigo",
      "Manteca",
      "Queso parmesano",
      "Queso azul",
      "Muzzarella",
      "Emmental",
      "Sal",
      "Pimienta"
    ],
    consejo: "Cremosa, intensa y pensada para los amantes del queso."
  },

  salameMascarpone: {
    nombre: "Salame y Mascarpone",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iHZ83LWMjcJcTW7dwmmBwA-i-0L4BlOyVNYtuqKLzg&s=10",
    ingredientes: [
      "Chorizo ibérico",
      "Espinaca",
      "Queso mascarpone",
      "Crema de leche",
      "Aceite de oliva extra virgen",
      "Sal"
    ],
    consejo: "Una combinación especial con carácter, suavidad y mucho sabor."
  },

  estofado: {
    nombre: "Estofado de Ternera",
    foto: "https://i.postimg.cc/BnS3kcVX/estofado-carne.jpg",
    ingredientes: [
      "Carne de ternera",
      "Cebolla",
      "Zanahoria",
      "Ajo fresco",
      "Tomate triturado",
      "Vino tinto",
      "Caldo de carne",
      "Sal",
      "Pimienta",
      "Orégano",
      "Laurel",
      "Pimentón dulce",
      "Ají molido"
    ],
    consejo: "Cocción lenta y sabores profundos que recuerdan a una comida familiar."
  },

  carbonara: {
    nombre: "Carbonara",
    foto: "https://www.caloriemenu.com/images/en/640/carbonara-sauce.jpg",
    ingredientes: [
      "Panceta",
      "Nuez moscada",
      "Crema de leche",
      "Queso parmesano",
      "Pimienta",
      "Sal"
    ],
    consejo: "Una salsa cremosa y sabrosa para quienes buscan un plato con personalidad."
  },

  bechamel: {
    nombre: "Bechamel",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutFnsxS83TO1mfu6s-NZnATzm8kvgwWYQpxbGGu34Z-9aciAHplr8EOM&s=10",
    ingredientes: [
      "Leche",
      "Harina",
      "Manteca",
      "Sal",
      "Pimienta"
    ],
    consejo: "Su textura suave la convierte en la compañera ideal de lasagna y canelones."
  },

  champinon: {
    nombre: "Parisienne",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7MGCd5PlVistaQ9SP-u38mrKb7luWZQtDxfl3OCC5_w&s=10",
    ingredientes: [
      "Pechuga de Pollo",
      "Jamon cocido",
      "Champiñones",
      "Cebolla",
      "Crema de leche",
      "Salsa bechamel",
      "Queso parmesano",
      "Sal",
      "Pimienta",
      "Manteca",
      "Aceite de oliva",
      "Nuez moscada"
    ],
    consejo: "Una salsa delicada, cremosa y con el aroma inconfundible de los hongos."
  }


};

function abrirSalsa(nombre) {

  console.log("Me hicieron click en:", nombre);
  console.log("Existe en el catálogo:", salsas[nombre]);

  let salsa = salsas[nombre];

  if (!salsa) {
    alert("No encontré la salsa: " + nombre);
    return;
  }

  let ingredientesHTML = "";

  salsa.ingredientes.forEach(function(item) {
    ingredientesHTML += "<li>🍅 " + item + "</li>";
  });

  document.getElementById("detalle-salsa").innerHTML = `
    <div class="detalle-modal">

      <img src="${salsa.foto}" alt="${salsa.nombre}">

      <div class="info-modal">

        <h1>${salsa.nombre}</h1>

        <h2>Ingredientes</h2>

        <ul>
          ${ingredientesHTML}
        </ul>

        <h3>Consiglio dello chef 🇮🇹</h3>

        <p>${salsa.consejo}</p>

      </div>

    </div>
  `;

  document.getElementById("modal").style.display = "block";
}


function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
