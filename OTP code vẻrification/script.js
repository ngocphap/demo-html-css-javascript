// dom element
const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");
console.log(inputs, button);
// lap lai cac input
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    // mã lấy phần tử input hiện tại lưu nó vào curenInput hiện tại
    //lấy phần tử input tiếp theo lưu nó vào nextinput
    // lấy phần tử input trước đó lưu vào prevInput
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }
    //nếu nextinput là disabled và giá trị currentinput không phải rỗng
    // kích hoạt nextinput và focus nó
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value != ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    //nếu phím backspace đc nhấn
    if (e.key === "Backspace") {
      // chạy vòng lặp các input lần nữa

      inputs.forEach((input, index2) => {
        //nếu số thứ tự index1 nhỏ hơn hoặc bằng index2 của input hiện tại , và prevInput tồn tại
        // dặt lại thuộc tính disabled vào input và focus nó
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }
    //if input thứ 4 không trống và không có disabled
    //add lớp active , nếu không thì xóa active
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
    console.log("aaa" + inputs[3].value);
  });
});

// focus input đầu tiên khi window load
window.addEventListener("load", () => inputs[0].focus());
