# 🏛️ Mitra KPU Bea Cukai - Sistem Layanan Digital

Website sistem layanan digital untuk Mitra KPU Bea Cukai Tanjung Priok Tipe A. Desain modern, elegan, dan responsif dengan efek glassmorphism dan animasi premium.

## ✨ Fitur

- 🎨 Desain modern dengan glassmorphism effect
- 💎 Animasi smooth dan interaktif
- 📱 Responsive untuk semua perangkat
- 🌊 Gradient biru premium yang elegan
- ⚡ Hover effects yang menarik
- 🎯 4 menu layanan utama:
  - Permohonan Pengajuan Cuti
  - Izin Keluar Kantor
  - Pengajuan Tukar Piket 24/7
  - Laporan Kedisiplinan

## 🚀 Demo

Live demo: [https://your-site.pages.dev](https://your-site.pages.dev)

## 📁 Struktur File
```
mitra-bea-cukai/
├── index.html          # File utama website
├── logo.png           # Logo Mitra Bea Cukai
└── README.md          # Dokumentasi
```

## 🔧 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/mitra-bea-cukai.git
cd mitra-bea-cukai
```

### 2. Buka di Browser

Cukup buka file `index.html` di browser Anda, atau gunakan Live Server di VS Code.

## 🔗 Konfigurasi Link Form

Edit file `index.html` dan ganti placeholder link dengan link form Anda:
```html
<!-- Cari dan ganti bagian ini -->
<a href="LINK_FORM_CUTI_ANDA" class="menu-card">
<a href="LINK_FORM_IZIN_ANDA" class="menu-card">
<a href="LINK_FORM_PIKET_ANDA" class="menu-card">
<a href="LINK_FORM_LAPORAN_ANDA" class="menu-card">

<!-- Contoh setelah diganti -->
<a href="https://forms.gle/abcdefghijk" class="menu-card">
```

## 📤 Deploy ke GitHub Pages

### Metode 1: Via GitHub Website

1. Push code ke repository GitHub
2. Buka **Settings** > **Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save**
5. Website akan live di `https://username.github.io/mitra-bea-cukai`

### Metode 2: Via Command Line
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/mitra-bea-cukai.git
git push -u origin main
```

## ☁️ Deploy ke Cloudflare Pages

1. Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Pilih **Pages** > **Create a project**
3. Connect ke repository GitHub Anda
4. Konfigurasi:
   - **Project name**: `mitra-bea-cukai`
   - **Production branch**: `main`
   - **Build command**: (kosongkan)
   - **Build output directory**: (kosongkan)
5. Klik **Save and Deploy**
6. Website akan live di `https://mitra-bea-cukai.pages.dev`

## 🎨 Kustomisasi

### Mengganti Logo

Ganti file `logo.png` dengan logo Anda. Pastikan ukuran optimal (500x500px, format PNG dengan background transparan).

### Mengganti Warna

Edit bagian CSS di `index.html`:
```css
/* Header gradient */
.header {
    background: linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%);
}

/* Background body */
body {
    background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2d5f8d 100%);
}
```

### Menambah Menu Baru

Salin struktur menu card dan sesuaikan:
```html
<a href="LINK_ANDA" class="menu-card">
    <div class="icon-wrapper">
        <div class="icon">🎯</div>
    </div>
    <div class="menu-content">
        <h3>Judul Menu Baru</h3>
    </div>
    <div class="accent-line"></div>
</a>
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🛠️ Teknologi

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Vanilla JavaScript
- Responsive Design

## 📝 License

MIT License - bebas digunakan untuk keperluan pribadi maupun komersial.

## 👤 Author

**Tim IT Mitra KPU Bea Cukai**
- Website: [https://mitra-bea-cukai.pages.dev](https://mitra-bea-cukai.pages.dev)

## 🤝 Contributing

Kontribusi, issues, dan feature requests sangat diterima!

## ⭐ Show Your Support

Jika project ini membantu Anda, berikan ⭐ di repository ini!

---

**Made with ❤️ for Mitra KPU Bea Cukai Tanjung Priok**
