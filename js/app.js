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
    console.log(tape1)
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

    console.log({ tape1, tape2 });

    container.appendChild(tape2);
  }

  randomShape() {
    return "&copy;";
  }
}
