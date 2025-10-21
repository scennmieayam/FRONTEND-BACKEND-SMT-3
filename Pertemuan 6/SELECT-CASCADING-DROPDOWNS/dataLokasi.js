const dataLokasi = {
    asia : ["Indonesia", "Malaysia", "Singapura", "Thailand", "Vietnam", "Filipina", "Brunei", "Myanmar", "Laos", "Kamboja", "Timor Leste"],
    eropa : ["Inggris", "Jerman", "Prancis", "Italia", "Spanyol", "Portugal", "Belanda", "Belgia", "Swedia", "Norwegia", "Denmark"],
    amerika : ["Amerika Serikat", "Kanada", "Mexico", "Brazil", "Argentina", "Chile", "Peru", "Kolombia", "Venezuela", "Ekuador", "Bolivia"],
    afrika : ["Afrika Selatan", "Nigeria", "Kenya", "Etiopia", "Ghana", "Tanzania", "Uganda", "Malawi", "Zambia", "Zimbabwe", "Namibia"],
    oceania : ["Australia", "New Zealand", "Fiji", "Papua Nugini", "Samoa", "Vanuatu", "Solomon Islands", "New Caledonia", "Vanuatu", "Solomon Islands", "New Caledonia"],
}

function inisialisasiBenua() {
    const selectBenua = document.getElementById("benua");

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Pilih Benua--";
    selectBenua.appendChild(defaultOption);

    for (const benuaKey in dataLokasi) {
        let option = document.createElement("option");
        option.value = benuaKey;
        option.textContent = benuaKey;
        selectBenua.appendChild(option);
    }
}

function updateNegara() {
    const selectBenua = document.getElementById('benua');
    const selectNegara = document.getElementById('negara');
    const hasilElement = document.getElementById('hasil');

    // Dapatkan nilai (value) benua yang dipilih
    const benuaTerpilih = selectBenua.value;

    // 1. Reset Dropdown Negara
    selectNegara.innerHTML = "";
    // Reset hasil
    hasilElement.textContent = "";

    // --- Tambahkan Opsi Negara yang Sesuai ---
    if (benuaTerpilih) {
        // Tambahkan opsi default "Pilih Negara"
        let defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "-- Pilih Negara --";
        selectNegara.appendChild(defaultOption);

        // 2. Ambil array negara berdasarkan benuaTerpilih
        const dataNegara = dataLokasi[benuaTerpilih];

        // 3. Iterasi array dan tambahkan opsi negara
        dataNegara.forEach(function(negara) {
            let option = document.createElement('option');
            // Format value untuk HTML select
            option.value = negara.toLowerCase().replace(/\s+/g, "_");
            option.textContent = negara;
            selectNegara.appendChild(option);
        });

        // 4. Tambahkan event listener ke dropdown negara setelah diisi
        selectNegara.onchange = tampilkanHasil;

    } else {
        // Jika tidak ada benua dipilih (opsi default), tambahkan opsi non-aktif
        let defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "-- Pilih Benua Dahulu --";
        selectNegara.appendChild(defaultOption);
    }
}
// 4. Fungsi untuk menampilkan hasil akhir
function tampilkanHasil() {
    const selectBenua = document.getElementById('benua');
    const selectNegara = document.getElementById('negara');
    const hasilElement = document.getElementById('hasil');

    const benuaTeks = selectBenua.options[selectBenua.selectedIndex].textContent;
    const negaraTeks = selectNegara.options[selectNegara.selectedIndex].textContent;

    if (selectNegara.value) {
        hasilElement.textContent = `Anda memilih: ${negaraTeks}, yang terletak di benua ${benuaTeks}.`;
        hasilElement.style.color = 'green';
    } else {
        hasilElement.textContent = 'Silakan lengkapi pilihan Anda.';
        hasilElement.style.color = 'orange';
    }
}

// Panggil fungsi inisialisasi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', inisialisasiBenua);

