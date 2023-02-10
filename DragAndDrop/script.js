//Dom elements
const boxes = document.querySelectorAll(".box"),
  image = document.querySelector(".img_drag");

// loop though each boxes element
boxes.forEach((box) => {
  //when a draggble elemet dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // prevent default behaviour
    box.classList.add("hovered");
  });

  // when a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //when a draggble element is dropped on a box elemen

  box.addEventListener("drop", () => {
    box.addEventListener("drop", () => {
      box.appendChild(image);
      box.classList.remove("hovered");
    });
  });
});
