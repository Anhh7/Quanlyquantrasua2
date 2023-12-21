document.getElementById("recoverButton").addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;

    if (email.trim() === "") {
        showRecoveryResult("Vui lòng nhập email");
    } else {
        // Gửi yêu cầu khôi phục thông qua API hoặc xử lý ở phía máy chủ (cần triển khai)
        // Sau khi xử lý, hiển thị kết quả
        showRecoveryResult("Mã khôi phục đã được gửi đến email của bạn.");
    }
});

function showRecoveryResult(message) {
    var recoveryResult = document.getElementById("recoveryResult");
    recoveryResult.textContent = message;
}
