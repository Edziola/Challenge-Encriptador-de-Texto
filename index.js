/*  */function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let vegueta = document.getElementById("vegueta");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    vegueta.src = "./img/encriptado.gif";
  } else {
    vegueta.src = "./img/vegueta.gif";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado" ;
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal({
      title: "Ooops!",
      text: "Debes ingresar un texto",
      icon: "warning",
      buttons: false,
      dangerMode: true,
    })
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let vegueta = document.getElementById("vegueta");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      vegueta.src = "./img/desencriptado.gif";
    } else {
      vegueta.src = "./img/vegueta.gif";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal({
        title: "Ooops!",
        text: "Debes ingresar un texto",
        icon: "warning",
        buttons: false,
        dangerMode: true,
      })
    }
}
