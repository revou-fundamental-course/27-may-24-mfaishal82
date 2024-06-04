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
    let nameInput = document.forms["form-container"]["name"].value
    let birthDateInput = document.forms["form-container"]["birthDate"].value
    let genderInput = document.querySelector('input[name="gender"]:checked')
    let messageInput = document.forms["form-container"]["pesan"].value
    
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
    } else if (genderInput.value !== "male" && genderInput.value !== "female") {
        document.getElementById("errorGender").innerText = "Jenis kelamin harus diisi dengan Laki-laki atau Perempuan!"
        return false
    }

    if(messageInput.split(" ").length < 5) {
        document.getElementById("errorMessage").innerText = "Pesan tidak boleh kosong & harus terdiri dari minimal 5 kata!"
        return false
    }

    document.getElementById("errorName").innerText = "";
    document.getElementById("errorBirthDate").innerText = "";
    document.getElementById("errorGender").innerText = "";
    document.getElementById("errorMessage").innerText = "";

    setFormResult(nameInput, birthDateInput, genderInput.value, messageInput);

    return true;
}

// validateInput()

function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("nameInput").innerText = name
    document.getElementById("birthDateInput").innerText = birthDate
    document.getElementById("genderInput").innerText = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("messageInput").innerText = pesan
}