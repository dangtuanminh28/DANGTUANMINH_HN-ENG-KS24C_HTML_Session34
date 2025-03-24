function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset lỗi
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    // Kiểm tra email rỗng
    if (email === "") {
        emailError.innerText = "Email không được bỏ trống!";
        return;
    }

    // Kiểm tra mật khẩu rỗng
    if (password === "") {
        passwordError.innerText = "Mật khẩu không được bỏ trống!";
        return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Mật khẩu xác nhận không trùng khớp!";
        return;
    }

    // Kiểm tra xem email đã tồn tại chưa
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        emailError.innerText = "Email đã tồn tại!";
        return;
    }

    // Lưu tài khoản vào localStorage
    users.push({ email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    window.location.reload();
}