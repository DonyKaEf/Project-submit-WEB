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

// Fungsi untuk menampilkan atau menyembunyikan daftar FAQ
function showhidefunction() {
    var faq = document.getElementById("faq-list");
    if (window.getComputedStyle(faq).display === "none") { // Cek ke css apakah FAQ saat ini tersembunyi
        // Jika tersembunyi, tampilkan
        faq.style.display = "block";
    } else {
        // Jika terlihat, sembunyikan
        faq.style.display = "none";
    }
}