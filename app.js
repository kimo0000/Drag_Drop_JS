const btn = document.querySelector(".btn");
const boxs = document.querySelectorAll(".box");
const input = document.querySelector(".input_text input");
const popup = document.querySelector(".popup")
let drag = null;

btn.addEventListener("click", () => {
  // console.log(input.value)
  if (input.value !== "") {
    boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
    input.value = "";
    addText("Item Added Succefully", "succes")
  } else {
    addText("Please Inert Item", "danger")
  }

  dragItem();
});

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      drag = item;
      item.style.opacity = ".5";
    });
    item.addEventListener("dragend", (e) => {
      drag = null;
      item.style.opacity = "1"
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault()
        box.style.background = "green";
        box.style.color = "#fff";
      });

      box.addEventListener("dragleave", (e) => {
        box.style.background = "#fff";
        box.style.color = "#000";
      });

      box.addEventListener("drop", (e) => {
        box.appendChild(drag);
        box.style.background = "#fff";
        box.style.color = "#000";
        addText("Item Added Succefully In New Box", "succes")
      });
    });

  });

}

function addText(text, action) {
    popup.innerHTML = text
    popup.classList.add(`${action}`)
    setTimeout(() => {
       popup.innerHTML = ""
        popup.classList.remove(`${action}`)
    }, 2000)
}
