//! javascript code

// prompt untuk memasukkan nama
function getName() {
    let name = prompt("Masukkan nama anda terlebih dahulu", "")

    if(!name) {
        name = "Guest"
    }

    document.getElementById("name-guest").innerText = name
}

getName()

//! menampilkan tanggal dan waktu
document.getElementById("date").innerText = new Date().toLocaleDateString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

//! validasi form
function validateInput() {
    const nameInput = document.forms['form-digisite']['name'].value
    const birthDateInput = document.forms['form-digisite']['birthDate'].value
    const genderInput = document.forms['form-digisite']['gender'].value
    const messageInput = document.forms['form-digisite']['pesan'].value
    
    if(!nameInput) {
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!";
        return false;
    }

    if(!birthDateInput) {
        document.getElementById("error-birthdate").innerText = "Tanggal lahir tidak boleh kosong!"
        return false
    }

    if(!genderInput) {
        document.getElementById("error-gender").innerText = "Jenis kelamin tidak boleh kosong!"
        return false
    }

    if(messageInput.split(" ").length < 5) {
        document.getElementById("error-message").innerText = "Pesan harus terdiri dari minimal 5 kata!"
        return false
    }

    document.getElementById("error-name").innerText = "";
    document.getElementById("error-birthdate").innerText = "";
    document.getElementById("error-gender").innerText = "";
    document.getElementById("error-message").innerText = "";
    
    setFormResult(nameInput, birthDateInput, genderInput, messageInput);
    
    return false;
}
// menampilkan hasil inputan form
function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("name-input").innerText = name
    document.getElementById("birth-dateinput").innerText = birthDate.split("-").reverse().join("/")
    document.getElementById("gender-input").innerText = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("message-input").innerText = pesan
}

//! Banner slider
let slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    let imgList = document.getElementsByClassName("banner")
    if (n > imgList.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = imgList.length
    }

    for (let x = 0; x < imgList.length; x++) {
    imgList[x].style.display = "none"
    }

    imgList[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDivs(1)
}, 5000)

//! Tombol back to top

let mybutton = document.getElementById("back-to-top-btn");

 // Ketika pengguna scrolls down 20px dari atas dokumen, tampilkan tombol
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // Ketika pengguna mengklik tombol, scroll kembali ke atas dokumen
 function topFunction() {
     document.body.scrollTop = 0; 
     document.documentElement.scrollTop = 0;
 }

 // Event listener untuk tombol
 mybutton.addEventListener('click', topFunction);