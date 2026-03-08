const button = document.querySelector(".button"),
    text = document.querySelector(".text");

button.addEventListener("click", () => {
    button.classList.add("progress");
    text.innerText = "Uploading...";

    setTimeout(() => {
        button.classList.remove("progress");
        text.innerText = "Uploaded";

        setTimeout(() => {
            text.innerText = "Upload File"; 
        }, 3000);
    }, 7000);
});