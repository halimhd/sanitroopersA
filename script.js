/* --- CSS RESET & VARIABLES --- */
:root {
    --green-primary: #2ECC71;
    --green-dark: #27AE60;
    --blue-primary: #3498DB;
    --blue-dark: #2980B9;
    --orange-accent: #E67E22;
    --yellow-accent: #F1C40F;
    --red-accent: #E74C3C;
    --bg-light: #F4F9F4;
    --text-color: #2C3E50;
    --font-heading: 'Fredoka One', cursive, sans-serif;
    --font-body: 'Open Sans', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-body);
    background-color: var(--bg-light);
    color: var(--text-color);
    line-height: 1.6;
    scroll-behavior: smooth;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
}

/* --- HEADER & NAV --- */
header {
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--green-dark);
}

.logo-icon { font-size: 1.8rem; }
.logo .highlight { color: var(--blue-primary); }

nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
}

nav a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--green-primary);
}

/* --- HERO SECTION --- */
.hero-section {
    padding: 60px 0;
    background: linear-gradient(135deg, #E8F8F5 0%, #EBF5FB 100%);
    border-bottom: 5px solid var(--green-primary);
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.badge {
    background-color: var(--yellow-accent);
    color: #333;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 15px;
}

.hero-text h1 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--green-dark);
    margin-bottom: 15px;
}

.hero-text p {
    font-size: 1.1rem;
    margin-bottom: 25px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
}

.btn {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    font-family: var(--font-heading);
    font-size: 1rem;
    cursor: pointer;
    border: none;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary {
    background-color: var(--green-primary);
    color: white;
    box-shadow: 0 4px 0 var(--green-dark);
}

.btn-secondary {
    background-color: var(--orange-accent);
    color: white;
    box-shadow: 0 4px 0 #D35400;
}

.btn:hover {
    transform: translateY(-2px);
}

.poster-preview {
    width: 100%;
    max-width: 420px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    border: 5px solid #fff;
}

/* --- SECTION HEADERS --- */
.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.section-header h2 {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    color: var(--green-dark);
}

/* --- MATERI SECTION --- */
.materi-section {
    padding: 60px 0;
}

.materi-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.card {
    background: #fff;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    position: relative;
    border-top: 8px solid transparent;
}

.card-organik { border-color: var(--green-primary); }
.card-anorganik { border-color: var(--blue-primary); }

.card-icon { font-size: 3rem; text-align: center; }

.card-tag {
    display: block;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 0.9rem;
    color: #888;
    margin-top: 5px;
}

.card h3 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    text-align: center;
    margin: 10px 0;
}

.card-organik h3 { color: var(--green-dark); }
.card-anorganik h3 { color: var(--blue-dark); }

.character-quote {
    font-style: italic;
    background: #f9f9f9;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
}

.card-body h4 { margin-bottom: 10px; }

.card-body ul {
    list-style: none;
    margin-bottom: 20px;
}

.card-body li {
    padding: 6px 0;
    border-bottom: 1px dashed #eee;
}

.info-box {
    background: #FFFDE7;
    border-left: 4px solid var(--yellow-accent);
    padding: 12px;
    border-radius: 6px;
    font-size: 0.95rem;
}

.slogan-banner {
    margin-top: 40px;
    background: #FDEDEC;
    border: 3px dashed var(--red-accent);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
}

.slogan-banner h3 {
    font-family: var(--font-heading);
    color: var(--red-accent);
    font-size: 1.6rem;
}

/* --- DAMPAK SECTION --- */
.dampak-section {
    padding: 60px 0;
    background-color: #ffffff;
}

.grid-2-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.feature-box {
    padding: 30px;
    border-radius: 20px;
}

.feature-box.danger { background-color: #FDEDEC; }
.feature-box.success { background-color: #E8F8F5; }

.feature-box h3 {
    font-family: var(--font-heading);
    margin-bottom: 15px;
}

.feature-box.danger h3 { color: var(--red-accent); }
.feature-box.success h3 { color: var(--green-dark); }

.feature-box ul {
    list-style: none;
}

.feature-box li {
    margin-bottom: 12px;
}

/* --- GAME SECTION --- */
.game-section {
    padding: 60px 0;
    background-color: #FEF9E7;
}

.game-board {
    background: #ffffff;
    border: 4px solid var(--orange-accent);
    border-radius: 20px;
    padding: 25px;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.game-stats {
    display: flex;
    justify-content: space-between;
    background: #FAF0CA;
    padding: 12px 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    font-family: var(--font-heading);
}

#game-canvas {
    width: 100%;
    height: 350px;
    background: #EBF5FB;
    border: 2px dashed var(--blue-primary);
    border-radius: 15px;
    position: relative;
    overflow: hidden;
}

.basket {
    width: 120px;
    height: 60px;
    background: var(--green-primary);
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px 10px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--font-heading);
    font-size: 0.8rem;
    transition: background 0.2s;
}

.basket.anorganik {
    background: var(--blue-primary);
}

#basket-face { font-size: 1.4rem; }

.falling-item {
    position: absolute;
    font-size: 2rem;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
}

.game-controls {
    margin-top: 20px;
    text-align: center;
}

.game-instruction {
    font-size: 0.9rem;
    margin: 15px 0;
    color: #666;
}

.switch-mode {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.btn-switch {
    padding: 8px 16px;
    border-radius: 15px;
    border: 2px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-family: var(--font-heading);
}

.btn-switch.green.active { background: var(--green-primary); color: white; border-color: var(--green-dark); }
.btn-switch.blue.active { background: var(--blue-primary); color: white; border-color: var(--blue-dark); }

/* --- QR SECTION & FOOTER --- */
.qr-section {
    padding: 60px 0;
}

.qr-card {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    border-radius: 20px;
    padding: 40px;
    color: white;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    align-items: center;
}

.qr-text h2 {
    font-family: var(--font-heading);
    margin-bottom: 10px;
}

.speech-bubble {
    display: inline-block;
    margin-top: 15px;
    background: #fff;
    color: #333;
    padding: 10px 18px;
    border-radius: 20px;
    font-weight: bold;
}

.qr-images {
    display: flex;
    gap: 15px;
}

.qr-box {
    background: white;
    color: #333;
    padding: 15px;
    border-radius: 15px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
}

.qr-placeholder {
    font-size: 3rem;
}

footer {
    background: var(--text-color);
    color: white;
    text-align: center;
    padding: 20px 0;
}

/* Responsif untuk Smartphone */
@media (max-width: 768px) {
    .hero-container, .grid-2-col, .qr-card {
        grid-template-columns: 1fr;
    }
    
    header .header-container {
        flex-direction: column;
        gap: 10px;
    }
}
