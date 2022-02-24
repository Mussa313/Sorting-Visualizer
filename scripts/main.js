let input_size = document.getElementById("size");
let input_speed = document.getElementById("speedid");
let array_generate = document.getElementById("generate");
let array_content = document.getElementById("contentid");
let array_size = input_size.value;
let array_speed = input_speed.value;
let div_sizes = [];
let divs = [];
let baseColor = "red";
let endColor =
  "#1d1c96 linear-gradient(50deg, rgb(30, 149, 239) 21%, rgb(29, 58, 184) 91%)";

window.onload = update_array_size();
array_generate.addEventListener("click", generate_array);
input_size.addEventListener("input", update_array_size);

function update_array_size() {
  array_size = input_size.value;
  generate_array();
}

function generate_array() {
  array_content.innerHTML = "";
  for (var i = 0; i < array_size; i++) {
    div_sizes[i] = Math.floor(Math.random() * 80 + 20);
    divs[i] = document.createElement("div");
    array_content.appendChild(divs[i]);
    margin_size = 0.08;
    divs[
      i
    ].style = `margin: 0% ${margin_size}%; background:${baseColor}; width: ${
      100 / array_size - 2 * margin_size
    }%; height: ${div_sizes[i]}%; border-top-left-radius: ${10}px; border-top-right-radius: ${10}px;)`;
  }
}

const newLocal = ".sortingButton";
let buttons = document.querySelectorAll(newLocal);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", run_Algorithm);
}

function disable_buttons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList = [];
    buttons[i].classList.add("btn_locked");
    buttons[i].disabled = true;
    input_size.disabled = true;
    array_generate.disabled = true;
    input_speed.disabled = true;
  }
}

function run_Algorithm() {
  console.log("run1");
  disable_buttons();
  console.log("run2");
  this.classList.add("btn_selected");
  switch (this.innerHTML) {
    case "Selection Sort": {
      console.log("yes");
      selectionSort();
      console.log("yes");
      break;
    }
    case "Bubble Sort":
      Bubble();
      break;
    case "Insertion Sort":
      Insertion();
      break;
    case "Quick Sort":
      Quick();
      break;
    case "Merge Sort":
      Merge();
      break;
  }
  enable_buttons();
}
