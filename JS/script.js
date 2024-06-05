// javascript code

function getName() {
    let name = prompt("Masukkan nama anda terlebih dahulu", "")

    if(!name) {
        name = "Guest"
    }

    document.getElementById("name-guest").innerText = name
}

// getName()

document.getElementById("date").innerText = new Date()

function validateInput() {
    const nameInput = document.forms['formDigiSite']['name'].value
    const birthDateInput = document.forms['formDigiSite']['birthDate'].value
    const genderInput = document.forms['formDigiSite']['gender'].value
    const messageInput = document.forms['formDigiSite']['pesan'].value
    
    if(!nameInput) {
        document.getElementById("errorName").innerText = "Nama tidak boleh kosong!";
        return false;
    }

    if(!birthDateInput) {
        document.getElementById("errorBirthDate").innerText = "Tanggal lahir tidak boleh kosong!"
        return false
    }

    if(!genderInput) {
        document.getElementById("errorGender").innerText = "Jenis kelamin tidak boleh kosong!"
        return false
    }

    if(messageInput.split(" ").length < 5) {
        document.getElementById("errorMessage").innerText = "Pesan harus terdiri dari minimal 5 kata!"
        return false
    }

    document.getElementById("errorName").innerText = "";
    document.getElementById("errorBirthDate").innerText = "";
    document.getElementById("errorGender").innerText = "";
    document.getElementById("errorMessage").innerText = "";
    
    setFormResult(nameInput, birthDateInput, genderInput, messageInput);
    
    return false;
}

function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("nameInput").innerText = name
    document.getElementById("birthDateInput").innerText = birthDate.split("-").reverse().join("/")
    document.getElementById("genderInput").innerText = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("messageInput").innerText = pesan
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