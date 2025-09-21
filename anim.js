// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Estamos ahogándonos en nuestros ojos", start: 7, end: 10 },
  { text: "No sé qué encontraremos", start: 10, end: 13 },
  { text: "No estoy seguro, ¿debemos huir o luchar?", start: 14, end: 17 },
  { text: "Estamos aterrados", start: 17, end: 19 },
  { text: "Fingiendo que no nos importamos ahora", start: 19, end: 22 },
  { text: "La tensión corta, corta el aire", start: 22, end: 25 },
  { text: "Tengo más que miedo", start: 25, end: 27 },
  { text: "Estoy ahogándome en tus ojos", start: 27, end: 30 },
  { text: "Estoy aterrado", start: 30, end: 34 },
  { text: "No sé qué me está pasando", start: 34, end: 37 },
  { text: "¿Puedes oír mi latido?", start: 37, end: 40 },
  { text: "Se pone difícil decir palabras", start: 40, end: 44 },
  { text: "Eso es nuevo para mí", start: 44, end: 46 },
  { text: "Dejando mis miedos expuestos hasta que pueda confrontarlos", start: 46, end: 49 },
  { text: "Dejando mis lágrimas caer hasta que las pueda probar", start: 49, end: 52 },
  { text: "¿Cómo sé a dónde vamos tú y yo?", start: 52, end: 56 },
  { text: "Maldita sea, espero que vuelvas a casa", start: 56, end: 66 },

  { text: "(Oh) vuelve a casa", start: 66, end: 67 },
  { text: "Es difícil dormir de noche cuando se trata de ti y de mí", start: 67, end: 74 },
  { text: "Bueno, nuestro mundo da vueltas y vueltas y estamos paralizados", start: 74, end: 79 },

  { text: "Fingiendo ahora que no nos importa", start: 79, end: 82 },
  { text: "La tensión sube y corta el aire", start: 82, end: 85 },
  { text: "Tenemos más que miedo", start: 85, end: 86 },
  { text: "Perdidos en el interior de nuestros ojos", start: 86, end: 90 },
  { text: "Estamos aterrados", start: 90, end: 92 },

  { text: "Dejando mis miedos expuestos hasta que pueda confrontarlos", start: 92, end: 95 },
  { text: "Dejando ir mis lágrimas hasta que pueda saborearlas", start: 95, end: 99 },
  { text: "¿Cómo sé a dónde vamos tú y yo?", start: 99, end: 102 },
  { text: "Maldita sea, espero que vuelvas a casa", start: 102, end: 111 },
  { text: "(Oh) vuelve a casa", start: 111, end: 118 },
  { text: "vuelve a casa", start: 118, end: 120 },
  { text: "No sé qué me está pasando", start: 120, end: 123 },
  { text: "¿Puedes oír mi latido?", start: 123, end: 126 },
  { text: "Se pone difícil decir palabras", start: 126, end: 130 },
  { text: "Eso es nuevo para mí", start: 130, end: 132 },
  { text: "Dejando que mis miedos se muestren", start: 132, end: 135 },
  { text: "Dejando mis lágrimas caer", start: 135, end: 138 },
  { text: "¿Cómo sé a dónde vamos tú y yo?", start: 138, end: 141 },
  { text: "Maldita sea, espero....", start: 141, end: 145 },
  { text: "Dejando mis miedos expuestos hasta que pueda confrontarlos", start: 145, end: 148 },
  { text: "Dejando ir mis lágrimas hasta que pueda saborearlas", start: 148, end: 151 },
  { text: "¿Cómo sé a dónde vamos tú y yo?", start: 151, end: 155 },
  { text: "Maldita sea, espero que vuelvas a casa", start: 155, end: 161 },
  { text: "ohhhh...", start: 161, end: 164 },
  { text: "vuelve a casa", start: 164, end: 166 },
  { text: "TE AMO MUCHO MI GUIÑO GUIÑO,  ", start: 166, end: 170 },
  { text: "TE ESPERARE EL TIEMPO QUE SEA COMO ANTES O INCLUSO MEJOR ", start: 170, end: 175 },
  { text: "RECUERDA NO ESTAS SOLA YO SIEMPRE ESTARE AHI PARA TO", start: 175, end: 180 }
  
];


function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time < line.end
  );

  if (currentLine) {
    var fadeInDuration = 0.3; // segundos para hacer fade-in
    var opacity = Math.min(1, (time - currentLine.start) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


audio.addEventListener("timeupdate", updateLyrics);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);