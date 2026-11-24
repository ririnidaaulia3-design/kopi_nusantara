
/* =====================================================
   KOPI NUSANTARA
   SCRIPT.JS - VERSI LENGKAP 36 JENIS KOPI
   Dibuat oleh: Ririn Ida Aulia
   ===================================================== */


/* =====================================================
   1. MENU NAVIGASI HAMBURGER
   ===================================================== */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");

    const terbuka = nav.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", terbuka);
    menuBtn.setAttribute(
      "aria-label",
      terbuka ? "Tutup menu" : "Buka menu"
    );
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}


/* =====================================================
   2. DATA 36 JENIS KOPI NUSANTARA
   ===================================================== */

const COFFEES = [

  // SUMATRA
  {
    id: "gayo",
    nama: "Kopi Gayo",
    daerah: "Sumatra",
    asal: "Aceh Tengah dan Bener Meriah, Aceh",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Body tebal dengan aroma rempah dan earthy, serta keasaman cenderung rendah.",
    seduh: "Tubruk atau French Press"
  },
  {
    id: "mandailing",
    nama: "Kopi Mandailing",
    daerah: "Sumatra",
    asal: "Sumatera Utara",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Body penuh dengan aroma herbal dan cokelat gelap.",
    seduh: "French Press"
  },
  {
    id: "lampung",
    nama: "Robusta Lampung",
    daerah: "Sumatra",
    asal: "Lampung",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Rasa pahit tegas, body kental, dan aroma kuat.",
    seduh: "Tubruk"
  },
  {
    id: "kerinci",
    nama: "Kopi Kerinci",
    daerah: "Sumatra",
    asal: "Kerinci, Jambi",
    jenis: "Arabika",
    selera: "segar",
    profil: "Aroma floral dan buah dengan rasa manis serta keasaman segar.",
    seduh: "V60 atau Aeropress"
  },
  {
    id: "sidikalang",
    nama: "Kopi Sidikalang",
    daerah: "Sumatra",
    asal: "Dairi, Sumatera Utara",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Body tebal dengan nuansa cokelat dan rempah.",
    seduh: "French Press atau Tubruk"
  },
  {
    id: "lintong",
    nama: "Kopi Lintong",
    daerah: "Sumatra",
    asal: "Humbang Hasundutan, Sumatera Utara",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Aroma herbal dan rempah dengan karakter cokelat.",
    seduh: "French Press"
  },
  {
    id: "semendo",
    nama: "Kopi Semendo",
    daerah: "Sumatra",
    asal: "Muara Enim, Sumatera Selatan",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Aroma khas dengan karakter rempah dan cokelat.",
    seduh: "Tubruk"
  },
  {
    id: "besemah",
    nama: "Kopi Besemah",
    daerah: "Sumatra",
    asal: "Pagar Alam, Sumatera Selatan",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Rasa pahit khas robusta dengan body tebal.",
    seduh: "Tubruk atau Espresso"
  },
  {
    id: "kopi-aceh-ulee-kareng",
    nama: "Kopi Ulee Kareng",
    daerah: "Sumatra",
    asal: "Banda Aceh, Aceh",
    jenis: "Robusta dan Arabika",
    selera: "kuat",
    profil: "Memiliki rasa pekat dengan aroma rempah dan karakter kopi tradisional Aceh.",
    seduh: "Tubruk"
  },
  {
    id: "kopi-lahat",
    nama: "Kopi Lahat",
    daerah: "Sumatra",
    asal: "Lahat, Sumatera Selatan",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Memiliki rasa kuat dengan karakter pahit dan aroma khas.",
    seduh: "Tubruk"
  },

  // JAWA
  {
    id: "preanger",
    nama: "Java Preanger",
    daerah: "Jawa",
    asal: "Jawa Barat",
    jenis: "Arabika",
    selera: "manis",
    profil: "Rasa manis lembut dengan aroma cokelat dan karamel.",
    seduh: "V60"
  },
  {
    id: "malabar",
    nama: "Kopi Malabar",
    daerah: "Jawa",
    asal: "Pegunungan Malabar, Jawa Barat",
    jenis: "Arabika",
    selera: "segar",
    profil: "Aroma buah dengan keasaman cerah dan rasa bersih.",
    seduh: "V60"
  },
  {
    id: "ijen",
    nama: "Kopi Ijen",
    daerah: "Jawa",
    asal: "Dataran Tinggi Ijen, Jawa Timur",
    jenis: "Arabika",
    selera: "segar",
    profil: "Aroma floral dengan sentuhan jeruk dan rasa manis.",
    seduh: "V60 atau Aeropress"
  },
  {
    id: "temanggung",
    nama: "Robusta Temanggung",
    daerah: "Jawa",
    asal: "Temanggung, Jawa Tengah",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Rasa kuat dengan karakter pahit dan body tebal.",
    seduh: "Tubruk"
  },
  {
    id: "argopuro",
    nama: "Kopi Argopuro",
    daerah: "Jawa",
    asal: "Pegunungan Argopuro, Jawa Timur",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki karakter aroma floral dan fruity.",
    seduh: "V60"
  },
  {
    id: "java-robusta",
    nama: "Robusta Jawa",
    daerah: "Jawa",
    asal: "Jawa Timur",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Rasa pekat dan pahit dengan aroma khas cokelat.",
    seduh: "Tubruk atau Espresso"
  },
  {
    id: "kopi-gunung-halu",
    nama: "Kopi Gunung Halu",
    daerah: "Jawa",
    asal: "Bandung Barat, Jawa Barat",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki aroma floral dan fruity dengan keasaman yang menyegarkan.",
    seduh: "V60"
  },
  {
    id: "kopi-dampit",
    nama: "Kopi Dampit",
    daerah: "Jawa",
    asal: "Dampit, Malang, Jawa Timur",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Memiliki body tebal, rasa pahit, dan aroma cokelat.",
    seduh: "Tubruk atau Espresso"
  },

  // BALI
  {
    id: "kintamani",
    nama: "Kopi Kintamani",
    daerah: "Bali",
    asal: "Kintamani, Bali",
    jenis: "Arabika",
    selera: "segar",
    profil: "Segar dengan nuansa jeruk dan keasaman cerah.",
    seduh: "V60 atau Aeropress"
  },
  {
    id: "pupuan",
    nama: "Kopi Pupuan",
    daerah: "Bali",
    asal: "Pupuan, Tabanan, Bali",
    jenis: "Robusta",
    selera: "manis",
    profil: "Memiliki karakter rasa seimbang dengan aroma khas.",
    seduh: "Tubruk"
  },

  // SULAWESI
  {
    id: "toraja",
    nama: "Kopi Toraja",
    daerah: "Sulawesi",
    asal: "Tana Toraja, Sulawesi Selatan",
    jenis: "Arabika",
    selera: "kuat",
    profil: "Body penuh dengan rasa kompleks, rempah dan cokelat.",
    seduh: "French Press"
  },
  {
    id: "enrekang",
    nama: "Kopi Kalosi Enrekang",
    daerah: "Sulawesi",
    asal: "Enrekang, Sulawesi Selatan",
    jenis: "Arabika",
    selera: "manis",
    profil: "Rasa kompleks dengan sentuhan cokelat dan rempah.",
    seduh: "V60 atau French Press"
  },
  {
    id: "mamasa",
    nama: "Kopi Mamasa",
    daerah: "Sulawesi",
    asal: "Mamasa, Sulawesi Barat",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki karakter rasa seimbang dengan aroma khas.",
    seduh: "V60"
  },
  {
    id: "enrekang-robusta",
    nama: "Robusta Enrekang",
    daerah: "Sulawesi",
    asal: "Enrekang, Sulawesi Selatan",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Rasa pekat dengan karakter pahit dan aroma kuat.",
    seduh: "Tubruk"
  },
  {
    id: "kopi-sinjai",
    nama: "Kopi Sinjai",
    daerah: "Sulawesi",
    asal: "Sinjai, Sulawesi Selatan",
    jenis: "Arabika",
    selera: "manis",
    profil: "Memiliki karakter rasa seimbang dengan aroma khas kopi pegunungan.",
    seduh: "V60"
  },

  // NUSA TENGGARA
  {
    id: "bajawa",
    nama: "Kopi Bajawa",
    daerah: "Nusa Tenggara",
    asal: "Ngada, Flores, Nusa Tenggara Timur",
    jenis: "Arabika",
    selera: "manis",
    profil: "Aroma cokelat dan rempah dengan body sedang.",
    seduh: "French Press"
  },
  {
    id: "manggarai",
    nama: "Kopi Manggarai",
    daerah: "Nusa Tenggara",
    asal: "Manggarai, Flores, Nusa Tenggara Timur",
    jenis: "Arabika",
    selera: "manis",
    profil: "Karakter rasa cokelat dan rempah dengan body sedang.",
    seduh: "French Press atau V60"
  },
  {
    id: "tambora",
    nama: "Kopi Tambora",
    daerah: "Nusa Tenggara",
    asal: "Sumbawa, Nusa Tenggara Barat",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki karakter aroma khas dan rasa seimbang.",
    seduh: "V60"
  },
  {
    id: "flores",
    nama: "Kopi Flores",
    daerah: "Nusa Tenggara",
    asal: "Flores, Nusa Tenggara Timur",
    jenis: "Arabika",
    selera: "manis",
    profil: "Memiliki sentuhan cokelat, karamel, dan kacang.",
    seduh: "V60 atau French Press"
  },
  {
    id: "kopi-sumbawa",
    nama: "Kopi Sumbawa",
    daerah: "Nusa Tenggara",
    asal: "Sumbawa, Nusa Tenggara Barat",
    jenis: "Robusta",
    selera: "kuat",
    profil: "Memiliki karakter rasa pekat dengan aroma khas dan body cukup tebal.",
    seduh: "Tubruk"
  },
  {
    id: "kopi-alor",
    nama: "Kopi Alor",
    daerah: "Nusa Tenggara",
    asal: "Alor, Nusa Tenggara Timur",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki karakter aroma khas dengan rasa seimbang dan sentuhan buah.",
    seduh: "V60 atau French Press"
  },

  // PAPUA
  {
    id: "wamena",
    nama: "Kopi Wamena",
    daerah: "Papua",
    asal: "Wamena, Papua Pegunungan",
    jenis: "Arabika",
    selera: "manis",
    profil: "Lembut dan bersih dengan sentuhan cokelat dan buah.",
    seduh: "V60"
  },
  {
    id: "moanemani",
    nama: "Kopi Moanemani",
    daerah: "Papua",
    asal: "Moanemani, Papua Tengah",
    jenis: "Arabika",
    selera: "segar",
    profil: "Karakter rasa lembut, aroma bersih, dan sentuhan buah.",
    seduh: "V60"
  },
  {
    id: "dogiyai",
    nama: "Kopi Dogiyai",
    daerah: "Papua",
    asal: "Dogiyai, Papua Tengah",
    jenis: "Arabika",
    selera: "manis",
    profil: "Memiliki aroma khas dan sentuhan rasa cokelat.",
    seduh: "V60"
  },
  {
    id: "nabire",
    nama: "Kopi Nabire",
    daerah: "Papua",
    asal: "Nabire, Papua Tengah",
    jenis: "Arabika",
    selera: "segar",
    profil: "Memiliki karakter aroma kopi pegunungan dengan rasa seimbang.",
    seduh: "French Press atau V60"
  },
  {
    id: "kopi-baliem",
    nama: "Kopi Lembah Baliem",
    daerah: "Papua",
    asal: "Lembah Baliem, Papua Pegunungan",
    jenis: "Arabika",
    selera: "manis",
    profil: "Memiliki karakter rasa lembut dengan aroma khas dan sentuhan cokelat.",
    seduh: "V60 atau French Press"
  }
];


/* =====================================================
   3. PENYIMPANAN FAVORIT
   ===================================================== */

const STORAGE_KEY = "kopiNusantaraFavorites";

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    return [];
  }
}

function saveFavorites(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn("Favorit tidak dapat disimpan.", error);
  }
}

let favorites = getFavorites();

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(item => item !== id);
  } else {
    favorites.push(id);
  }

  saveFavorites(favorites);
  renderCoffees();
}


/* =====================================================
   4. TAMPILAN KARTU KOPI
   ===================================================== */

const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const count = document.getElementById("count");
const tabs = document.getElementById("tabs");

let activeRegion = "Semua";

function createCoffeeCard(coffee) {
  const favorite = isFavorite(coffee.id);

  return `
    <article class="card coffee-card">
      <div class="coffee-icon" aria-hidden="true">☕</div>

      <div class="coffee-info">
        <span class="eyebrow">${coffee.daerah}</span>
        <h3>${coffee.nama}</h3>
        <p><strong>Asal:</strong> ${coffee.asal}</p>
        <p><strong>Jenis:</strong> ${coffee.jenis}</p>
        <p>${coffee.profil}</p>
        <p><strong>Rekomendasi seduh:</strong> ${coffee.seduh}</p>

        <button
          type="button"
          class="btn ${favorite ? "light" : ""}"
          data-favorite="${coffee.id}"
          aria-pressed="${favorite}"
        >
          ${favorite ? "★ Disukai" : "☆ Suka"}
        </button>
      </div>
    </article>
  `;
}

function renderCoffees() {
  if (!grid) return;

  const keyword = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const filtered = COFFEES.filter(function (coffee) {
    const cocokDaerah =
      activeRegion === "Semua" ||
      coffee.daerah === activeRegion;

    const cocokFavorit =
      activeRegion !== "Favorit" ||
      isFavorite(coffee.id);

    const cocokPencarian =
      coffee.nama.toLowerCase().includes(keyword) ||
      coffee.asal.toLowerCase().includes(keyword) ||
      coffee.jenis.toLowerCase().includes(keyword) ||
      coffee.profil.toLowerCase().includes(keyword);

    return (
      (activeRegion === "Favorit"
        ? cocokFavorit
        : cocokDaerah) &&
      cocokPencarian
    );
  });

  grid.innerHTML = filtered.length
    ? filtered.map(createCoffeeCard).join("")
    : `<p class="empty">Kopi tidak ditemukan.</p>`;

  if (count) {
    count.textContent =
      `Menampilkan ${filtered.length} dari ${COFFEES.length} jenis kopi`;
  }
}

if (tabs) {
  tabs.querySelectorAll("[data-daerah]").forEach(function (button) {
    button.addEventListener("click", function () {
      activeRegion = button.dataset.daerah;

      tabs.querySelectorAll("button").forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      renderCoffees();
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", renderCoffees);
}

if (grid) {
  grid.addEventListener("click", function (event) {
    const button = event.target.closest("[data-favorite]");
    if (!button) return;

    toggleFavorite(button.dataset.favorite);
  });
}

renderCoffees();


/* =====================================================
   5. REKOMENDASI KOPI BERDASARKAN SELERA
   ===================================================== */

const selera = document.getElementById("selera");
const rekom = document.getElementById("rekom");

if (selera && rekom) {
  selera.addEventListener("change", function () {
    const pilihan = selera.value;

    if (!pilihan) {
      rekom.innerHTML = "";
      return;
    }

    const hasil = COFFEES.filter(function (coffee) {
      return coffee.selera === pilihan;
    });

    rekom.innerHTML = hasil.slice(0, 6).map(function (coffee) {
      return `
        <article class="card feature">
          <div class="icon">☕</div>
          <h3>${coffee.nama}</h3>
          <p><strong>Daerah:</strong> ${coffee.daerah}</p>
          <p>${coffee.profil}</p>
          <p><strong>Metode seduh:</strong> ${coffee.seduh}</p>
        </article>
      `;
    }).join("");
  });
}


/* =====================================================
   6. FAKTA KOPI ACAK
   ===================================================== */

const facts = [
  "Indonesia merupakan salah satu negara penghasil kopi di dunia.",
  "Arabika umumnya tumbuh baik di dataran tinggi.",
  "Robusta memiliki kandungan kafein lebih tinggi dibandingkan Arabika.",
  "Kopi Gayo berasal dari wilayah dataran tinggi Aceh.",
  "Kopi Kintamani dikenal dengan karakter rasa citrus.",
  "Kopi Toraja berasal dari Sulawesi Selatan.",
  "Kopi Bajawa berasal dari Pulau Flores, Nusa Tenggara Timur.",
  "V60 merupakan salah satu metode penyeduhan manual.",
  "French Press menggunakan alat dengan penyaring dan penekan.",
  "Cold Brew dibuat dengan merendam bubuk kopi menggunakan air dingin.",
  "Ukuran gilingan kopi dapat memengaruhi hasil seduhan.",
  "Suhu air memengaruhi proses ekstraksi kopi.",
  "Kopi tubruk merupakan salah satu cara penyajian kopi tradisional Indonesia.",
  "Kopi Wamena dikenal sebagai salah satu kopi Arabika dari Papua.",
  "Kopi Lampung terkenal sebagai salah satu kopi Robusta Indonesia.",
  "Kopi Flores Bajawa berasal dari daerah Ngada.",
  "Kopi Mandailing berasal dari Sumatera Utara.",
  "Kopi Kintamani tumbuh di kawasan dataran tinggi Bali."
];

const factText = document.getElementById("fact-text");
const factBtn = document.getElementById("fact-btn");

function showRandomFact() {
  if (!factText) return;

  const random = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[random];
}

if (factText) showRandomFact();

if (factBtn) {
  factBtn.addEventListener("click", showRandomFact);
}


/* =====================================================
   7. HALAMAN CARA SEDUH
   PILIHAN METODE DAN LANGKAH-LANGKAH
   ===================================================== */

const brewMethods = {
  tubruk: {
    nama: "Tubruk",
    rasio: "1 : 15",
    suhu: "90–95°C",
    waktu: "4 menit",
    durasi: 240,
    gram: 15,
    langkah: [
      "Siapkan kopi bubuk dengan gilingan sedang hingga kasar.",
      "Masukkan sekitar 17 gram kopi ke dalam cangkir.",
      "Panaskan 250 ml air dengan suhu sekitar 90–95°C.",
      "Tuangkan air panas ke dalam cangkir.",
      "Aduk perlahan hingga kopi tercampur.",
      "Diamkan sekitar 4 menit sampai ampas mengendap.",
      "Kopi tubruk siap dinikmati."
    ]
  },

  v60: {
    nama: "V60",
    rasio: "1 : 15",
    suhu: "90–96°C",
    waktu: "3 menit",
    durasi: 180,
    gram: 15,
    langkah: [
      "Siapkan dripper V60, kertas filter, teko, dan server.",
      "Letakkan kertas filter pada dripper.",
      "Basahi kertas filter menggunakan air panas.",
      "Masukkan sekitar 17 gram kopi dengan gilingan sedang.",
      "Tuangkan sedikit air untuk proses blooming selama 30–45 detik.",
      "Tuangkan sisa air secara perlahan dengan gerakan melingkar.",
      "Tunggu hingga air selesai menetes.",
      "Kopi V60 siap disajikan."
    ]
  },

  french: {
    nama: "French Press",
    rasio: "1 : 15",
    suhu: "92–96°C",
    waktu: "4 menit",
    durasi: 240,
    gram: 15,
    langkah: [
      "Siapkan French Press dan kopi dengan gilingan kasar.",
      "Masukkan sekitar 17 gram kopi ke dalam wadah.",
      "Panaskan 250 ml air dengan suhu sekitar 92–96°C.",
      "Tuangkan air panas ke dalam wadah.",
      "Aduk perlahan agar seluruh kopi terkena air.",
      "Pasang tutup French Press tanpa menekan plunger.",
      "Diamkan selama sekitar 4 menit.",
      "Tekan plunger secara perlahan.",
      "Tuangkan kopi ke dalam cangkir."
    ]
  },

  aeropress: {
    nama: "Aeropress",
    rasio: "1 : 12",
    suhu: "85–92°C",
    waktu: "2 menit",
    durasi: 120,
    gram: 20.8,
    langkah: [
      "Siapkan Aeropress, filter, dan kopi bubuk dengan gilingan sedang.",
      "Pasang filter pada tutup Aeropress.",
      "Basahi filter menggunakan air panas.",
      "Masukkan sekitar 21 gram kopi ke dalam Aeropress.",
      "Tuangkan sekitar 250 ml air panas.",
      "Aduk perlahan selama beberapa detik.",
      "Pasang plunger dan diamkan sekitar 1–2 menit.",
      "Tekan plunger secara perlahan sampai air selesai turun.",
      "Kopi Aeropress siap dinikmati."
    ]
  }
};

const methodTabs = document.getElementById("metode-tabs");
const infoNama = document.getElementById("info-nama");
const infoRasio = document.getElementById("info-rasio");
const infoSuhu = document.getElementById("info-suhu");
const infoWaktu = document.getElementById("info-waktu");
const langkah = document.getElementById("langkah");

const airMl = document.getElementById("air-ml");
const hasilGram = document.getElementById("hasil-gram");

let activeMethod = "tubruk";

function updateCoffeeCalculator() {
  if (!airMl || !hasilGram) return;

  const jumlahAir = Number(airMl.value);
  const metode = brewMethods[activeMethod];

  if (!jumlahAir || jumlahAir <= 0) {
    hasilGram.textContent = "Masukkan jumlah air yang benar.";
    return;
  }

  const jumlahKopi = jumlahAir / metode.gram;

  hasilGram.textContent =
    `Kamu membutuhkan sekitar ${jumlahKopi.toFixed(1)} gram kopi untuk ${jumlahAir} ml air.`;
}


/* =====================================================
   8. TIMER CARA SEDUH
   ===================================================== */

const timerStart = document.getElementById("t-start");
const timerReset = document.getElementById("t-reset");
const timerDisplay = document.getElementById("timer-display");
const timerBar = document.getElementById("timer-bar");

let timerInterval = null;
let remainingSeconds = brewMethods.tubruk.durasi;
let totalSeconds = brewMethods.tubruk.durasi;

function displayTimer() {
  if (!timerDisplay) return;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (timerBar) {
    const progress =
      ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

    timerBar.style.width = `${progress}%`;
  }
}

function resetBrewTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  totalSeconds = brewMethods[activeMethod].durasi;
  remainingSeconds = totalSeconds;

  if (timerStart) {
    timerStart.textContent = "Mulai";
    timerStart.disabled = false;
  }

  displayTimer();
}

function finishBrewTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  if (timerDisplay) {
    timerDisplay.textContent = "Selesai!";
  }

  if (timerBar) {
    timerBar.style.width = "100%";
  }

  if (timerStart) {
    timerStart.textContent = "Mulai Lagi";
    timerStart.disabled = false;
  }

  alert("Waktu seduh selesai! Kopi siap dinikmati ☕");
}

if (timerStart) {
  timerStart.addEventListener("click", function () {
    if (timerInterval !== null) return;

    if (remainingSeconds <= 0) {
      resetBrewTimer();
    }

    timerStart.textContent = "Berjalan...";
    timerStart.disabled = true;

    timerInterval = setInterval(function () {
      remainingSeconds--;
      displayTimer();

      if (remainingSeconds <= 0) {
        finishBrewTimer();
      }
    }, 1000);
  });
}

if (timerReset) {
  timerReset.addEventListener("click", resetBrewTimer);
}

function selectBrewMethod(metode) {
  if (!brewMethods[metode]) return;

  activeMethod = metode;

  const data = brewMethods[metode];

  if (infoNama) infoNama.textContent = data.nama;
  if (infoRasio) infoRasio.textContent = data.rasio;
  if (infoSuhu) infoSuhu.textContent = data.suhu;
  if (infoWaktu) infoWaktu.textContent = data.waktu;

  if (langkah) {
    langkah.innerHTML = data.langkah.map(function (item) {
      return `<li>${item}</li>`;
    }).join("");
  }

  if (methodTabs) {
    methodTabs.querySelectorAll("[data-metode]").forEach(function (button) {
      const aktif = button.dataset.metode === metode;

      button.classList.toggle("active", aktif);
      button.setAttribute("aria-pressed", aktif ? "true" : "false");
    });
  }

  resetBrewTimer();
  updateCoffeeCalculator();
}

if (methodTabs) {
  methodTabs.querySelectorAll("[data-metode]").forEach(function (button) {
    button.addEventListener("click", function () {
      selectBrewMethod(button.dataset.metode);
    });
  });
}

if (airMl) {
  airMl.addEventListener("input", updateCoffeeCalculator);
}

if (methodTabs && infoNama && langkah) {
  selectBrewMethod("tubruk");
}

displayTimer();


/* =====================================================
   9. VALIDASI FORM KONTAK
   ===================================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const nama = document.getElementById("c-name");
    const email = document.getElementById("c-email");
    const pesan = document.getElementById("c-msg");

    const errNama = document.getElementById("err-name");
    const errEmail = document.getElementById("err-email");
    const errPesan = document.getElementById("err-msg");

    let valid = true;

    if (errNama) errNama.textContent = "";
    if (errEmail) errEmail.textContent = "";
    if (errPesan) errPesan.textContent = "";

    if (!nama || !nama.value.trim()) {
      if (errNama) errNama.textContent = "Nama wajib diisi.";
      valid = false;
    }

    if (!email || !email.value.trim()) {
      if (errEmail) errEmail.textContent = "Email wajib diisi.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      if (errEmail) errEmail.textContent = "Format email tidak valid.";
      valid = false;
    }

    if (!pesan || pesan.value.trim().length < 10) {
      if (errPesan) errPesan.textContent = "Pesan minimal 10 karakter.";
      valid = false;
    }

    event.preventDefault();

    if (!valid) return;

    alert("Pesan berhasil diperiksa. Terima kasih sudah menghubungi kami!");
  });
}


/* =====================================================
   10. INFORMASI JUMLAH KOPI
   ===================================================== */

const totalCoffee = document.getElementById("total-coffee");

if (totalCoffee) {
  totalCoffee.textContent = COFFEES.length;
}


/* =====================================================
   11. CEK JUMLAH DATA KOPI
   ===================================================== */

console.log("TOTAL KOPI:", COFFEES.length);
console.log("DAFTAR KOPI:", COFFEES);


/* =====================================================
   AKHIR SCRIPT KOPI NUSANTARA
   TOTAL: 36 JENIS KOPI
   ===================================================== */
