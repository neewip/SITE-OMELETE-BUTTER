var msgCookies = document.getElementById("cookies-msg");
function aceito() {
    location.reload()
    localStorage.clickUsuario = "aceito";
    msgCookies.classList.remove("mostrar");

    
}

function naoAceito() {
    msgCookies.classList.remove("mostrar");
}

if (localStorage.clickUsuario == "aceito") {
    msgCookies.classList.remove("mostrar");
} else {
    msgCookies.classList.add("mostrar");
}




