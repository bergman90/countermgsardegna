// Imposta la data di inizio
const startDate = new Date("2018-09-30T00:00:00Z");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("counter").innerText = `${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;
}

// Aggiorna il contatore ogni secondo
setInterval(updateCounter, 1000);

// Aggiorna subito il contatore alla prima visualizzazione
updateCounter();
