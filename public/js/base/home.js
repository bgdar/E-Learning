document.addEventListener("DOMContentLoaded",function(){
    const alerts = document.querySelectorAll(".popup .alert");

    PopupFlashMessage(alerts)



});


function PopupFlashMessage(alerts){

  alerts.forEach((alert) => {
    // Hilangkan otomatis setelah 5 detik
    setTimeout(() => {
      alert.style.transition = "opacity 0.4s, transform 0.4s";
      alert.style.opacity = "0";
      alert.style.transform = "translateY(-10px)";

      // Hapus dari DOM setelah animasi selesai
      setTimeout(() => alert.remove(), 400);
    }, 5000); // 5000ms = 5 detik
  });
}