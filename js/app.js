class Tape {
  constructor(selector = "") {
    this.selector = selector;

    this.mount();
  }

  mount() {
    if (typeof document === "undefined") {
      return;
    }
    const container = document.querySelector(this.selector);

    if (!container) {
      return;
    }
    const content = container.dataset.content;
    const arr =
      content &&
      content
        .trim()
        .split(" ")
        .map((i) => i.toUpperCase());

    if (!arr) {
      return;
    }
    const tape1 = document.createElement("div");
    const tape2 = document.createElement("div");
    tape1.className = "tape tape--1";
    tape2.className = "tape tape--2";

    arr.forEach((item) => {
      const textWrapper = document.createElement("span");
      const shapeWrapper = document.createElement("span");
      textWrapper.classList.add("text");
      textWrapper.textContent = item;

      shapeWrapper.innerHTML = this.randomShape();
      shapeWrapper.classList.add("shape");
      tape1.appendChild(textWrapper);
      tape1.appendChild(shapeWrapper);
    });

    container.appendChild(tape1);

    arr.forEach((item) => {
      const textWrapper = document.createElement("span");
      const shapeWrapper = document.createElement("span");
      textWrapper.classList.add("text");
      textWrapper.textContent = item;

      shapeWrapper.innerHTML = this.randomShape();
      shapeWrapper.classList.add("shape");
      tape2.appendChild(textWrapper);
      tape2.appendChild(shapeWrapper);
    });

    container.appendChild(tape2);
  }

  randomShape() {
    return "&copy;";
  }
}

(function () {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return;
  }

  // disable (dropdowns) on document free-click
  document.documentElement.addEventListener("click", (e) => {
    const insideDropdown = e.target.closest("[data-dropdown]");

    if (!insideDropdown) {
      setTimeout(disableDropdowns, 100);
    }
  });

  // dropdown
  const dropdownTogglers = document.querySelectorAll("[data-dropdown-toggler]");
  if (dropdownTogglers.length) {
    dropdownTogglers.forEach((toggler) => {
      toggler.addEventListener("click", (e) => {
        const dropdown = e.target.closest("[data-dropdown");
        const menu = dropdown.querySelector("[data-dropdown-menu]");

        menu.classList.toggle("show");
      });
    });
  }

  // search box togglers
  const searchTooglers = document.querySelectorAll("[data-search-toggler]");
  if (searchTooglers.length) {
    searchTooglers.forEach((toggler) => {
      toggler.addEventListener("click", () => {
        toggleSearchBox();
      });
    });
  }

  // sidemenu togglers
  const sidemenuTooglers = document.querySelectorAll("[data-sidemenu-toggler]");
  if (sidemenuTooglers.length) {
    sidemenuTooglers.forEach((toggler) => {
      toggler.addEventListener("click", () => {
        toggleSidemenu();
      });
    });
  }

  // track scrolling direction
  // window.addEventListener("scroll", () => {
  //   const oldY = window.scrollY;
  // });
})();

function disableDropdowns() {
  const items = document.querySelectorAll("[data-dropdown]");
  if (items.length > 0) {
    items.forEach((dropdown) => {
      const menu = dropdown.querySelector("[data-dropdown-menu]");
      menu.classList.remove("show");
    });
  }
}

function toggleSearchBox() {
  const box = document.querySelector("[data-search-box]");
  if (!!box) {
    box.classList.toggle("show");
    // document.body.classList.toggle("overflow-hidden");
  }
}

function toggleSidemenu() {
  const box = document.querySelector("[data-sidemenu-box]");
  if (!!box) {
    box.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden");
  }
}
