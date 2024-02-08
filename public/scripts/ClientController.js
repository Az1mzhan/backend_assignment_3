import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

class ClientController {
  createPost = async () => {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const response = await axios.post("/blogs", {
      author: author,
      title: title,
      body: body,
    });

    console.log(response);

    const alert = document.createElement("div");
    const modal = document.querySelector(".container-fluid");

    alert.className = "alert alert-success";

    if (response.data === "The post has been created successfully.")
      alert.className = "alert alert-success";
    else alert.className = "alert alert-danger";

    alert.textContent = response.data;
    modal.appendChild(alert);
  };
}

export default new ClientController();
