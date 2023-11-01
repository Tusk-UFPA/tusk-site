const nav = document.querySelector("#navbar");
const scrollWatcher = document.createElement("div");

console.log(nav);

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
