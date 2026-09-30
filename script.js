document.addEventListener('DOMContentLoaded', () => {
    
    // --- Data Game ---
    const trashItems = [
        // Organik
        { type: 'organik', label: 'Kulit Pisang', color: '#8BC34A' },
        { type: 'organik', label: 'Apel sisa', color: '#CDDC39' },
        { type: 'organik', label: 'Daun Kering', color: '#9E9D24' },
        // Anorganik
        { type: 'anorganik', label: 'Botol Plastik', color: '#2196F3' },
        { type: 'anorganik', label: 'Kaleng Minuman', color: '#1976D2' },
        { type: 'anorganik', label: 'Gelas Plastik', color: '#1565C0' }
    ];

    let score = 0;
    let currentTrash;
    const trashDisplay = document.getElementById('trash-item');
    const scoreDisplay = document.getElementById('score');
    const gameStatus = document.getElementById('game-status');
    const startButton = document.getElementById('start-btn');
    const bins = document.querySelectorAll('.bin');

    // --- Inisialisasi Game ---
    function initGame() {
        score = 0;
        updateScore();
        gameStatus.textContent = "Tarik sampah ke tong yang benar!";
        generateNewTrash();
    }

    // --- Logika Game Utama ---

    function generateNewTrash() {
        // Ambil sampah acak dari daftar
        const randomIndex = Math.floor(Math.random() * trashItems.length);
        currentTrash = trashItems[randomIndex];
        
        // Tampilkan sampah baru
        trashDisplay.textContent = currentTrash.label; // Sederhana: gunakan teks dulu
        trashDisplay.setAttribute('data-type', currentTrash.type);
        trashDisplay.style.backgroundColor = currentTrash.color; // Beri warna beda-beda
        trashDisplay.classList.remove('hidden');
    }

    function checkAnswer(chosenBinType) {
        if (chosenBinType === currentTrash.type) {
            score++;
            updateScore();
            gameStatus.textContent = "Benar! 🎉 " + currentTrash.label + " masuk ke tong " + chosenBinType.toUpperCase();
            generateNewTrash();
        } else {
            // Pengurangan skoropsional
            // score = Math.max(0, score - 1); 
            gameStatus.textContent = "Salah! ❌ Coba lagi!";
            // Reset sampah agar bisa ditarik kembali
        }
    }

    function updateScore() {
        scoreDisplay.textContent = 'Skor: ' + score;
    }

    // --- Logika Drag and Drop ---

    // 1. Seret Sampah
    trashDisplay.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.getAttribute('data-type'));
    });

    // 2. Tong Sampah Siap Terima
    bins.forEach(bin => {
        bin.addEventListener('dragover', (e) => {
            e.preventDefault(); // Diperlukan agar drop bisa berfungsi
            bin.classList.add('drag-over');
        });

        bin.addEventListener('dragleave', () => {
            bin.classList.remove('drag-over');
        });

        // 3. Sampah Dilepas di Tong
        bin.addEventListener('drop', (e) => {
            e.preventDefault();
            bin.classList.remove('drag-over');
            
            const draggedTrashType = e.dataTransfer.getData('text/plain');
            const binType = bin.getAttribute('data-type');
            
            checkAnswer(binType);
        });
    });

    // --- Tombol Mulai ---
    startButton.addEventListener('click', initGame);

});
