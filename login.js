function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password-field").value;

    // Kiểm tra tên người dùng và mật khẩu
    if (username === "admin" && password === "thaiphongdz") {
        // Nếu đúng, chuyển hướng đến trang quản trị
        window.location.href = "manage.html";
        return false; // Ngăn chặn việc submit form
    } else {
        // Nếu sai, hiển thị thông báo lỗi (bạn có thể thay thế bằng cách khác nếu muốn)
        alert("Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.");
        return false; // Ngăn chặn việc submit form
    }
}