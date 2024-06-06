// Imposta la data di inizio per il contatore principale
const mainStartDate = new Date("2018-09-30T00:00:00Z");

// Imposta la data di inizio per il contatore del ritardo pagamento dei vaccini
const vaccineStartDate = new Date("2024-03-30T00:00:00Z");

function updateCounter(startDate, elementId) {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerText = `${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi`;
}

function updateAllCounters() {
    updateCounter(mainStartDate, "main-counter");
    updateCounter(vaccineStartDate, "vaccine-counter");
}

// Aggiorna i contatori ogni secondo
setInterval(updateAllCounters, 1000);

// Aggiorna subito i contatori alla prima visualizzazione
updateAllCounters();
