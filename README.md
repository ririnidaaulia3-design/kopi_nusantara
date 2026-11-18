# Kopi Nusantara

Proyek Akhir Cloud Computing - Mini Web Deployment

- **Nama & Kelas:** Nama Kamu - XII RPL
- **Jalur:** Opsi 1 (Static Web Pro, tanpa database cloud)
- **Deskripsi:** Web edukasi tentang kopi dari berbagai daerah Indonesia, lengkap dengan panduan dan timer seduh.
- **Link Web (live):** https://GANTI-DENGAN-LINK-KAMU.github.io/proyek-cloud-rrn/

## Halaman

| Halaman | File | Isi |
|---|---|---|
| Home | `index.html` | Hero, rekomendasi kopi sesuai selera, fakta acak |
| Jenis Kopi | `jenis.html` | Tab per daerah, pencarian, tombol favorit |
| Cara Seduh | `seduh.html` | Pilih metode, timer seduh, kalkulator kopi |
| Kontak | `kontak.html` | Form dengan validasi dan riwayat pesan |

## Fitur JavaScript (manipulasi DOM)

- Tab per daerah dan pencarian kopi secara real-time
- Tombol favorit yang tersimpan di `localStorage`
- Rekomendasi kopi berdasarkan selera
- Timer seduh (mulai, jeda, reset) dengan notifikasi `alert` dan bunyi bip
- Kalkulator jumlah kopi dari jumlah air
- Validasi form kontak dengan `alert`, draft dan riwayat pesan di `localStorage`
- Desain responsif (HP dan laptop)

## Struktur Folder

```
index.html
jenis.html
seduh.html
kontak.html
style.css
script.js
README.md
img/            (opsional: foto kopi, misalnya gayo.jpg, toraja.jpg)
```

## Menambah Foto

Taruh foto di folder `img/` dengan nama sesuai id kopi (misalnya `img/gayo.jpg`). Kalau foto belum ada, kartu otomatis memakai latar warna kopi.

## Menjalankan Lokal

Buka `index.html` di browser, atau pakai ekstensi Live Server di VS Code.
