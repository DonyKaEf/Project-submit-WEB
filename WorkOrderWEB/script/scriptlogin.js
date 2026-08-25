// Memanggil modal
var modal = document.getElementById('login');

// Saat pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// DomContentLoaded event untuk memastikan DOM selesai loding sebelum script bekerja
document.addEventListener('DOMContentLoaded', function() {
    // show-hide password
    document.querySelectorAll('.password-wrapper').forEach(wrapper => {
        const input = wrapper.querySelector('input[type="password"], input[type="text"]');
        const icon = wrapper.querySelector('.show-hide i');
        wrapper.querySelector('.show-hide').addEventListener('click', function () {
            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        });
    });
});

