// Audio
// Ambil elemen audio dan ikon
const audioElement = document.getElementById('song');
const togglePlayButton = document.getElementById('toggle-play');
const iconElement = togglePlayButton.querySelector('i');

//Fungsi untuk memastikan audio diputar
function playAudio() {
    audioElement.volume -= 0.5;
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