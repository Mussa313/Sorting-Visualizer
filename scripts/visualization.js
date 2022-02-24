var speed = 1000;
input_speed.addEventListener("input", visit_speed);
window.onload = visit_speed();
function visit_speed() {
  var array_speed = input_speed.value;

  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(array_size / 2) * speed);
}
var delay_time = 10000 / (Math.floor(array_size / 2) * speed);

let c_delay = 0;

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style = `margin: 0% ${margin_size}%; background:${color}; width: ${
      100 / array_size - 2 * margin_size
    }%; height: ${height}%;)`;
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList = [];
      buttons[i].classList.add("btn_unselected");
      buttons[i].disabled = false;
      input_size.disabled = false;
      array_generate.disabled = false;
      input_speed.disabled = false;
      console.log(buttons[i].classList);
    }
    // alert("enable");
  }, (c_delay += delay_time));
}
