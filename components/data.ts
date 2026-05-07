// ─── CONSTANTS ────────────────────────────────────────────────────────────────
export const WA_NUMBER = "6282122301730"; // ← ganti nomor WA CUTBAE
export const WA_MESSAGE = encodeURIComponent(
  "Halo CUTBAE, saya mau booking haircut. Bisa dibantu?"
);
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export const SERVICES_HAIRCUT = [
  {
    icon: "✂",
    name: "Bae's Haircut",
    desc: "Precision cut tailored to your face shape and lifestyle. Konsultasi gratis setiap sesi.",
    price: "Rp 80.000",
    tag: "Most Popular",
  },
  {
    icon: "✂",
    name: "Women's Haircut",
    desc: "Pomade, wax, clay — kita set sesuai tekstur rambut lo. Hasil natural atau bold, lo yang tentuin.",
    price: "Rp 95.000",
    tag: null,
  },
];

export const SERVICES_COLORING = [
  {
    icon: "◈",
    name: "Black/Dark Brown",
    desc: "Natural color result. Only available for short hair.",
    price: "From Rp 100.000",
    tag: "Most Popular",
  },
  {
    icon: "◈",
    name: "Basic Hair Color",
    desc: "Pomade, wax, clay — kita set sesuai tekstur rambut lo. Hasil natural atau bold, lo yang tentuin.",
    price: "From Rp 125.000",
    tag: null,
  },
  {
    icon: "◈",
    name: "Fashion Hair Color",
    desc: "Rileksasi skalp dengan hot stone massage. Cocok setelah hari panjang.",
    price: "From Rp 225.000",
    tag: "Premium",
  },
];

export const SERVICES_TREATMENTS = [
  {
    icon: "◉",
    name: "DownPerm",
    desc: "Precision cut tailored to your face shape and lifestyle. Konsultasi gratis setiap sesi.",
    price: "From Rp 100.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Hairmask",
    desc: "Pomade, wax, clay — kita set sesuai tekstur rambut lo. Hasil natural atau bold, lo yang tentuin.",
    price: "From Rp 50.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Creambath",
    desc: "Rileksasi skalp dengan hot stone massage. Cocok setelah hari panjang.",
    price: "From Rp 80.000",
    tag: null,
  },
  {
    icon: "◉",
    name: "Perming",
    desc: "Rileksasi skalp dengan hot stone massage. Cocok setelah hari panjang.",
    price: "From Rp 325.000",
    tag: "Most Popular",
  },
  {
    icon: "◉",
    name: "Smoothing",
    desc: "Rileksasi skalp dengan hot stone massage. Cocok setelah hari panjang.",
    price: "From Rp 200.000",
    tag: "Premium",
  },
  {
    icon: "◉",
    name: "Smoothing & shape",
    desc: "Rileksasi skalp dengan hot stone massage. Cocok setelah hari panjang.",
    price: "From Rp 350.000",
    tag: null,
  },
];



export const TESTIMONIALS = [
  {
    name: "Rizky A.",
    rating: 5,
    text: "5-Stars Service and cozy place! Baru pertama dateng langsung jadi langganan. Barbernya detail banget, rapih terus hasilnya.",
    handle: "@rizky.dev",
  },
  {
    name: "Dimas F.",
    rating: 5,
    text: "Quality never fails! Udah 8 bulan langganan di sini, belum pernah kecewa. Konsisten banget kualitasnya.",
    handle: "@dimasfc_",
  },
  {
    name: "Arief W.",
    rating: 5,
    text: "Tempat nyaman, sambil nunggu dikasih air mineral. Barbernya friendly dan ngerti apa yang gue mau tanpa banyak dijelasin.",
    handle: "@arief.w",
  },
  {
    name: "Bagas K.",
    rating: 5,
    text: "Satu-satunya barbershop di Karawang yang bikin gue mau jauh-jauh dateng. Worth it banget.",
    handle: "@bagask",
  },
];

export const CAPSTERS = [
  { name: "Kaka", role: "Senior Barber", bio: "Expert in classic fades and precision beard sculpting." },
  { name: "Eguh", role: "Style Architect", bio: "Specializes in modern textured crops and creative styling." },
  { name: "Arif", role: "Master Barber", bio: "Your go-to for clean pompadours and traditional scissor cuts." },
  { name: "Heru", role: "Grooming Specialist", bio: "Precision focused with a keen eye for face-shape tailoring." },
];

export const GALLERY_ITEMS = [
  { img: "/1.webp", label: "Classic Fade" },
  { img: "/2.webp", label: "Textured Crop" },
  { img: "/3.webp", label: "Pompadour" },
  { img: "/4.webp", label: "Undercut" },
  { img: "/5.webp", label: "Slick Back" },
  { img: "/6.webp", label: "Buzz Cut" },
];
