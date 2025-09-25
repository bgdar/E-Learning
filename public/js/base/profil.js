
document.addEventListener("DOMContentLoaded", function (){
    const settingsBtn = document.querySelector(".settings-btn");
    const settingPopup = document.querySelector(".setting-popup");

    const editProfileBtn = document.querySelector(".edit-profile-btn");
    const profilePopup = document.querySelector(".edit-profil-popup");

   const alerts = document.querySelectorAll(".popup .alert");
    PopupFlashMessage(alerts)
    popupSettings(settingsBtn, settingPopup);
    popopEditProfil(editProfileBtn, profilePopup);
})

const popupSettings = (settingsBtn, settingPopup) => {
  const closeBtn = settingPopup?.querySelector("#close");

  settingsBtn?.addEventListener("click", () =>
    settingPopup?.classList.add("active-popup")
  );

  closeBtn?.addEventListener("click", () =>
    settingPopup?.classList.remove("active-popup")
  );
};

const popopEditProfil = (editProfileBtn, profilePopup) => {
  const cancelBtn = profilePopup?.querySelector(".cancel");

  editProfileBtn?.addEventListener("click", () =>
    profilePopup?.classList.add("active-popup")
  );

  cancelBtn?.addEventListener("click", () =>
    profilePopup?.classList.remove("active-popup")
  );
};

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