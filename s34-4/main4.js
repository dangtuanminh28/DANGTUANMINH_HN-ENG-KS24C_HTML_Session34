let loginBtn = document.getElementById('check');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

loginBtn.onclick = function () {
    let emailValue = emailInput.value;
    let passwordValue = passwordInput.value;

    if (!emailValue || !passwordValue) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailValue)) {
        alert("Email không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.email === emailValue && user.password === passwordValue);

    if (!userExists) {
        alert("Email hoặc mật khẩu không đúng!");
        return;
    }

    alert("Đăng nhập thành công!");
    emailInput.value = "";
    passwordInput.value = "";
};