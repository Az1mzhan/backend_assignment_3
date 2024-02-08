import clientController from "./ClientController.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-post-btn")
    .addEventListener("click", clientController.createPost);
});
