// document.write("Praktek di pertemuan 2");

// // variable javascript
// var nama = "Scendy Aprianda Islamy";
// var nim = 1124102195;
// var tahunMasuk = 2024;

// // menampilkan variable
// document.write("<br>Nama : " + nama);
// document.write("<br>NIM : " + nim);
// document.write("<br>Tahun Masuk : " + tahunMasuk);

// dialog prompt
// menampilkan dialog
// var password = prompt("Masukkan Password");

// if (password == "Scendy") {
//   document.write("<p>Password Benar yaitu: " + password + "</p>");
// } else {
//   alert("Mohon maaf password anda salah");
//   window.location = "coba_eksternal.html";
// }

// Dialog Confirm

var yakin = confirm("Apakah kamu yakin aka mengunungi website STIKOM?");

if (yakin) {
  window.location = "https://stikombanyuwangi.ac.id/";
} else {
  document.write("Baiklah, kamu disini saja");
}
