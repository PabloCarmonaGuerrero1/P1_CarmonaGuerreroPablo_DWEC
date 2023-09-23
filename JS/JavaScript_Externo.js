function handleClick() {
    alert("Bien hecho!");
}

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("b2");
    button.addEventListener("click", handleClick);
});