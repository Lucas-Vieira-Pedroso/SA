console.log("conectaod");

document.getElementById("megaman").addEventListener("submit", function (e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "man" && senha === "1982") {
        alert("ta certo");
    } else {
        alert("ta errado");
        window.location.href = "home.html";

    }


})

