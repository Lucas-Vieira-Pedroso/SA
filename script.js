console.log("conectaod");

document.getElementById("megaman").addEventListener("submit", function (e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "man" && senha === "1982") {
         window.location.href = "home.html";
    } else {
        alert("ta errado");
    }


})

