(() => {
  const filters = [...document.querySelectorAll("[data-filter]")];
  const entries = [...document.querySelectorAll(".archive-entry")];
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const mapNodes = [...document.querySelectorAll(".map-node")];

  function selectCategory(category) {
    const active = category || "all";
    entries.forEach(entry => {
      entry.hidden = active !== "all" && entry.dataset.category !== active;
    });
    filterButtons.forEach(button => {
      const selected = button.dataset.filter === active;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    mapNodes.forEach(node => node.classList.toggle("is-selected", node.dataset.filter === active && active !== "all"));
    if (window.matchMedia("(max-width: 700px)").matches) {
      document.querySelector("#collections")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  filters.forEach(control => control.addEventListener("click", () => selectCategory(control.dataset.filter)));
})();
