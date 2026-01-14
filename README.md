# 🏛️ Portal Mitra — KPU Bea Cukai Tanjung Priok (PWA)

Portal Mitra adalah **aplikasi web (PWA)** sebagai menu utama untuk mengakses layanan digital Mitra KPU Bea Cukai Tanjung Priok.

> Catatan penting: Aplikasi ini didesain **wajib menggunakan internet**. Saat offline, aplikasi akan menampilkan pemberitahuan tidak ada koneksi.

---

## ✨ Fitur Utama

- 📱 **Bisa di-install di Android** (PWA / Add to Home Screen)
- 🌐 **Wajib internet** (network-only; saat offline tampil pesan)
- 🎯 Menu layanan terintegrasi dalam **1 domain**:
  - 📅 Pengajuan Cuti
  - 🚪 Izin Keluar Area
  - 🔄 Tukar Jadwal Piket
  - 📋 Laporan Kedisiplinan (Laporan Pelanggaran)
- 🎨 Tampilan modern, responsif, mobile-friendly

---

## 🚀 Live

- Halaman utama: `https://<project>.pages.dev/`
- Alias (jika ada): `https://<project>.pages.dev/design1.html` → redirect ke `/`

---

## 📁 Struktur Project (Disarankan)

> Pastikan penamaan file **case-sensitive** (harus `index.html`, bukan `Index.html`).

```
/ (root)
├─ index.html                # Portal menu utama
├─ manifest.json             # PWA manifest
├─ sw.js                     # Service Worker (network-only + offline page)
├─ icon-192.png              # Icon PWA 192x192 (PNG)
├─ icon-512.png              # Icon PWA 512x512 (PNG)
├─ logo_mitra_bc_priok.webp  # Logo header (opsional)
├─ design1.html              # (opsional) redirect ke /
│
├─ cuti/
│  └─ index.html             # Aplikasi Pengajuan Cuti
├─ izin/
│  └─ index.html             # Aplikasi Izin Keluar Area
├─ tukar-piket/
│  └─ index.html             # Aplikasi Tukar Jadwal Piket
└─ laporan/
   └─ index.html             # Aplikasi Laporan Pelanggaran
```

---

## 📲 Install di Android (PWA)

1. Buka website di **Chrome Android**.
2. Jika muncul banner **Install**, klik **Install**.
   - Alternatif: menu (⋮) → **Install app** / **Add to Home screen**.

### Kenapa perlu `icon-192.png` & `icon-512.png`?
- **192x192**: icon di home screen/app drawer.
- **512x512**: resolusi tinggi & splash screen.

> Format harus **PNG** dan ukuran sesuai (192×192 dan 512×512).

---

## ☁️ Deploy ke Cloudflare Pages

### Metode (Connect to Git)
1. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**.
2. Connect repository GitHub.
3. Build settings:
   - **Framework preset**: None
   - **Build command**: (kosong)
   - **Build output directory**: (kosong / root)
4. Deploy.

> Cloudflare Pages otomatis HTTPS (syarat PWA terpenuhi).

---

## 🔧 Konfigurasi Tiap Layanan (Ringkas)

Semua layanan di folder (`/cuti`, `/izin`, `/tukar-piket`, `/laporan`) umumnya menggunakan:
- **Google Sheets** sebagai database
- **Google Apps Script** sebagai backend (Web App)

### Prinsip umum konfigurasi
1. Pastikan Apps Script sudah **Deploy → Web app**.
2. Akses: **Who has access: Anyone**.
3. Di masing-masing `index.html` layanan, cari variabel konfigurasi URL (contoh: `SCRIPT_URL`, `GOOGLE_SCRIPT_URL`, dll) lalu isi dengan URL Web App Apps Script.

> Nama variabel bisa berbeda tiap layanan, jadi gunakan pencarian (Ctrl+F) kata kunci: `SCRIPT`, `GOOGLE`, `URL`, `exec`.

---

## 📅 Layanan: Pengajuan Cuti (folder `/cuti/`)

### Umumnya membutuhkan Google Sheets:
- `Karyawan`
- `Pengajuan Cuti`
- `Admin`

### Catatan
- Nama sheet harus **persis** sesuai yang dipakai aplikasi.
- Jika ada fitur unggah surat dokter: tunggu proses upload/kompres selesai sebelum submit.

---

## 🚪 Layanan: Izin Keluar Area (folder `/izin/`)

### Umumnya membutuhkan Google Sheets:
- `Absensi`
- `Karyawan`
- `Settings`

### Struktur ringkas contoh
**Absensi** (contoh kolom):
`ID | Nama | Tipe | WaktuKeluar | WaktuMasuk | Izin... | Keperluan | Tanggal | Jam | Foto`

**Karyawan**:
`ID | Nama`

**Settings**:
`Type | Value`

---

## 🔄 Layanan: Tukar Jadwal Piket (folder `/tukar-piket/`)

### Umumnya membutuhkan Google Sheets:
- `Daftar_Petugas`
- `Data_Pengajuan`

Catatan:
- Jika daftar petugas tidak muncul, pastikan `Daftar_Petugas` terisi mulai baris 2.

---

## 📋 Layanan: Laporan Kedisiplinan / Laporan Pelanggaran (folder `/laporan/`)

### Umumnya membutuhkan Google Sheets:
- `Daftar_Petugas` (nama pelapor & pelanggar)
- `Laporan_Pelanggaran`

Catatan:
- Validasi umum: **Pelapor ≠ Pelanggar**.
- Foto (jika ada) sering disimpan sebagai **base64**.

---

## 🌐 Catatan Penting (Agar Tidak Error)

- **Case-sensitive**: `index.html` harus huruf kecil.
- Pastikan setiap folder layanan memiliki `index.html`.
- Jika klik menu kembali ke halaman awal, biasanya karena:
  - Folder tidak ada / salah nama
  - File `index.html` salah kapitalisasi
  - Deploy belum ter-update

---

## 🧩 Teknologi

- HTML5, CSS3, JavaScript
- Tailwind CSS (CDN)
- Google Apps Script + Google Sheets
- Cloudflare Pages (hosting)

---

## 📝 Lisensi

MIT License (sesuaikan jika diperlukan).

---

## 👤 Kontak

Jika perlu bantuan/dukungan internal, gunakan kontak yang tertera di aplikasi (WhatsApp/Email Admin).
