const nav = document.querySelector("#navbar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
nav.before(scrollWatcher);

const navOberver = new IntersectionObserver(
  (intres) => {
    console.log(intres);
    nav.classList.toggle("sticking", !intres[0].isIntersecting);
  },
  { rootMargin: "50px 0px 0px 0px" }
);

navOberver.observe(scrollWatcher);

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (nome !== "" && email !== "") {
    // Create a JSON object with latitude and longitude
    const data = {
      nome: nome,
      email: email,
    };

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((result) => {
        document.getElementById("forms-container").innerHTML = result;
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
