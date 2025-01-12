// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Menu klik
document.querySelector('#daftar-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar
const hamburger = document.querySelector('#daftar-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Audio
// Ambil elemen audio dan ikon
const audioElement = document.getElementById('song');
const togglePlayButton = document.getElementById('toggle-play');
const iconElement = togglePlayButton.querySelector('i');

// Fungsi untuk memastikan audio diputar
function playAudio() {
    audioElement.volume -= 0.25;
    audioElement.play().catch((error) => {
        console.warn('Autoplay dicegah oleh browser. Pengguna perlu berinteraksi dengan halaman.', error);
    });
}

// Autoplay saat halaman dimuat
window.addEventListener('load', () => {
    playAudio();
});

// Fungsi untuk toggle play/pause
function togglePlay() {
    if (audioElement.paused) {
        audioElement.play().catch((error) => {
            console.warn('Autoplay dicegah oleh browser.', error);
        });
        iconElement.className = 'bi bi-disc'; // Ubah ke ikon disk
        togglePlayButton.classList.remove('paused'); // Hapus class paused
    } else {
        audioElement.pause();
        iconElement.className = 'bi bi-pause-circle-fill'; // Ubah ke ikon pause
        togglePlayButton.classList.add('paused'); // Tambahkan class paused
    }
}

// Tambahkan event listener untuk toggle play/pause
togglePlayButton.addEventListener('click', togglePlay);

// Unable Scroll
document.addEventListener('DOMContentLoaded', () => {
    const giftIcon = document.getElementById('gift'); // Ikon hadiah
    const hadiahSection = document.querySelector('#hadiah'); // Section hadiah
    const footerSection = document.querySelector('footer'); // Footer

    // Awal: Sembunyikan hadiah dan footer
    hadiahSection.classList.remove('unlocked');
    footerSection.classList.remove('unlocked');

    // Fungsi untuk membuka akses ke section hadiah
    const unlockHadiah = () => {
        hadiahSection.classList.add('unlocked');
        footerSection.classList.add('unlocked');
    };

    // Event listener untuk klik pada ikon hadiah
    giftIcon.addEventListener('click', () => {
        unlockHadiah();

        // Smooth scroll ke section hadiah
        hadiahSection.scrollIntoView({ behavior: 'smooth' });
    });
});


