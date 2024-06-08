// Esempio di funzione per il contatore principale (aggiungi il tuo codice qui)
function updateMainCounter() {
    // Logica per il contatore principale
    const startDate = new Date('2018-09-30T00:00:00'); // Imposta la data di inizio del contatore principale
    const now = new Date();
    const totalSeconds = (now - startDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const mainCounterElement = document.getElementById('main-counter');
    mainCounterElement.innerHTML = `${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;
}

// Funzione per il contatore di ritardo nei pagamenti dei vaccini (aggiungi il tuo codice qui)
function updateVaccineCounter() {
    // Logica per il contatore di ritardo nei pagamenti dei vaccini
    const startDate = new Date('2024-03-30T00:00:00'); // Imposta la data di inizio del contatore di ritardo nei pagamenti
    const now = new Date();
    const totalSeconds = (now - startDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const vaccineCounterElement = document.getElementById('vaccine-counter');
    vaccineCounterElement.innerHTML = `${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;
}

// Funzione per il countdown di quattro anni
function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear() + 4, now.getMonth(), now.getDate());
    const totalSeconds = (targetDate - now) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;
}

// Aggiorna i contatori ogni secondo
setInterval(updateMainCounter, 1000);
setInterval(updateVaccineCounter, 1000);
setInterval(updateCountdown, 1000);
