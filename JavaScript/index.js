var paginaActual = 1;
var paginas;
function cambiarCantidadPaginas() {
    if (document.getElementById("numeroOpciones").value == 3) {
        paginas = 3;
        document.getElementById("seleccionPaginas").style.display = "none";
        document.getElementById("imagen3").style.display = "";
        document.getElementById("imagen2").style.display = "";
        document.getElementById("imagen1").style.display = "";

    } else if (document.getElementById("numeroOpciones").value == 2) {
        paginas = 2;
        document.getElementById("seleccionPaginas").style.display = "";
        document.getElementById("seleccionPaginas3").style.display = "none";
        document.getElementById("imagen3").style.display = "none";
        document.getElementById("imagen2").style.display = "";
        document.getElementById("imagen1").style.display = "";

    } else {
        paginas = 1;
        document.getElementById("seleccionPaginas").style.display = "";
        document.getElementById("seleccionPaginas3").style.display = "";
        document.getElementById("imagen3").style.display = "none";
        document.getElementById("imagen2").style.display = "none";
        document.getElementById("imagen1").style.display = "";
    }
}

function elegirPagina(valor) {
    if (valor != 0 && valor != -1) {
        paginaActual = valor;
    }

    if (paginas == 1) {



        switch (valor) {
            case -1:
                if (paginaActual > 1) {
                    elegirPagina(paginaActual - 1);
                }
                break;
            case 0:
                if (paginaActual < 3) {
                    elegirPagina(paginaActual + 1);
                }
                break;
            default:
                for (i = 1; i <= 3; i++) {
                    if (i == valor) {
                        document.getElementById("imagen" + i).style.display = "";
                    } else {
                        document.getElementById("imagen" + i).style.display = "none";
                    }
                }
                break;
        }


    } else if (paginas == 2) {
        switch (valor) {
            case 1:
                document.getElementById("imagen3").style.display = "none";
                document.getElementById("imagen2").style.display = "";
                document.getElementById("imagen1").style.display = "";
                break;
            case 2:
                document.getElementById("imagen3").style.display = "";
                document.getElementById("imagen2").style.display = "none";
                document.getElementById("imagen1").style.display = "none";
                break;
            case -1:
                if (paginaActual > 1) {
                    elegirPagina(paginaActual - 1);
                }
                break;
            case 0:
                if (paginaActual < 2) {
                    elegirPagina(paginaActual + 1);
                }
        }
    }

    for (i = 1; i <= 3; i++) {
        if (i == paginaActual) {
            document.getElementById("seleccionPaginas" + i).style.border = "2px solid black"
        } else {
            document.getElementById("seleccionPaginas" + i).style.border = ""
        }
    }

}