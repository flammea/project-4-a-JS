const header = document.querySelector("h1");

document.body.addEventListener("mousemove", (event) => {
    header.textContent = `${event.clientX}, ${event.clientY}`;
})