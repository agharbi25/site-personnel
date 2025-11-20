// --- DARK MODE ---
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// --- ANIMATION AU SCROLL ---
const elements = document.querySelectorAll(".fade");

const showOnScroll = () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// --- PROJETS (AJOUTÉS VIA JS) ---
const projects = [
    {
        title: "Station météo IoT",
        desc: "ESP32 + capteurs température/humidité + dashboard web."
    },
    {
        title: "Application mobile IoT",
        desc: "Contrôle de LED et capteurs via Bluetooth."
    },
    {
        title: "Domotique ESP32",
        desc: "Gestion maison connectée : relais, MQTT, dashboard."
    }
];

const container = document.getElementById("projectsContainer");

projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card fade";
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(card);
});
