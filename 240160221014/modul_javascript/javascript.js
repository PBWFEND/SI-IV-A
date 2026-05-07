// Pesan selamat datang
alert("Selamat datang di Portofolio Fauzan!");

// Array warna background
const colors = [
    "#f4f4f4",
    "#dff9fb",
    "#c7ecee",
    "#f6e58d",
    "#ffbe76",
    "#badc58",
    "#e056fd",
    "#7ed6df"
];

// Pilih warna secara acak
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Tambahkan efek transisi
document.body.style.transition = "background-color 1s ease";

// Ubah background body
document.body.style.backgroundColor = randomColor;