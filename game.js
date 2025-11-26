document.addEventListener("DOMContentLoaded", function() {

    // --- Categorías (Mantenido sin cambios) ---
    const CATEGORIES = {
        ANIMALES: {
            list: [
                { civil: "Perro", impostor: "Cola" },
                { civil: "Gato", impostor: "Lasaña" },
                { civil: "Caballo", impostor: "Arnés" },
                { civil: "Vaca", impostor: "Bosta" },
                { civil: "Oveja", impostor: "Lana" },
                { civil: "Pato", impostor: "Estanque" },
                { civil: "Gallina", impostor: "Dinosaurio" },
                { civil: "León", impostor: "Rugido" },
                { civil: "Elefante", impostor: "Colmillo" },
                { civil: "Tigre", impostor: "Rayas" },
                { civil: "Conejo", impostor: "Noche" },
                { civil: "Cebra", impostor: "Líneas" },
                { civil: "Serpiente", impostor: "Siseo" },
                { civil: "Cocodrilo", impostor: "Mandíbulas" },
                { civil: "Hipopótamo", impostor: "Caca" },
                { civil: "Gorila", impostor: "Brazo" },
                { civil: "Mono", impostor: "Cola" },
                { civil: "Jirafa", impostor: "Cuello" },
                { civil: "Rinoceronte", impostor: "Cuerno" },
                { civil: "Osos", impostor: "Hibernación" },
                { civil: "Lobo", impostor: "Manada" },
                { civil: "Águila", impostor: "Garras" },
                { civil: "Búho", impostor: "Silencio" },
                { civil: "Cigüeña", impostor: "Bebé" },
                { civil: "Pingüino", impostor: "Hielo" },
                { civil: "Delfín", impostor: "Olas" },
                { civil: "Ballena", impostor: "Sin Espacio" },
                { civil: "Tiburón", impostor: "Herramientas" },
                { civil: "Canguro", impostor: "Bolsillo" },
                { civil: "Koala", impostor: "Abrazo" },
                { civil: "Panda", impostor: "Masticar" },
                { civil: "Ciervo", impostor: "Astas" },
                { civil: "Alce", impostor: "Frío" },
                { civil: "Llama", impostor: "Cordero" },
                { civil: "Coyote", impostor: "Desierto" },
                { civil: "Búfalo", impostor: "Grano" },
                { civil: "Bisonte", impostor: "Manada" },
                { civil: "Pavo real", impostor: "Verdadero" },
                { civil: "Gaviota", impostor: "Gritos" },
                { civil: "Gusano", impostor: "Tierra" },
                { civil: "Murciélago", impostor: "Corona" },
                { civil: "Pollo", impostor: "Cloqueo" },
                { civil: "Leopardo", impostor: "Manchas" },
                { civil: "Cangrejo", impostor: "Pinzas" },
                { civil: "Mula", impostor: "Resistencia" },
                { civil: "Ardilla", impostor: "Nuez" },
                { civil: "Zorro", impostor: "Trampa" }
            ],
            type: 'dynamic'
        },
        COMIDA: {
            list: [
                { civil: "Choclo", impostor: "Cereal" },
                { civil: "Parrilla", impostor: "Leña" },
                { civil: "Sopaipilla", impostor: "Frita" },
                { civil: "Mote con huesillo", impostor: "Fruto seco" },
                { civil: "Empanada", impostor: "Horno" },
                { civil: "Cazuela", impostor: "Verduras" },
                { civil: "Completo", impostor: "Pan" },
                { civil: "Empanada de pino", impostor: "Carne" },
                { civil: "Pastel de choclo", impostor: "Cebolla" },
                { civil: "Curanto", impostor: "Piedra" },
                { civil: "Sopaipillas", impostor: "Aceite" },
                { civil: "Pebre", impostor: "Cilantro" },
                { civil: "Choripán", impostor: "Pan" },
                { civil: "Porotos con riendas", impostor: "Fideos" },
                { civil: "Pantrucas", impostor: "Caldo" },
                { civil: "Tortillas de rescoldo", impostor: "Carbón" },
                { civil: "Chirimoya alegre", impostor: "Tropical" },
                { civil: "Humitas", impostor: "Cinturon" },
                { civil: "Paila marina", impostor: "Aromas" },
                { civil: "Caldillo de congrio", impostor: "Agua salada" },
                { civil: "Ceviche chileno", impostor: "Marisco" },
                { civil: "Tallarines con salsa", impostor: "Di Maria" },
                { civil: "Leche asada", impostor: "Caramelo" },
                { civil: "Papas Mayo", impostor: "Acompañante" },
                { civil: "Berlines", impostor: "Masa" },
                { civil: "Cuchuflí", impostor: "Caramelizado" },
                { civil: "Chacarero", impostor: "Tomate" },
                { civil: "Sánguche de potito", impostor: "Cerdo" },
                { civil: "Torta de mil hojas", impostor: "Capas" },
                { civil: "Ají", impostor: "Chile" },
                { civil: "Paila de mariscos", impostor: "Mariscos frescos" },
                { civil: "Pescado frito", impostor: "Crocante" },
                { civil: "Chorrillana", impostor: "Sartén" },
                { civil: "Pan de Pascua", impostor: "Navidad" }
            ],
            type: "dynamic"
        },
        // ... otras categorías aquí...
    };

    // Al inicio, llenar AZAR con todos los elementos de las otras categorías
    CATEGORIES.AZAR.list = [
        ...CATEGORIES.ANIMALES.list,
        ...CATEGORIES.COMIDA.list,
        // Agregar las otras categorías como OBJETOS, LUGARES, etc.
    ];

    // --- Referencias DOM ---
    const audioReveal = document.getElementById('audioReveal');
    const audioTick = document.getElementById('audioTick');
    const audioStart = document.getElementById('audioStart');
    const audioExpulsion = document.getElementById('audioExpulsion');
    const audioGanadorImpostores = document.getElementById('audioGanadorImpostores');
    const audioEliminacionCivil = document.getElementById('audioEliminacionCivil');

    function playSound(audioElement) {
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.log("Advertencia: No se pudo reproducir el audio automáticamente.", e));
        }
    }

    // --- Lógica de Juego ---
    let numPlayers = 0;
    let impostors = 0;
    let players = [];
    let currentPlayerIndex = 0;
    let countdownInterval;
    let totalSeconds = 300;

    function resetGame() {
        document.getElementById("gameSettings").style.display = "block";
        document.getElementById("gameInterface").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("countdownFiveMinutes").style.display = "none";

        playerToStartDiv.style.display = "none";
        votingSection.style.display = "none";
        newGameBtn.style.display = 'none';
        headerGameTitle.style.display = "block";
        container.style.display = "block";

        voteButton.style.display = "block";

        if (countdownInterval) clearInterval(countdownInterval);
        totalSeconds = 300;
        players = [];
        currentPlayerIndex = 0;

        votingResultDiv.innerHTML = "";
        votingResultDiv.style.display = "none";

        updateImpostorControls();
    }

    newGameBtn.addEventListener("click", resetGame);

    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
    }

    function pauseCountdown() {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    function resumeCountdown() {
        if (!countdownInterval) {
            startFiveMinuteCountdown(totalSeconds);
        }
    }

    function displayStartingPlayer(playerName) {
        countdownDiv.style.display = "none";
        playerToStartDiv.style.display = "flex";
        startPlayerMessage.innerHTML = `¡Empieza la Ronda:<br><strong>${playerName}</strong>`;

        playSound(audioStart);

        setTimeout(function() {
            playerToStartDiv.style.display = "none";
            startFiveMinuteCountdown();
        }, 3000);
    }

    function startFiveMinuteCountdown(initialSeconds = 300) {
        fiveMinuteCountdownDiv.style.display = "flex";
        votingSection.style.display = "flex"; 

        voteButton.style.display = "block";
        voteInterface.style.display = "none";
        votingResultDiv.style.display = "none";

        totalSeconds = initialSeconds;
        fiveMinuteTimer.textContent = formatTime(totalSeconds);

        if (countdownInterval) clearInterval(countdownInterval);

        countdownInterval = setInterval(function() {
            totalSeconds--;
            fiveMinuteTimer.textContent = formatTime(totalSeconds);

            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                fiveMinuteTimer.textContent = "00:00";

                votingSection.style.display = "flex";
                voteInterface.style.display = "none";
                votingResultDiv.style.display = "block";

                const impostorNames = players.filter(p => p.isImpostor).map(p => p.name).join(" y ");
                votingResultDiv.innerHTML = `Impostores ganaron!<br>Impostor(es): ${impostorNames}`;

                playSound(audioGanadorImpostores);
                voteButton.style.display = "none";
                newGameBtn.style.display = "block";
                fiveMinuteCountdownDiv.style.display = "none"; 
                headerGameTitle.style.display = "block";
            }
        }, 1000);
    }

    function voteForPlayer(index) {
        pauseCountdown(); 
        voteInterface.style.display = "none";
        votingResultDiv.style.display = "block";
        voteButton.style.display = "none"; 
        newGameBtn.style.display = "none";

        const playerVoted = players[index];
        players[index].disabled = true; 

        if (playerVoted.isImpostor) {
            votingResultDiv.innerHTML = `${playerVoted.name} ha sido expulsado.<br>Era un Impostor.`;
            playSound(audioEliminacionCivil);
        } else {
            votingResultDiv.innerHTML = `${playerVoted.name} ha sido expulsado.<br>Era un Civil.`;
        }

        setTimeout(function() {
            newGameBtn.style.display = "block";
        }, 3000);
    }

    // Función para mostrar las cartas
    function showCard(index) {
        cardsContainer.innerHTML = "";
        let player = players[index];
        
        let card = document.createElement("div");
        card.classList.add("player-card");

        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        let roleImage = document.createElement("img");
        roleImage.src = player.isImpostor ? "https://i.ibb.co/FqYKptGN/descarga-2.png" : "https://i.ibb.co/WNfJQv83/Inocente.png";
        roleImage.style.display = "none";

        let roleTitle = document.createElement("div"); 
        roleTitle.innerText = `Hola ${player.name}`;

        let wordText = document.createElement("div"); 
        wordText.innerText = "Toca para revelar";

        cardContent.appendChild(roleImage); 
        cardContent.appendChild(roleTitle); 
        cardContent.appendChild(wordText);

        let cardOverlay = document.createElement("div");
        cardOverlay.classList.add("card-overlay");
        cardOverlay.innerHTML = `<div>TURNO DE<br>${player.name}</div>`;

        card.appendChild(cardContent);
        card.appendChild(cardOverlay);
        cardsContainer.appendChild(card);

        card.addEventListener("click", function() {
            if (!card.classList.contains("revealed")) {
                const role = player.isImpostor ? "IMPOSTOR" : "CIVIL";
                const roleColor = player.isImpostor ? '#FFEB3B' : '#00BCD4';

                roleTitle.innerHTML = `<span style="color:${roleColor}; font-weight: bold;">¡Eres ${role}!</span>`;
                wordText.innerHTML = `<div style="font-size: 1.8em; font-weight: bold;">${player.word}</div>`;

                roleImage.style.display = "block";

                card.classList.add("revealed");
                nextPlayerBtn.style.display = "block";

                playSound(audioReveal);

                if (index === numPlayers - 1) {
                    nextPlayerBtn.textContent = "¡Comenzar el juego!";
                } else {
                    nextPlayerBtn.textContent = "Siguiente Jugador";
                }
            }
        });
    }

    // Más funciones para la lógica del juego (no cambiadas)

});
