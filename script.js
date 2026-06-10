// ==========================================
// 1. DATA MASTER & ISI KONTEN
// ==========================================

const daftarCerita = [
    { id: 1, img: 'assets/img/kucing.png', title: 'Lari-Lari di Rumput!', desc: 'Meong! Kucing senang sekali lompat-lompat di rumput hijau yang lembut.' },
    { id: 2, img: 'assets/img/kelinci.png', title: 'Nyam! Wortelnya Enak', desc: 'Kelinci lapar sekali, gigit wortel oranye... kres, kres, kres!' },
    { id: 3, img: 'assets/img/bebek.png', title: 'Huhu... Bebek Sedih', desc: 'Air mata jatuh, bebek nangis wek-wek karena tidak ada teman.' },
    { id: 4, img: 'assets/img/burung.png', title: 'Wush! Terbang Tinggi', desc: 'Kepak sayapnya, burung terbang jauh sekali sampai ke awan.' },
    { id: 5, img: 'assets/img/penyu.png', title: 'Byur! Berenang di Laut', desc: 'Kaki dayung bergerak, penyu main air di laut yang biru.' },
    { id: 6, img: 'assets/img/ulat.png', title: 'Krik-Krik! Makan Daun', desc: 'Ulat kecil jalan pelan, makan daun hijau sampai perutnya gendut.' },
    { id: 7, img: 'assets/img/tupai.png', title: 'Kuk-Kuk! Pesta Kacang', desc: 'Tupai lincah pegang kacang, dimakan sambil duduk di dahan pohon.' },
    { id: 8, img: 'assets/img/domba.png', title: 'Mbek! Perutnya Kenyang', desc: 'Domba putih makan rumput segar sama-sama sampai kenyang.' },
    { id: 9, img: 'assets/img/lebah.png', title: 'Ngung! Lagi Marah Nih', desc: 'Jangan diganggu ya! Lebah lagi marah sambil terbang puter-putar.' },
    { id: 10, img: 'assets/img/semut.png', title: 'Ayo! Angkat Bersama', desc: 'Semut-semut kecil baris rapi, gotong makanan besar ke rumah.' }
];

const dataPias = [
    { id: 1, img: 'assets/img/level1.png', bg: 'assets/img/level1IN.jpeg', title: 'Level 1', content: [["BO", "LA"], ["MA", "MA"], ["PI", "PA"], ["BU", "KU"]] },
    { id: 2, img: 'assets/img/level2.png', bg: 'assets/img/level2IN.jpeg', title: 'Level 2', content: [["BO", "LA", "BI", "RU"], ["TO", "PI", "SA", "YA"], ["KU", "DA", "LA", "RI"], ["BA", "JU", "BA", "RU"]] },
    { id: 3, img: 'assets/img/level3.png', bg: 'assets/img/level3IN.jpeg', title: 'Level 3', content: [["TI", "DUR", "MA", "LAM"], ["BA", "PAK", "MI", "NUM"], ["MA", "SAK", "SA", "YUR"], ["KI", "PAS", "A", "NGIN"]] },
    { id: 4, img: 'assets/img/level4.png', bg: 'assets/img/level4IN.jpeg', title: 'Level 4', content: [["PI", "SANG", "KU", "NING"], ["BU", "RUNG", "TER", "BANG"], ["TA", "NGAN", "A", "DIK"], ["BA", "NGUN", "SI", "ANG"]] },
    { id: 5, img: 'assets/img/level5.png', bg: 'assets/img/level5IN.jpeg', title: 'Level 5', content: [["I", "BU", "MA", "SAK", "NA", "SI"], ["A", "DIK", "SU", "KA", "PI", "SANG"], ["BU", "RUNG", "TER", "BANG", "DI", "LA", "NGIT"], ["KA", "KI", "SA", "PI", "A", "DA", "EM", "PAT"]] }
];

const isiCeritaKucing = [{p1:"kucing lari-lari", p2:"kucing aku lari-lari"}, {p1:"lari di rumput", p2:"kucing lari di rumput"}, {p1:"rumput itu hijau", p2:"rumput kucing itu hijau"}, {p1:"rumput itu lembut", p2:"rumput kucing itu lembut"}, {p1:"meong meong meong", p2:"suara kucing meong meong"}, {p1:"kucing lompat-lompat", p2:"kucing aku lompat-lompat"}, {p1:"lompat di rumput", p2:"kucing lompat di rumput"}, {p1:"kucing rasa senang", p2:"senang main di rumput"}, {p1:"main itu seru", p2:"seru main di rumput"}, {p1:"kucing hebat lari", p2:"hebat lari di rumput"}];
const isiCeritaKelinci = [{p1:"panen wortel", p2:"kelinci panen wortel"}, {p1:"kelinci lapar", p2:"kelinci aku lapar"}, {p1:"makan wortel", p2:"kelinci makan wortel"}, {p1:"wortel oranye", p2:"wortel kelinci oranye"}, {p1:"wortel enak", p2:"wortel kelinci enak"}, {p1:"nyam nyam nyam", p2:"makan wortel nyam nyam"}, {p1:"gigit wortel", p2:"kelinci gigit wortel"}, {p1:"wortel habis", p2:"wortel kelinci habis"}, {p1:"perut kenyang", p2:"kelinci perut kenyang"}, {p1:"kelinci senang", p2:"sangat senang makan"}];
const isiCeritaBebek = [{p1:"bebek sedih", p2:"bebek aku sedih"}, {p1:"bebek nangis", p2:"bebek aku nangis"}, {p1:"wek wek wek", p2:"suara bebek wek wek"}, {p1:"air mata", p2:"bebek ada air mata"}, {p1:"teman mana", p2:"cari teman mana"}, {p1:"tidak ada teman", p2:"bebek tidak ada teman"}, {p1:"sungai sepi", p2:"di sungai sepi"}, {p1:"bebek jalan", p2:"bebek jalan pelan"}, {p1:"jangan sedih", p2:"bebek jangan sedih"}, {p1:"ayo main", p2:"ayo bebek main"}];
const isiCeritaBurung = [{p1:"burung terbang", p2:"burung aku terbang"}, {p1:"terbang tinggi", p2:"terbang burung tinggi"}, {p1:"wush wush wush", p2:"terbang bunyi wush wush"}, {p1:"sayap lebar", p2:"sayap burung lebar"}, {p1:"kepak sayap", p2:"burung kepak sayap"}, {p1:"ke awan", p2:"terbang ke awan"}, {p1:"awan putih", p2:"terbang ke awan putih"}, {p1:"langit biru", p2:"terbang di langit biru"}, {p1:"burung lincah", p2:"burung terbang lincah"}, {p1:"jauh sekali", p2:"terbang jauh sekali"}];
const isiCeritaPenyu = [{p1:"penyu di pantai", p2:"penyu berjalan di pantai"}, {p1:"pasir hangat", p2:"penyu di pasir hangat"}, {p1:"dekat air", p2:"penyu jalan ke air"}, {p1:"kena ombak", p2:"penyu kena ombak"}, {p1:"masuk air", p2:"penyu masuk air"}, {p1:"kaki bergerak", p2:"kaki penyu bergerak"}, {p1:"mulai berenang", p2:"penyu mulai berenang"}, {p1:"berenang jauh", p2:"penyu berenang jauh"}, {p1:"laut biru", p2:"penyu di laut biru"}, {p1:"bebas berenang", p2:"penyu berenang bebas"}];
const isiCeritaUlat = [{p1:"ulat di tanah", p2:"ulat aku di tanah"}, {p1:"lihat tanaman", p2:"ulat lihat tanaman"}, {p1:"mau naik", p2:"ulat mau naik"}, {p1:"mulai naik", p2:"ulat mulai naik"}, {p1:"naik pelan", p2:"ulat naik pelan"}, {p1:"sampai daun", p2:"ulat sampai daun"}, {p1:"makan daun", p2:"ulat makan daun"}, {p1:"daun hijau", p2:"ulat makan daun"}, {p1:"perut gendut", p2:"ulat perut gendut"}, {p1:"kenyang sekali", p2:"ulat kenyang sekali"}];
const isiCeritaTupai = [{p1:"tupai lincah", p2:"tupai aku lincah"}, {p1:"pegang kacang", p2:"tupai pegang kacang"}, {p1:"kuk kuk kuk", p2:"tupai bunyi kuk kuk"}, {p1:"kacang gurih", p2:"makan kacang gurih"}, {p1:"di dahan", p2:"tupai di dahan"}, {p1:"duduk santai", p2:"tupai duduk santai"}, {p1:"pesta kacang", p2:"tupai pesta kacang"}, {p1:"kacang banyak", p2:"tupai kacang banyak"}, {p1:"tupai pintar", p2:"pintar kupas kacang"}, {p1:"sangat seru", p2:"pesta kacang seru"}];
const isiCeritaDomba = [{p1:"domba putih", p2:"domba aku putih"}, {p1:"mbek mbek mbek", p2:"domba bunyi mbek mbek"}, {p1:"makan rumput", p2:"domba makan rumput"}, {p1:"rumput segar", p2:"makan rumput segar"}, {p1:"domba kenyang", p2:"domba aku kenyang"}, {p1:"perut besar", p2:"domba perut besar"}, {p1:"domba kumpul", p2:"banyak domba kumpul"}, {p1:"domba tidur", p2:"banyak domba tidur"}, {p1:"tidur di rumput", p2:"domba tidur di rumput"}, {p1:"tidur nyaman", p2:"domba tidur nyaman"}];
const isiCeritaLebah = [{p1:"lebah terbang", p2:"lebah aku terbang"}, {p1:"bunga warna", p2:"lebah di bunga warna"}, {p1:"minum madu", p2:"lebah minum madu"}, {p1:"terbang santai", p2:"lebah terbang santai"}, {p1:"pulang rumah", p2:"lebah pulang rumah"}, {p1:"rumah lebah", p2:"ada rumah lebah"}, {p1:"ada ganggu", p2:"ada yang ganggu"}, {p1:"lebah lihat", p2:"lebah lihat rumah"}, {p1:"lebah marah", p2:"lebah aku marah"}, {p1:"ngung ngung", p2:"lebah bunyi ngung ngung"}];
const isiCeritaSemut = [{p1:"semut kecil", p2:"banyak semut kecil"}, {p1:"baris rapi", p2:"semut baris rapi"}, {p1:"gotong makanan", p2:"semut gotong makanan"}, {p1:"makanan besar", p2:"bawa makanan besar"}, {p1:"angkat bersama", p2:"ayo angkat bersama"}, {p1:"jalan sama-sama", p2:"semut jalan sama-sama"}, {p1:"ke rumah", p2:"jalan ke rumah"}, {p1:"semut rajin", p2:"semut aku rajin"}, {p1:"kerja sama", p2:"hebat kerja sama"}, {p1:"sudah sampai", p2:"makanan sudah sampai"}];

// ==========================================
// 2. VARIABEL STATE
// ==========================================
let halamanSekarang = 0;
let dataHalamanAktif = [];
let judulAktif = "";
let prefixGambar = "";
let audioAktif = null; 
let levelPiasAktif = null;
let indexItemPias = 0;
let timerDiamKlik = null;
let timerSembunyiKlik = null;

// ==========================================
// 3. RENDER AWAL (CAROUSEL & GRID)
// ==========================================
const carousel = document.getElementById('carousel');
const gridFull = document.getElementById('grid-full');
const carouselPias = document.getElementById('carousel-pias');
const gridPias = document.getElementById('grid-pias');

// Render Daftar Cerita (Carousel & Grid)
daftarCerita.forEach(item => {
    carousel.innerHTML += `<div class="card" onclick="bukaDaftarCerita()"><img src="${item.img}"><h4>${item.title}</h4></div>`;
    gridFull.innerHTML += `<div class="card"><img src="${item.img}"><h4>${item.title}</h4><p>${item.desc}</p><button class="btn-play" onclick="mulaiBaca(${item.id})">Play ▶</button></div>`;
});

// Render Pias Kata (Carousel & Grid)
dataPias.forEach(item => {
    carouselPias.innerHTML += `<div class="card-pias" onclick="bukaDaftarPias()"><img src="${item.img}"><h4>${item.title}</h4></div>`;
    gridPias.innerHTML += `<div class="card" style="aspect-ratio:16/9"><img src="${item.img}"><h4>${item.title}</h4><button class="btn-play" onclick="mulaiPias(${item.id})">Mulai ▶</button></div>`;
});

// ==========================================
// 4. FUNGSI NAVIGASI UTAMA
// ==========================================
function hideAllPages() {
    ['page-home', 'page-daftar-cerita', 'page-baca-cerita', 'page-tim-pengembang', 'page-daftar-pias', 'page-baca-pias'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.style.display = 'none';
    });
}

function masukKeWeb() {
    document.getElementById('overlay-mulai').style.display = 'none';
    sambutanBeruang(); 
}

function kembaliKeHome() {
    hentikanAudio();
    hentikanPetunjukKlik();
    hideAllPages();
    document.getElementById('page-home').style.display = 'block';
    document.getElementById('main-footer').style.display = 'flex';
}

function bukaDaftarCerita() {
    hentikanAudio();
    hentikanPetunjukKlik();
    hideAllPages();
    document.getElementById('page-daftar-cerita').style.display = 'block';
    document.getElementById('main-footer').style.display = 'flex';
}

function bukaDaftarPias() {
    hentikanAudio();
    hentikanPetunjukKlik();
    hideAllPages();
    document.getElementById('page-daftar-pias').style.display = 'block';
    document.getElementById('main-footer').style.display = 'flex';
}

// ==========================================
// 5. LOGIKA BACA CERITA
// ==========================================
function mulaiBaca(id) {
    hentikanAudio();
    halamanSekarang = 0;
    if (id === 1) { dataHalamanAktif = isiCeritaKucing; prefixGambar = "kucing_lari_"; judulAktif = "Lari-Lari di Rumput!"; }
    else if (id === 2) { dataHalamanAktif = isiCeritaKelinci; prefixGambar = "kelinci_wortel_"; judulAktif = "Nyam! Wortelnya Enak"; }
    else if (id === 3) { dataHalamanAktif = isiCeritaBebek; prefixGambar = "bebek_sedih_"; judulAktif = "Huhu... Bebek Sedih"; }
    else if (id === 4) { dataHalamanAktif = isiCeritaBurung; prefixGambar = "burung_terbang_"; judulAktif = "Wush! Terbang Tinggi"; }
    else if (id === 5) { dataHalamanAktif = isiCeritaPenyu; prefixGambar = "penyu_renang_"; judulAktif = "Byur! Berenang di Laut"; }
    else if (id === 6) { dataHalamanAktif = isiCeritaUlat; prefixGambar = "ulat_daun_"; judulAktif = "Krik-Krik! Makan Daun"; }
    else if (id === 7) { dataHalamanAktif = isiCeritaTupai; prefixGambar = "tupai_kacang_"; judulAktif = "Kuk-Kuk! Pesta Kacang"; }
    else if (id === 8) { dataHalamanAktif = isiCeritaDomba; prefixGambar = "domba_putih_"; judulAktif = "Mbek! Perutnya Kenyang"; }
    else if (id === 9) { dataHalamanAktif = isiCeritaLebah; prefixGambar = "lebah_marah_"; judulAktif = "Ngung! Lagi Marah Nih"; }
    else if (id === 10) { dataHalamanAktif = isiCeritaSemut; prefixGambar = "semut_kecil_"; judulAktif = "Ayo! Angkat Bersama"; }

    hideAllPages();
    document.getElementById('page-baca-cerita').style.display = 'flex';
    document.getElementById('main-footer').style.display = 'none';
    renderHalaman();
}

function renderHalaman() {
    const data = dataHalamanAktif[halamanSekarang];
    document.getElementById('story-frame').style.backgroundImage = `url('assets/img/${prefixGambar}${halamanSekarang + 1}.jpeg')`;
    document.getElementById('teks-baris-1').innerText = data.p1;
    document.getElementById('teks-baris-2').innerText = data.p2;
    document.getElementById('judul-baca').innerText = judulAktif;
    
    const bubble = document.getElementById('bubble-teks');
    bubble.className = (halamanSekarang % 2 === 0) ? "bubble-teks bubble-kiri" : "bubble-teks bubble-kanan";
    
    document.getElementById('btn-prev').style.visibility = (halamanSekarang === 0) ? 'hidden' : 'visible';
    document.getElementById('btn-next').style.display = (halamanSekarang === 9) ? 'none' : 'block';
    document.getElementById('btn-selesai').style.display = (halamanSekarang === 9) ? 'block' : 'none';
    hentikanPetunjukKlik();
    tampilkanPetunjukKlik();
    mulaiTimerDiamKlik();
}

function tampilkanPetunjukKlik() {
    const petunjuk = document.getElementById('petunjuk-klik');
    if (!petunjuk) return;

    clearTimeout(timerSembunyiKlik);

    petunjuk.style.display = 'block';

    timerSembunyiKlik = setTimeout(() => {
        petunjuk.style.display = 'none';
    }, 3000);
}

function mulaiTimerDiamKlik() {
    clearTimeout(timerDiamKlik);

    timerDiamKlik = setTimeout(() => {
        const halamanCeritaAktif = document.getElementById('page-baca-cerita').style.display !== 'none';

        if (halamanCeritaAktif) {
            tampilkanPetunjukKlik();
            mulaiTimerDiamKlik();
        }
    }, 10000);
}

function resetTimerDiamKlik() {
    const halamanCeritaAktif = document.getElementById('page-baca-cerita').style.display !== 'none';

    if (halamanCeritaAktif) {
        mulaiTimerDiamKlik();
    }
}

function hentikanPetunjukKlik() {
    clearTimeout(timerDiamKlik);
    clearTimeout(timerSembunyiKlik);

    const petunjuk = document.getElementById('petunjuk-klik');
    if (petunjuk) petunjuk.style.display = 'none';
}

function nextHalaman() {
    if (halamanSekarang < 9) {
        hentikanAudio();
        halamanSekarang++;
        renderHalaman();
    }
}

function prevHalaman() {
    if (halamanSekarang > 0) {
        hentikanAudio();
        halamanSekarang--;
        renderHalaman();
    }
}

// ==========================================
// 6. LOGIKA PIAS KATA (KLIK GAMBAR REVEAL)
// ==========================================
function mulaiPias(id) {
    levelPiasAktif = dataPias.find(p => p.id === id);
    indexItemPias = 0;
    hideAllPages();
    document.getElementById('page-baca-pias').style.display = 'flex';
    document.getElementById('main-footer').style.display = 'none';
    document.getElementById('judul-pias').innerText = `Pias Kata - ${levelPiasAktif.title}`;
    renderPiasContent();
}

function renderPiasContent() {
    const container = document.getElementById('pias-container');
    const frame = document.getElementById('pias-frame');
    frame.style.backgroundImage = `url('${levelPiasAktif.bg}')`;
    container.innerHTML = '';
    
    // Render semua kalimat dalam keadaan transparan
    levelPiasAktif.content.forEach((kalimat) => {
        const row = document.createElement('div');
        row.className = 'pias-row';
        kalimat.forEach((sukuKata) => {
            const box = document.createElement('div');
            box.className = 'pias-box'; 
            box.innerHTML = `<span>${sukuKata}</span>`;
            row.appendChild(box);
        });
        container.appendChild(row);
    });
}

function revealNextPias() {
    const nextBox = document.querySelector('.pias-box:not(.active)');
    if (nextBox) {
        nextBox.classList.add('active');
        const sukuKata = nextBox.querySelector('span').innerText.toLowerCase();
        mainkanAudio(`assets/audio/${sukuKata}.mp3`);
    }
}

// ==========================================
// 7. AUDIO, MENU, & UTILITY
// ==========================================
function mainkanAudio(path) {
    hentikanAudio();
    audioAktif = new Audio(path);
    audioAktif.play().catch(e => console.log("Audio diblokir browser"));
}
function hentikanAudio() { if (audioAktif) { audioAktif.pause(); audioAktif.currentTime = 0; } }

function sambutanBeruang() { mainkanAudio('assets/audio/selamat_datang.mp3'); }
function putarSuaraCerita() { mainkanAudio(`assets/audio/${prefixGambar}${halamanSekarang + 1}.mp3`); }

function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function bukaTimPengembang() {
    hentikanAudio();
    hentikanPetunjukKlik();
    hideAllPages();
    document.getElementById('page-tim-pengembang').style.display = 'block';
    document.getElementById('main-footer').style.display = 'flex';
}

// Menutup menu klik luar area
window.onclick = function(event) {
    if (!event.target.matches('.dots-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) dropdowns[i].style.display = "none";
    }
}

function scrollCarousel(dir) { document.getElementById('carousel').scrollBy({ left: dir * 250, behavior: 'smooth' }); }
function scrollCarouselPias(dir) { document.getElementById('carousel-pias').scrollBy({ left: dir * 250, behavior: 'smooth' }); }

['click', 'mousemove', 'keydown', 'touchstart'].forEach(eventName => {
    document.addEventListener(eventName, resetTimerDiamKlik);
});
