// Seleccionamos el li que tiene la imagen
const itemBachata = document.querySelector("li:last-child");

// Al hacer click, se muestra u oculta la imagen
itemBachata.addEventListener("click", () => {
    itemBachata.classList.toggle("mostrar");
});
