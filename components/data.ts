// ─── CONSTANTS ────────────────────────────────────────────────────────────────
export const WA_NUMBER = "6282122301730"; // ← ganti nomor WA CUTBAE
export const WA_MESSAGE = encodeURIComponent(
  "Halo CUTBAE, saya mau booking haircut. Bisa dibantu?"
);
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Ulasan", href: "#testimonials" },
  { label: "Galeri", href: "#gallery" },
  { label: "Lokasi", href: "#location" },
];

export const SERVICES_HAIRCUT = [
  {
    icon: "✂",
    name: "Bae's Haircut",
    desc: "Potongan presisi yang disesuaikan dengan bentuk wajah dan gaya hidupmu. Konsultasi gratis setiap sesi.",
    price: "Rp 80.000",
    tag: "Paling Populer",
  },
  {
    icon: "✂",
    name: "Women's Haircut",
    desc: "Potongan khusus wanita untuk tampilan yang lebih segar dan modern. Termasuk cuci dan styling.",
    price: "Rp 95.000",
    tag: null,
  },
];

export const SERVICES_COLORING = [
  {
    icon: "◈",
    name: "Black/Dark Brown",
    desc: "Warna natural untuk menutupi uban atau memberikan kesan rambut lebih tebal. Hanya untuk rambut pendek.",
    price: "Mulai Rp 100.000",
    tag: "Paling Populer",
  },
  {
    icon: "◈",
    name: "Basic Hair Color",
    desc: "Pilihan warna dasar yang solid untuk tampilan baru yang fresh. Konsultasi warna tersedia.",
    price: "Mulai Rp 125.000",
    tag: null,
  },
  {
    icon: "◈",
    name: "Fashion Hair Color",
    desc: "Warna-warna ekspresif dengan teknik bleaching berkualitas tinggi untuk hasil maksimal.",
    price: "Mulai Rp 225.000",
    tag: "Premium",
  },
];

export const SERVICES_TREATMENTS = [
  {
    icon: "◉",
    name: "DownPerm",
    desc: "Solusi untuk rambut samping yang jabrik agar lebih rapi dan mudah diatur.",
    price: "Mulai Rp 100.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Hairmask",
    desc: "Perawatan intensif untuk menutrisi rambut yang kering dan rusak akibat polusi atau kimia.",
    price: "Mulai Rp 50.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Creambath",
    desc: "Pijat relaksasi kulit kepala dengan nutrisi krim khusus untuk kesegaran maksimal.",
    price: "Mulai Rp 80.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Perming",
    desc: "Teknik pengeritingan modern untuk memberikan tekstur dan volume pada rambutmu.",
    price: "Mulai Rp 325.000",
    tag: "Paling Populer",
  },
  {
    icon: "◉",
    name: "Smoothing",
    desc: "Pelurusan rambut agar tampak lebih jatuh, lembut, dan berkilau alami.",
    price: "Mulai Rp 200.000",
    tag: "Premium",
  },
  {
    icon: "◉",
    name: "Smoothing & Shape",
    desc: "Paket lengkap pelurusan sekaligus pembentukan gaya rambut yang kamu inginkan.",
    price: "Mulai Rp 350.000",
    tag: null,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rizky A.",
    rating: 5,
    text: "Pelayanan bintang 5 dan tempatnya nyaman banget! Baru pertama datang langsung jadi langganan. Barbernya detail banget, rapi terus hasilnya memuaskan.",
    handle: "@rizky.dev",
  },
  {
    name: "Dimas F.",
    rating: 5,
    text: "Kualitas nggak pernah gagal! Sudah 8 bulan langganan di sini, belum pernah kecewa. Konsisten banget kualitasnya dari dulu sampai sekarang.",
    handle: "@dimasfc_",
  },
  {
    name: "Arief W.",
    rating: 5,
    text: "Tempat nyaman, sambil nunggu dikasih air mineral. Barbernya ramah dan paham apa yang gue mau tanpa harus banyak jelasin.",
    handle: "@arief.w",
  },
  {
    name: "Bagas K.",
    rating: 5,
    text: "Satu-satunya barbershop di Karawang yang bikin gue mau jauh-jauh datang. Worth it banget harganya dibanding hasilnya.",
    handle: "@bagask",
  },
];

export const CAPSTERS = [
  { name: "Kaka", role: "Barber Senior", bio: "Ahli dalam classic fade dan pembentukan janggut yang presisi." },
  { name: "Eguh", role: "Arsitek Gaya", bio: "Spesialis dalam textured crop modern dan penataan rambut kreatif." },
  { name: "Arif", role: "Master Barber", bio: "Andalan untuk pompadour rapi dan teknik gunting tradisional." },
  { name: "Heru", role: "Spesialis Grooming", bio: "Fokus pada presisi dengan mata tajam untuk penyesuaian bentuk wajah." },
];

export const GALLERY_ITEMS = [
  { img: "/1.webp", label: "Classic Fade" },
  { img: "/2.webp", label: "Textured Crop" },
  { img: "/3.webp", label: "Pompadour" },
  { img: "/4.webp", label: "Undercut" },
  { img: "/5.webp", label: "Slick Back" },
  { img: "/6.webp", label: "Buzz Cut" },
];
