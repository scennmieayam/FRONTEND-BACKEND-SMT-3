# Tugas Pertemuan 6 - Kalkulator Biaya Kirim Paket

Bikin kalkulator buat hitung ongkir paket. Lumayan berguna buat yang sering kirim-kirim barang.

## Yang Ada di Sini

- `index.html` - Versi basic tanpa bootstrap (plain HTML aja)
- `BootstrapVersion.html` - Versi yang pake Bootstrap (lebih keren)
- `README.md` - File ini

## Cara Pake

1. Buka salah satu file HTML di browser
2. Isi form yang ada:
   - Nomor resi (bebas mau isi apa)
   - Berat barang (dalam kg, pake koma juga bisa)
   - Pilih kota asal dan tujuan
3. Klik tombol "Hitung Biaya"
4. Lihat hasilnya di kolom "Total Biaya Pengiriman"

## Fitur

- Auto-detect berat barang buat hitung biaya
- Ada 4 kota yang bisa dipilih: Banyuwangi, Jember, Probolinggo, Surabaya
- Tabel referensi biaya berat dan jarak
- Responsive design (pake Bootstrap)

## Tabel Biaya

### Biaya Berat
- 0-1 kg: Rp 1.500
- 1.1-5 kg: Rp 2.500  
- 5.1-10 kg: Rp 3.500
- Diatas 10 kg: Rp 4.500

### Biaya Jarak
Ada tabel lengkap buat semua kombinasi kota asal-tujuan. Mulai dari Rp 5.000 (kota yang sama) sampe Rp 15.000 (Banyuwangi-Surabaya).

## Teknologi yang Dipake

- HTML5 (struktur)
- Bootstrap 5 (styling)
- JavaScript vanilla (logic)

## Catatan

- Cuma bisa hitung 1 paket per kali
- Belum ada fitur save/print hasil
- Data biaya udah fix sesuai tugas

## Yang Bisa Diimprove

- Tambahin fitur print hasil
- Save history perhitungan
- Tambahin kota lain
- Validasi input yang lebih ketat

Dibuat buat tugas Frontend Semester 3.
