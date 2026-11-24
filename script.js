
/* =====================================================
   KOPI NUSANTARA
   SCRIPT.JS - VERSI LENGKAP
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
   2. DATA 28 JENIS KOPI NUSANTARA
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
  }

];


/* =====================================================
   3. PENYIMPANAN FAVORIT
   ===================================================== */

const STORAGE_KEY = "kopiNusantaraFavorites";

function getFavorites() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || [];
  } catch (error) {
    return [];
  }
}

function saveFavorites(data) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

let favorites = getFavorites();

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(function (item) {
      return item !== id;
    });
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

      <div class="coffee-icon" aria-hidden="true">
        ☕
      </div>

      <div class="coffee-info">

        <span class="eyebrow">
          ${coffee.daerah}
        </span>

        <h3>${coffee.nama}</h3>

        <p>
          <strong>Asal:</strong>
          ${coffee.asal}
        </p>

        <p>
          <strong>Jenis:</strong>
          ${coffee.jenis}
        </p>

        <p>
          ${coffee.profil}
        </p>

        <p>
          <strong>Rekomendasi seduh:</strong>
          ${coffee.seduh}
        </p>

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

  let filtered = COFFEES.filter(function (coffee) {

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

  grid.innerHTML = filtered.map(createCoffeeCard).join("");

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

    if (hasil.length === 0) {
      rekom.innerHTML = "<p>Belum ada rekomendasi kopi.</p>";
      return;
    }

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
  "Kopi Wamena dikenal sebagai salah satu kopi Arabika dari Papua."
];

const factText = document.getElementById("fact-text");
const factBtn = document.getElementById("fact-btn");

function showRandomFact() {

  if (!factText) return;

  const random = Math.floor(Math.random() * facts.length);

  factText.textContent = facts[random];
}

if (factText) {
  showRandomFact();
}

if (factBtn) {
  factBtn.addEventListener("click", showRandomFact);
}


/* =====================================================
   7. KALKULATOR RASIO KOPI DAN AIR
   Digunakan jika elemen tersedia di halaman seduh.
   ===================================================== */

const coffeeAmount = document.getElementById("coffee-amount");
const coffeeRatio = document.getElementById("coffee-ratio");
const ratioResult = document.getElementById("ratio-result");
const calculateRatio = document.getElementById("calculate-ratio");

function calculateWater() {

  if (!coffeeAmount || !coffeeRatio || !ratioResult) return;

  const grams = Number(coffeeAmount.value);
  const ratio = Number(coffeeRatio.value);

  if (grams <= 0 || ratio <= 0) {
    ratioResult.textContent = "Masukkan jumlah kopi dan rasio yang benar.";
    return;
  }

  const water = grams * ratio;

  ratioResult.textContent =
    `Kamu membutuhkan sekitar ${water} ml air.`;
}

if (calculateRatio) {
  calculateRatio.addEventListener("click", calculateWater);
}


/* =====================================================
   8. TIMER PENYEDUHAN KOPI
   Digunakan jika elemen timer tersedia.
   ===================================================== */

const brewStart = document.getElementById("brew-start");
const brewReset = document.getElementById("brew-reset");
const brewDisplay = document.getElementById("brew-time");

let brewInterval = null;
let remainingSeconds = 180;

function displayBrewTime() {

  if (!brewDisplay) return;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  brewDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

if (brewDisplay) {
  displayBrewTime();
}

if (brewStart) {

  brewStart.addEventListener("click", function () {

    if (brewInterval) return;

    if (remainingSeconds <= 0) {
      remainingSeconds = 180;
    }

    brewInterval = setInterval(function () {

      remainingSeconds--;

      displayBrewTime();

      if (remainingSeconds <= 0) {

        clearInterval(brewInterval);
        brewInterval = null;

        brewDisplay.textContent = "Selesai! Kopi siap dinikmati ☕";

      }

    }, 1000);

  });
}

if (brewReset) {

  brewReset.addEventListener("click", function () {

    clearInterval(brewInterval);
    brewInterval = null;

    remainingSeconds = 180;

    displayBrewTime();

  });

}


/* =====================================================
   9. VALIDASI FORM KONTAK
   ===================================================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const pesan = document.getElementById("pesan");

    if (
      (nama && !nama.value.trim()) ||
      (email && !email.value.trim()) ||
      (pesan && !pesan.value.trim())
    ) {

      event.preventDefault();

      alert("Mohon lengkapi semua kolom terlebih dahulu.");

      return;
    }

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
   AKHIR SCRIPT KOPI NUSANTARA
   ===================================================== */
