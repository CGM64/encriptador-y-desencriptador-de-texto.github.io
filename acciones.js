function bienvenida(){
    alert("Tome en cuenta que no debe escribir letras acentuadas");
}

function encriptar(){
    var recibirTexto = document.getElementById("texto-entrada");
    var texto = recibirTexto.value;

    if(texto != ""){
        recibirTexto.value = "";

        var arreglo = texto.split("");
        var textoEncriptado = "";

        for(var posicion = 0; posicion < arreglo.length; posicion++) {
            switch (arreglo[posicion]) {
                case 'a':
                    arreglo[posicion] = "ai";
                break;


                case 'e':
                    arreglo[posicion] = "enter";
                break;

                case 'i':
                    arreglo[posicion] = "imes";
                break;

                case 'o':
                    arreglo[posicion] = "ober";
                break;

                case 'u':
                    arreglo[posicion] = "ufat";
                break;

                default:
                break;
            }

            textoEncriptado = textoEncriptado + arreglo[posicion];
        }

        var imprimirTexto = document.getElementById("texto-salida");
        imprimirTexto.value = textoEncriptado;
    }else{
        alert("Ingrese un texto");
    }
}

function desencriptar(){
    var recibirTexto = document.getElementById("texto-entrada");
    var texto = recibirTexto.value;

    if(texto != ""){
        recibirTexto.value = "";

        texto = texto.replaceAll("ai", "a");
        texto = texto.replaceAll("enter", "e");
        texto = texto.replaceAll("imes", "i");
        texto = texto.replaceAll("ober", "o");
        texto = texto.replaceAll("ufat", "u");

        var imprimirTexto = document.getElementById("texto-salida");
        imprimirTexto.value = texto;
        
    }else{
        alert("Ingrese un texto");
    }
}

function copiar(){
    document.getElementById("texto-salida").disabled = false;

    var recibirTexto = document.getElementById("texto-salida");

    if(recibirTexto.value != ""){
        alert("Texto copiado");
        recibirTexto.select();
        document.execCommand("copy");
    }else{
        alert("Encripte o desencripte un texto primero")
    }

    recibirTexto.value = "";

    document.getElementById("texto-salida").disabled = true;
}