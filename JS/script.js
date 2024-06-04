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
    const nameInput = document.forms['formDigiSite']['name'].value
    const birthDateInput = document.forms['formDigiSite']['birthDate'].value
    const genderInput = document.forms['formDigiSite']['gender'].value
    const messageInput = document.forms['formDigiSite']['pesan'].value

    // if(!nameInput || !birthDateInput || !genderInput || !messageInput) {
    //     alert("Data tidak boleh kosong!")
    //     return false
    // }
    
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
    // return true;
}

// validateInput()

function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("nameInput").innerHTML = name
    document.getElementById("birthDateInput").innerHTML = birthDate.split("-").reverse().join("/")
    document.getElementById("genderInput").innerHTML = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("messageInput").innerHTML = pesan
}
