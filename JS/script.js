// javascript code

function getName() {
    let name = prompt("Masukkan nama anda terlebih dahulu", "")

    if(!name) {
        name = "Guest"
    }

    document.getElementById("name-guest").innerText = name
}

getName()

document.getElementById("date").innerText = new Date()

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

function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("name-input").innerText = name
    document.getElementById("birth-dateinput").innerText = birthDate.split("-").reverse().join("/")
    document.getElementById("gender-input").innerText = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("message-input").innerText = pesan
}

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