import axios from "axios"
document.addEventListener("DOMContentLoaded",function(){

    alert("tets")
    registerForm()


})


function registerForm(){
        document.querySelector("#form-register").addEventListener("submit",(e)=>{

            e.preventDefault()
    const form = new FormData(this); // menuju form ini
    for (const [key, value] of form.entries()) {
        console.log(`${key}: ${value}`);
    }

    axios.post("/user/signUp",{
        username : form.get("username"),
        password : form.get("password"),
        email : form.get("email")
    }).then((response)=>{
        if(response.status ==  200){
            popup("berhasil mendaftar silahkan login")
            console.log("succes");
        }else {
            popup("gagal mendaftar silahkan coba lagi")
            console.log(response.data)
        }

    })
            
        })
}
/**
 * 
 * @param {string} message  message yang di tampilkan pada popup
 */
function popup(message){
    const popupElement = document.querySelector(".popup");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = message;
    popupElement.classList.add("popo-show ");

    setTimeout(() => {
        popupElement.classList.remove(".popo-show ");
    }, 3000); // Menghilangkan popup setelah 3 detik

}