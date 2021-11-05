// Lấy ra thẻ input của 3 hệ số a, b, c
const numberA = document.getElementById("number_a");
const numberB = document.getElementById("number_b");
const numberC = document.getElementById("number_c");
// Lấy ra nút button
const btnSubmit = document.querySelector(".submit");

// Thêm sự kiện click và khi ấn phim enter cho nút Tính
btnSubmit.addEventListener("click", handleCalculation);
window.addEventListener("keypress", handleKeypress);

// Hàm xử lý khi ấn nút enter
function handleKeypress(e) {
  // 13 là mã số của phím enter
  if (e.keyCode == 13) {
    // Gọi là hàm handleCalculation() khi ấn nút Enter
    handleCalculation();
  }
}

function handleCalculation() {
  // Lấy ra giá trị của a, b, c mà người dùng nhập vào
  let a = numberA.value;
  let b = numberB.value;
  let c = numberC.value;
  // Lấy ra phần hiển thị kết quả
  let result = document.querySelector(".result_number");

  if (a === "" || b === "" || c === "") {
    //Kiểm tra xem 1 trong 3 hệ số có bị bỏ trống hay ko, nếu trống thì báo lôi (Dòng 31)
    result.innerHTML =
      "<h3 style='color: red'>Vui lòng nhập đầy đủ hệ số!</h3>";
  } else if (a == 0) {
    //Kiểm tra hệ số a xem có bằng 0 hay ko
    if (b == 0) {
      //Kiểm tra hệ số b xem có bằng 0 hay ko
      if (c == 0) {
        //Kiểm tra hệ số c xem có bằng 0 hay ko
        result.innerHTML = "<b>Phương trình có vô số nghiệm</b>";
        // Nếu a, b, c bằng 0 thì phương trình có vô số nghiệm
      } else {
        result.innerHTML = "<b>Phương trình vô nghiệm</b>";
        // Nếu a và b bằng 0 thì phương trình vô nghiệm
      }
    } else {
      result.innerHTML = `<b>Phương trình có 1 nghiệm duy nhất:</b> ${-c / b}`;
      //Nếu a bằng 0 thì phương trình có 1 nghiệm duy nhất
    }
  } else {
    //Tính Delta
    let delta = b * b - 4 * a * c;
    //Kiểm tra Delta
    if (delta > 0) {
      //Tính ra 2 nghiệm phân biệt x1, x2
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      // In ra 2 nghiệm
      result.innerHTML =
        `<b>Nghiệm thứ nhất là:</b> ${x1} <br/>` +
        `<b>Nghiệm thứ hai là:</b> ${x2}`;
    } else if (delta == 0) {
      // Nếu Delta bằng 0 thì tính nghiệm kép
      let double = -b / (2 * a); //Tính nghiệm kép
      //In ra nghiệm kép
      result.innerHTML = `<b>Phương trình có nghiệm kép x1 = x2</b> = ${double}`;
    } else {
      //Nêu Delta nhỏ hơn 0 thì phương trình vô nghiệm
      result.innerHTML = "<b>Phương trình vô nghiệm</b>";
    }
  }
}

// Khi click vào nút reset thì tất cả giá trị được xóa hêt, bao gôm kết quả hiển thị
document.querySelector(".reset").onclick = function reset() {
  numberA.value = "";
  numberA.focus(); //Tự động focus vào input chứa số a khi reset
  numberB.value = "";
  numberC.value = "";
  document.querySelector(".result_number").innerHTML = "";
};
