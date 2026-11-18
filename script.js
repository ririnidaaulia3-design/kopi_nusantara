/* ============================================================
   Kopi Nusantara - script.js
   Fitur: menu HP, fakta acak, rekomendasi kopi, tab + pencarian,
   favorit (localStorage), timer seduh, kalkulator rasio,
   dan form kontak dengan validasi.
   ============================================================ */
(function () {
  "use strict";

  // ---------- localStorage aman ----------
  function getStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function setStore(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* abaikan */ }
  }
  function readJSON(key, fallback) {
    try { return JSON.parse(getStore(key) || "") || fallback; } catch (e) { return fallback; }
  }

  // ---------- DATA (boleh kamu edit / tambah) ----------
  var COFFEES = [
    { id: "gayo", nama: "Gayo", daerah: "Sumatra", asal: "Aceh Tengah & Bener Meriah, Aceh", jenis: "Arabika", selera: "kuat",
      profil: "Body tebal dengan aroma rempah dan earthy, keasaman cenderung rendah.", seduh: "Tubruk atau French Press" },
    { id: "mandailing", nama: "Mandailing", daerah: "Sumatra", asal: "Sumatera Utara", jenis: "Arabika", selera: "kuat",
      profil: "Body penuh dengan aroma herbal dan cokelat gelap.", seduh: "French Press" },
    { id: "lampung", nama: "Robusta Lampung", daerah: "Sumatra", asal: "Lampung", jenis: "Robusta", selera: "kuat",
      profil: "Pahit tegas dengan body kental, cocok untuk kopi susu.", seduh: "Tubruk" },
    { id: "preanger", nama: "Java Preanger", daerah: "Jawa", asal: "Jawa Barat", jenis: "Arabika", selera: "manis",
      profil: "Manis lembut dengan aroma cokelat dan karamel ringan.", seduh: "V60" },
    { id: "malabar", nama: "Malabar", daerah: "Jawa", asal: "Pegunungan Malabar, Jawa Barat", jenis: "Arabika", selera: "segar",
      profil: "Aroma buah dengan keasaman cerah dan bersih.", seduh: "V60" },
    { id: "ijen", nama: "Ijen", daerah: "Jawa", asal: "Dataran tinggi Ijen, Jawa Timur", jenis: "Arabika", selera: "segar",
      profil: "Aroma floral dengan sentuhan jeruk dan rasa manis.", seduh: "V60 atau Aeropress" },
    { id: "kintamani", nama: "Kintamani", daerah: "Bali", asal: "Kintamani, Bali", jenis: "Arabika", selera: "segar",
      profil: "Segar dengan nuansa jeruk dan keasaman yang cerah.", seduh: "V60 atau Aeropress" },
    { id: "toraja", nama: "Toraja", daerah: "Sulawesi", asal: "Tana Toraja, Sulawesi Selatan", jenis: "Arabika", selera: "kuat",
      profil: "Body penuh dengan rasa kompleks: rempah dan cokelat.", seduh: "French Press" },
    { id: "bajawa", nama: "Bajawa", daerah: "Nusa Tenggara", asal: "Bajawa, Flores", jenis: "Arabika", selera: "manis",
      profil: "Cokelat dan rempah dengan body sedang.", seduh: "French Press" },
    { id: "wamena", nama: "Wamena", daerah: "Papua", asal: "Wamena, Papua", jenis: "Arabika", selera: "manis",
      profil: "Lembut dan bersih dengan sentuhan cokelat dan buah.", seduh: "V60" }
  ];

  var FAKTA = [
    "Indonesia termasuk salah satu negara penghasil kopi terbesar di dunia.",
    "Biji kopi sebenarnya adalah biji dari buah kopi yang disebut cherry.",
    "Arabika biasanya ditanam di dataran tinggi, sedangkan Robusta tumbuh baik di dataran yang lebih rendah.",
    "Kopi tubruk adalah cara seduh khas Indonesia: bubuk kopi diseduh langsung di gelas.",
    "Proses pascapanen (natural, washed, honey) ikut menentukan rasa akhir kopi.",
    "Tingkat sangrai (light, medium, dark) memengaruhi rasa: makin gelap, makin pahit dan tebal.",
    "Air yang terlalu mendidih bisa membuat kopi terasa pahit, tunggu sebentar sebelum diseduh."
  ];

  var METODE = {
    tubruk: {
      nama: "Tubruk", rasio: "1:15", rasioAir: 15, suhu: "90-95°C", detik: 240,
      langkah: [
        "Giling kopi cukup halus (seperti bubuk).",
        "Masukkan kopi ke gelas, tuang air panas, aduk sebentar.",
        "Mulai timer dan diamkan sampai ampas mengendap.",
        "Tuang pelan atau minum langsung tanpa mengaduk ampas."
      ]
    },
    v60: {
      nama: "V60", rasio: "1:16", rasioAir: 16, suhu: "92-96°C", detik: 180,
      langkah: [
        "Bilas kertas filter dengan air panas, buang airnya.",
        "Masukkan kopi gilingan medium, ratakan permukaannya.",
        "Tuang sedikit air (bloom), tunggu sekitar 30 detik.",
        "Tuang sisa air melingkar pelan sampai takaran habis.",
        "Tunggu air turun semua, lalu sajikan."
      ]
    },
    french: {
      nama: "French Press", rasio: "1:15", rasioAir: 15, suhu: "93-96°C", detik: 240,
      langkah: [
        "Masukkan kopi gilingan kasar ke dalam teko.",
        "Tuang seluruh air panas, aduk pelan sekali.",
        "Pasang tutup (jangan ditekan dulu), mulai timer.",
        "Setelah waktu habis, tekan plunger pelan-pelan.",
        "Tuang segera agar tidak terlalu lama terendam."
      ]
    },
    aeropress: {
      nama: "Aeropress", rasio: "1:15", rasioAir: 15, suhu: "85-92°C", detik: 120,
      langkah: [
        "Pasang filter dan bilas dengan air panas.",
        "Masukkan kopi gilingan halus-medium.",
        "Tuang air panas, aduk sebentar, pasang plunger.",
        "Mulai timer, lalu tekan pelan setelah waktu habis."
      ]
    }
  };

  // ---------- Emoji kopi berterbangan (latar belakang) ----------
  var EMOJIS = ["☕", "☕", "🧋", "🥛", "🍪", "🥐", "🍫", "🌱", "🍰"];

  (function floatingEmoji() {
    var layer = document.createElement("div");
    layer.className = "emoji-layer";
    layer.setAttribute("aria-hidden", "true");
    var total = window.innerWidth < 640 ? 12 : 24;
    for (var i = 0; i < total; i++) {
      var s = document.createElement("span");
      s.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      s.style.left = (Math.random() * 100) + "%";
      s.style.fontSize = (22 + Math.random() * 34) + "px";
      s.style.animationDuration = (16 + Math.random() * 20) + "s";
      s.style.animationDelay = (-Math.random() * 30) + "s";
      s.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
      s.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      layer.appendChild(s);
    }
    document.body.insertBefore(layer, document.body.firstChild);
  })();

  // ---------- Ledakan emoji saat tombol ditekan ----------
  function burst(x, y) {
    for (var i = 0; i < 12; i++) {
      var s = document.createElement("span");
      s.className = "burst";
      s.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      s.style.left = x + "px";
      s.style.top = y + "px";
      var angle = (Math.PI * 2 * i) / 12;
      var dist = 70 + Math.random() * 60;
      s.style.setProperty("--bx", Math.cos(angle) * dist + "px");
      s.style.setProperty("--by", Math.sin(angle) * dist + "px");
      document.body.appendChild(s);
      (function (el) { setTimeout(function () { el.remove(); }, 950); })(s);
    }
  }

  // ---------- Muncul saat scroll ----------
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".feature, .panel, .fact-box").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // ---------- Menu hamburger ----------
  var menuBtn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // ---------- HOME: fakta acak ----------
  var factText = document.getElementById("fact-text");
  var factBtn = document.getElementById("fact-btn");
  if (factText && factBtn) {
    var lastFact = -1;
    function showFact() {
      var i;
      do { i = Math.floor(Math.random() * FAKTA.length); } while (i === lastFact && FAKTA.length > 1);
      lastFact = i;
      factText.textContent = FAKTA[i];
    }
    factBtn.addEventListener("click", function () {
      showFact();
      var r = factBtn.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    });
    showFact();
  }

  // ---------- HOME: rekomendasi kopi ----------
  var seleraSel = document.getElementById("selera");
  var rekomBox = document.getElementById("rekom");
  if (seleraSel && rekomBox) {
    seleraSel.addEventListener("change", function () {
      rekomBox.innerHTML = "";
      var pick = seleraSel.value;
      if (!pick) return;
      COFFEES.filter(function (c) { return c.selera === pick; }).forEach(function (c, i) {
        rekomBox.appendChild(buildCard(c, i, false));
      });
    });
  }

  // ---------- Kartu kopi ----------
  var PALETTES = [
    ["#7a4a2b", "#c8803a"], ["#4a2c1a", "#a8651f"], ["#8c5a3a", "#d9a066"],
    ["#5a3822", "#b87333"], ["#6b4226", "#e0b080"]
  ];
  var favs = readJSON("favKopi", []);

  function saveFavs() { setStore("favKopi", JSON.stringify(favs)); }

  function buildCard(c, index, withFav) {
    var card = document.createElement("article");
    card.className = "card";
    card.setAttribute("data-id", c.id);

    var foto = document.createElement("div");
    foto.className = "foto";
    var pal = PALETTES[index % PALETTES.length];
    foto.style.setProperty("--c1", pal[0]);
    foto.style.setProperty("--c2", pal[1]);
    // Taruh foto sendiri di folder img/ dengan nama <id>.jpg, misalnya img/gayo.jpg
    foto.style.setProperty("--img", "url('img/" + c.id + ".jpg')");
    var sticker = document.createElement("span");
    sticker.className = "sticker";
    sticker.textContent = "☕";
    foto.appendChild(sticker);
    foto.setAttribute("role", "img");
    foto.setAttribute("aria-label", "Kopi " + c.nama);
    card.appendChild(foto);

    var body = document.createElement("div");
    body.className = "card-body";

    var h = document.createElement("h3");
    h.textContent = c.nama;
    body.appendChild(h);

    var meta = document.createElement("div");
    meta.className = "meta";
    var b1 = document.createElement("span");
    b1.className = "badge"; b1.textContent = c.daerah;
    var b2 = document.createElement("span");
    b2.className = "badge"; b2.textContent = c.jenis;
    meta.appendChild(b1); meta.appendChild(b2);
    body.appendChild(meta);

    var asal = document.createElement("p");
    asal.className = "hint";
    asal.textContent = "Asal: " + c.asal;
    body.appendChild(asal);

    var p = document.createElement("p");
    p.textContent = c.profil;
    body.appendChild(p);

    var foot = document.createElement("div");
    foot.className = "card-foot";
    var tip = document.createElement("span");
    tip.className = "hint";
    tip.textContent = "Seduh: " + c.seduh;
    foot.appendChild(tip);

    if (withFav) {
      var fb = document.createElement("button");
      fb.type = "button";
      fb.className = "fav-btn";
      function paint() {
        var on = favs.indexOf(c.id) !== -1;
        fb.classList.toggle("on", on);
        fb.textContent = on ? "★ Favorit" : "☆ Suka";
        fb.setAttribute("aria-pressed", String(on));
      }
      fb.addEventListener("click", function () {
        var pos = favs.indexOf(c.id);
        if (pos === -1) {
          favs.push(c.id);
          var r = fb.getBoundingClientRect();
          burst(r.left + r.width / 2, r.top + r.height / 2);
        } else {
          favs.splice(pos, 1);
        }
        saveFavs();
        paint();
        if (typeof refreshJenis === "function") refreshJenis(true);
      });
      paint();
      foot.appendChild(fb);
    }
    body.appendChild(foot);
    card.appendChild(body);
    return card;
  }

  // ---------- JENIS KOPI: tab + pencarian ----------
  var grid = document.getElementById("grid");
  var refreshJenis = null;
  if (grid) {
    var tabsBox = document.getElementById("tabs");
    var searchEl = document.getElementById("search");
    var countEl = document.getElementById("count");
    var state = { daerah: "Semua", q: "" };

    var tabs = tabsBox.querySelectorAll("button");
    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabs.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        state.daerah = btn.getAttribute("data-daerah");
        render();
      });
    });
    searchEl.addEventListener("input", function () {
      state.q = searchEl.value.trim().toLowerCase();
      render();
    });

    function render(keepScroll) {
      var list = COFFEES.filter(function (c) {
        var okDaerah = state.daerah === "Semua" ||
          (state.daerah === "Favorit" ? favs.indexOf(c.id) !== -1 : c.daerah === state.daerah);
        var hay = (c.nama + " " + c.asal + " " + c.profil + " " + c.jenis + " " + c.daerah).toLowerCase();
        return okDaerah && (!state.q || hay.indexOf(state.q) !== -1);
      });
      grid.innerHTML = "";
      list.forEach(function (c) {
        grid.appendChild(buildCard(c, COFFEES.indexOf(c), true));
      });
      countEl.textContent = "Menampilkan " + list.length + " dari " + COFFEES.length + " jenis kopi";
      if (!list.length) {
        var e = document.createElement("p");
        e.className = "empty";
        e.textContent = state.daerah === "Favorit" && !state.q
          ? "Belum ada favorit. Tekan tombol “Suka” pada kopi yang kamu mau."
          : "Tidak ada kopi yang cocok. Coba kata kunci lain.";
        grid.appendChild(e);
      }
    }
    refreshJenis = render;
    render();
  }

  // ---------- SEDUH: timer + kalkulator ----------
  var timerEl = document.getElementById("timer-display");
  if (timerEl) {
    var current = "tubruk";
    var total = 0, sisa = 0, handle = null;
    var barEl = document.getElementById("timer-bar");
    var startBtn = document.getElementById("t-start");
    var resetBtn = document.getElementById("t-reset");
    var stepsEl = document.getElementById("langkah");
    var methodTabs = document.querySelectorAll("#metode-tabs button");
    var airInput = document.getElementById("air-ml");
    var hasilEl = document.getElementById("hasil-gram");

    function fmt(s) {
      var m = Math.floor(s / 60), d = s % 60;
      return (m < 10 ? "0" : "") + m + ":" + (d < 10 ? "0" : "") + d;
    }
    function paintTimer() {
      timerEl.textContent = fmt(sisa);
      barEl.style.width = (total ? ((total - sisa) / total) * 100 : 0) + "%";
    }
    function stopTimer() {
      if (handle) { clearInterval(handle); handle = null; }
      startBtn.textContent = "Mulai";
    }
    function beep() {
      try {
        var Ctx = window.AudioContext || window.webkitAudioContext;
        var ctx = new Ctx();
        var osc = ctx.createOscillator();
        osc.frequency.value = 880;
        osc.connect(ctx.destination);
        osc.start();
        setTimeout(function () { osc.stop(); ctx.close(); }, 500);
      } catch (e) { /* abaikan */ }
    }
    function updateCalc() {
      var ml = parseFloat(airInput.value);
      if (!ml || ml <= 0) { hasilEl.textContent = "Isi jumlah air dulu."; return; }
      var gram = ml / METODE[current].rasioAir;
      hasilEl.textContent = "Kopi yang dibutuhkan: sekitar " + gram.toFixed(1) + " gram";
    }
    function setMetode(key) {
      current = key;
      var m = METODE[key];
      stopTimer();
      total = sisa = m.detik;
      document.getElementById("info-nama").textContent = m.nama;
      document.getElementById("info-rasio").textContent = m.rasio;
      document.getElementById("info-suhu").textContent = m.suhu;
      document.getElementById("info-waktu").textContent = fmt(m.detik);
      stepsEl.innerHTML = "";
      m.langkah.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        stepsEl.appendChild(li);
      });
      paintTimer();
      updateCalc();
    }

    methodTabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        methodTabs.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        setMetode(btn.getAttribute("data-metode"));
      });
    });

    startBtn.addEventListener("click", function () {
      if (handle) { stopTimer(); startBtn.textContent = "Lanjut"; return; }
      if (sisa <= 0) sisa = total;
      startBtn.textContent = "Jeda";
      handle = setInterval(function () {
        sisa--;
        paintTimer();
        if (sisa <= 0) {
          stopTimer();
          beep();
          alert("Waktu seduh " + METODE[current].nama + " selesai! Kopimu siap disajikan.");
        }
      }, 1000);
    });
    resetBtn.addEventListener("click", function () {
      stopTimer();
      sisa = total;
      paintTimer();
    });
    airInput.addEventListener("input", updateCalc);

    setMetode("tubruk");
  }

  // ---------- KONTAK: form + validasi ----------
  var form = document.getElementById("contact-form");
  if (form) {
    var fName = document.getElementById("c-name");
    var fEmail = document.getElementById("c-email");
    var fTopic = document.getElementById("c-topic");
    var fMsg = document.getElementById("c-msg");
    var sentBox = document.getElementById("sent-list");

    var draft = readJSON("kopiDraft", {});
    if (draft.name) fName.value = draft.name;
    if (draft.email) fEmail.value = draft.email;
    if (draft.topic) fTopic.value = draft.topic;
    if (draft.msg) fMsg.value = draft.msg;

    [fName, fEmail, fTopic, fMsg].forEach(function (f) {
      f.addEventListener("input", function () {
        setStore("kopiDraft", JSON.stringify({
          name: fName.value, email: fEmail.value, topic: fTopic.value, msg: fMsg.value
        }));
      });
    });

    function setError(id, text) { document.getElementById(id).textContent = text; }

    function renderSent() {
      var sent = readJSON("kopiSent", []);
      sentBox.innerHTML = "";
      if (!sent.length) {
        var p = document.createElement("p");
        p.className = "hint";
        p.textContent = "Belum ada pesan terkirim.";
        sentBox.appendChild(p);
        return;
      }
      sent.slice().reverse().forEach(function (m) {
        var d = document.createElement("div");
        d.className = "sent-item";
        var s = document.createElement("small");
        s.textContent = m.time + " • " + m.topic;
        var t = document.createElement("span");
        t.textContent = m.name + ": " + m.msg;
        d.appendChild(s); d.appendChild(t);
        sentBox.appendChild(d);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      setError("err-name", ""); setError("err-email", ""); setError("err-msg", "");

      if (fName.value.trim().length < 3) { setError("err-name", "Nama minimal 3 karakter."); ok = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value.trim())) { setError("err-email", "Format email tidak valid."); ok = false; }
      if (fMsg.value.trim().length < 10) { setError("err-msg", "Pesan minimal 10 karakter."); ok = false; }

      if (!ok) { alert("Form belum benar. Periksa pesan error berwarna merah."); return; }

      var sent = readJSON("kopiSent", []);
      sent.push({
        name: fName.value.trim(),
        topic: fTopic.value,
        msg: fMsg.value.trim(),
        time: new Date().toLocaleString("id-ID")
      });
      setStore("kopiSent", JSON.stringify(sent));
      setStore("kopiDraft", "{}");
      alert("Terima kasih, " + fName.value.trim() + "! Pesanmu sudah tersimpan.");
      form.reset();
      renderSent();
    });

    form.addEventListener("reset", function () { setStore("kopiDraft", "{}"); });
    renderSent();
  }
})();
