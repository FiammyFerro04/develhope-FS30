const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    console.log("buttonElement", event);
    const body = document.querySelector("body");
    body.classList.toggle("theme");
});