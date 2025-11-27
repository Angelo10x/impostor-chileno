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
    OBJETOS: {
    list: [
        { civil: "Celular", impostor: "Vibración" },
        { civil: "Llave", impostor: "Cerradura" },
        { civil: "Lámpara", impostor: "Bombilla" },
        { civil: "Taza", impostor: "Cerámica" },
        { civil: "Sombrero", impostor: "Ala" },
        { civil: "Zapato", impostor: "Suela" },
        { civil: "Bicicleta", impostor: "Rueda" },
        { civil: "Cinturón", impostor: "Hebilla" },
        { civil: "Espejo", impostor: "Reflejo" },
        { civil: "Reloj", impostor: "Manecillas" },
        { civil: "Mochila", impostor: "Tirantes" },
        { civil: "Pluma", impostor: "Tinta" },
        { civil: "Libro", impostor: "Portada" },
        { civil: "Silla", impostor: "Respaldo" },
        { civil: "Mesa", impostor: "Superficie" },
        { civil: "Cartera", impostor: "Cremallera" },
        { civil: "Gafas", impostor: "Cristales" },
        { civil: "Carpeta", impostor: "Archivo" },
        { civil: "Cuaderno", impostor: "Papel" },
        { civil: "Auriculares", impostor: "Almohadillas" },
        { civil: "Manta", impostor: "Tela" },
        { civil: "Linterna", impostor: "Batería" },
        { civil: "Paraguas", impostor: "Varillas" },
        { civil: "Papel", impostor: "Limpía" },
        { civil: "Ropa", impostor: "Tejido" },
        { civil: "Bolsillo", impostor: "Costura" },
        { civil: "Mouse", impostor: "Disney" },
        { civil: "Pantalla", impostor: "Imagen" },
        { civil: "Ventilador", impostor: "Aire" },
        { civil: "Caja", impostor: "Tapa" },
        { civil: "Vaso", impostor: "Beber" },
        { civil: "Lentes", impostor: "Orejas" },
        { civil: "Cinta", impostor: "Adhesivo" },
        { civil: "Cuchara", impostor: "Comida" }
    ],
    type: "dynamic"
    },
    LUGARES: {
    list: [
        { civil: "Cine", impostor: "Pantalla" },
        { civil: "Mar", impostor: "Sal" },
        { civil: "Playa", impostor: "Tumbona" },
        { civil: "Río", impostor: "Caudal" },
        { civil: "Sala de clases", impostor: "Pizarra" },
        { civil: "Parque", impostor: "Árboles" },
        { civil: "Montaña", impostor: "Cima" },
        { civil: "Biblioteca", impostor: "Estante" },
        { civil: "Restaurante", impostor: "Comensales" },
        { civil: "Supermercado", impostor: "Pasillo" },
        { civil: "Hospital", impostor: "Camas" },
        { civil: "Oficina", impostor: "Reunión" },
        { civil: "Estadio", impostor: "Grada" },
        { civil: "Iglesia", impostor: "Altar" },
        { civil: "Cafetería", impostor: "Barista" },
        { civil: "Museo", impostor: "Galería" },
        { civil: "Teatro", impostor: "Actores" },
        { civil: "Aeropuerto", impostor: "Terminal" },
        { civil: "Hotel", impostor: "Check-in" },
        { civil: "Centro comercial", impostor: "Escaparate" },
        { civil: "Plaza", impostor: "Fuente" },
        { civil: "Estación de tren", impostor: "Vía" },
        { civil: "Estación de metro", impostor: "Túnel" },
        { civil: "Gimnasio", impostor: "Cardio" },
        { civil: "Farmacia", impostor: "Receta" },
        { civil: "Tienda", impostor: "Estante" },
        { civil: "Pista de baile", impostor: "Ritmo" },
        { civil: "Fábrica", impostor: "Máquinas" },
        { civil: "Universidad", impostor: "Aula" },
        { civil: "Jardín", impostor: "Maceta" },
        { civil: "Cementerio", impostor: "Lápida" },
        { civil: "Mercado", impostor: "Puesto" },
        { civil: "Zoológico", impostor: "Jaula" },
        { civil: "Paseo", impostor: "Caminar" },
        { civil: "Túnel", impostor: "Cueva" }
    ],
    type: "dynamic"
    },
    // --- Nueva Categoría AZAR ---
    AZAR: {
        list: [], // Se llenará dinámicamente
        type: "dynamic"
    }
};

    // Al inicio, llenar AZAR con todos los elementos de las otras categorías
    CATEGORIES.AZAR.list = [
        ...CATEGORIES.ANIMALES.list,
        ...CATEGORIES.COMIDA.list,
        ...CATEGORIES.OBJETOS.list,
        ...CATEGORIES.LUGARES.list
    ];

    // --- Referencias DOM (Mantenido sin cambios) ---
    const numPlayersSelect = document.getElementById("numPlayers");
    const impostorsSpan = document.getElementById("impostorsCount"); 
    const startGameBtn = document.getElementById("startGame");
    const nextPlayerBtn = document.getElementById("nextPlayerBtn");
    const cardsContainer = document.getElementById("cardsContainer");
    const countdownDiv = document.getElementById("countdown");
    const countdownTimer = document.getElementById("timer");
    const fiveMinuteCountdownDiv = document.getElementById("countdownFiveMinutes");
    const fiveMinuteTimer = document.getElementById("fiveMinuteCountdown");
    const voteButton = document.getElementById("voteButton");
    const voteInterface = document.getElementById("voteInterface");
    const voteOptionsDiv = document.getElementById("voteOptions");
    const votingResultDiv = document.getElementById("votingResult");
    const categorySelect = document.getElementById("categorySelect");
    const playerNamesContainer = document.getElementById("playerNamesContainer");
    const decreaseImpostors = document.getElementById("decreaseImpostors");
    const increaseImpostors = document.getElementById("increaseImpostors");
    const votingSection = document.getElementById("votingSection");
    const cancelVoteBtn = document.getElementById("cancelVoteBtn"); 
    
    const headerGameTitle = document.getElementById("headerGameTitle");
    const newGameBtn = document.getElementById("newGameBtn"); 
    
    const playerToStartDiv = document.getElementById("playerToStart"); 
    const startPlayerMessage = document.getElementById("startPlayerMessage"); 
    
    const container = document.getElementById("mainContainer"); 
    
    // =======================================================
    // --- INICIALIZACIÓN DE AUDIO ---
    // =======================================================
    
    const audioReveal = document.getElementById('audioReveal');
    const audioTick = document.getElementById('audioTick');
    const audioExpulsion = document.getElementById('audioExpulsion'); 
    const audioWinImpostor = document.getElementById('audioWinImpostor');
    const audioLoseImpostor = document.getElementById('audioLoseImpostor'); 

    function playSound(audioElement) {
        if (audioElement) {
            // Detiene y reinicia el sonido antes de reproducir para evitar solapamiento
            audioElement.pause();
            audioElement.currentTime = 0;
            // Catch para evitar errores si el usuario no ha interactuado con la página
            audioElement.play().catch(e => console.log("Advertencia: No se pudo reproducir el audio automáticamente.", e));
        }
    }
    // =======================================================
    // --- FIN AUDIO ---
    // =======================================================

    // --- Variables ---
    let numPlayers = 0;
    let impostors = 0;
    let players = [];
    let currentPlayerIndex = 0;
    let countdownInterval;
    let totalSeconds = 300; 
    let lastStartingPlayerName = ""; 

    // --- Función de Barajado (Fisher-Yates) para verdadera aleatoriedad ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- Funciones (Mantenidas sin cambios relevantes, excepto start3SecondCountdown) ---

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
        
        setTimeout(function() {
            playerToStartDiv.style.display = "none"; 
            startFiveMinuteCountdown();
        }, 3000); 
    }
    
    function startFiveMinuteCountdown(initialSeconds = 300) {
        document.getElementById("gameInterface").style.display = "none";
        countdownDiv.style.display = "none";
        headerGameTitle.style.display = "none"; 
        
        // MOSTRAR TEMPORIZADOR Y BOTÓN
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
                
                // Agregamos el nombre del impostor al mensaje de fin de tiempo
                const impostorNames = players.filter(p => p.isImpostor).map(p => p.name).join(" y ");
                
                votingResultDiv.innerHTML = `⏰ ¡Tiempo terminado!<br>El Impostor ha ganado por tiempo.<br><br>Impostor(es): <span style="color:#FFEB3B; font-weight:bold; font-size:1.2em;">${impostorNames}</span>`;

                // SONIDO: Victoria Impostor (audio/ganador_imposostores.mp3)
                playSound(audioWinImpostor); 
                
                voteButton.style.display = "none";
                newGameBtn.style.display = "block";
                fiveMinuteCountdownDiv.style.display = "none"; 
                headerGameTitle.style.display = "block";
            }
        }, 1000);
    }

    /**
     * CORRECCIÓN APLICADA: El audio se inicia inmediatamente con el número 3,
     * eliminando el retraso de 1 segundo.
     */
    function start3SecondCountdown() {
        document.getElementById("gameInterface").style.display = "none"; 
        headerGameTitle.style.display = "block"; 
        countdownDiv.style.display = "flex";
        let countdownTime = 3;
        countdownTimer.textContent = countdownTime;

        // --- FIX: Reproducir el sonido inmediatamente para el número 3 ---
        playSound(audioTick);

        let interval = setInterval(function() {
            countdownTime--;
            
            // Solo actualizamos y reproducimos si el tiempo es mayor a 0 (para el 2 y el 1)
            if (countdownTime > 0) {
                countdownTimer.textContent = countdownTime;
                playSound(audioTick); 
            } else {
                // Cuando llega a 0, detenemos el intervalo e iniciamos el juego
                clearInterval(interval);
                
                // --- LÓGICA DE SELECCIÓN DE JUGADOR INICIAL ---
                const activePlayers = players.filter(p => !p.disabled);
                let candidates = activePlayers;

                // Si hay suficientes jugadores, intentamos que no repita el que empezó la vez pasada
                if (lastStartingPlayerName && activePlayers.length > 1) {
                    const filtered = activePlayers.filter(p => p.name !== lastStartingPlayerName);
                    if (filtered.length > 0) {
                        candidates = filtered;
                    }
                }

                const startingPlayer = candidates[Math.floor(Math.random() * candidates.length)];
                lastStartingPlayerName = startingPlayer.name;
                displayStartingPlayer(startingPlayer.name);
            }
        }, 1000);
    }
    
    function countActiveImpostors() {
        return players.filter(p => p.isImpostor && !p.disabled).length;
    }

    function countActiveCivils() {
        return players.filter(p => !p.isImpostor && !p.disabled).length;
    }

    function voteForPlayer(index) {
        pauseCountdown(); // Detiene el timer durante el voto
        fiveMinuteCountdownDiv.style.display = "none";
        headerGameTitle.style.display = "block"; 
        container.style.display = "block"; 
        
        const playerVoted = players[index];
        
        voteInterface.style.display = "none";
        votingResultDiv.style.display = "block";
        voteButton.style.display = "none"; 
        newGameBtn.style.display = "none";

        // FASE 1
        votingResultDiv.innerHTML = `
            🗳️ <strong>Procesando Votos...</strong> 🗳️<br><br>
            <span style="font-size:0.8em; color:#aaa;">Calculando destino de ${playerVoted.name}...</span>
        `;
        
        setTimeout(function() {
            const role = playerVoted.isImpostor ? "IMPOSTOR" : "CIVIL";
            const roleColor = playerVoted.isImpostor ? '#FFEB3B' : '#00BCD4';

            players[index].disabled = true; 
            
            const activeImpostors = countActiveImpostors();
            const activeCivils = countActiveCivils();

            // FASE 2
            votingResultDiv.innerHTML = `
                🗳️ <strong>Resultado</strong> 🗳️<br><br>
                ${playerVoted.name} ha sido expulsado.<br> 
                Era: <span style="color:${roleColor}; font-weight: bold; font-size: 1.4em;">${role}</span>.
            `;

            // Lógica de Audio para la eliminación (FASE 2)
            if (playerVoted.isImpostor) {
                 // SONIDO: Perdedor Impostor (Al eliminar a un Impostor)
                playSound(audioLoseImpostor); 
            } else if (!playerVoted.isImpostor && players.length >= 4) {
                 // SONIDO: Eliminación Civil (Solo si NO es impostor Y hay 4 o más jugadores iniciales)
                playSound(audioExpulsion); 
            }
            
            // Si quieres que el resultado final sea más explícito
            const impostorNames = players.filter(p => p.isImpostor).map(p => p.name).join(" y ");

            setTimeout(function() {
                // FASE 3: Determinar el final del juego
                let finalMessage = "";
                let gameEnded = false;

                if (activeImpostors === 0) {
                    finalMessage = `🎉 ¡Victoria Civil! 🎉<br>Todos los impostores eliminados.`;
                    gameEnded = true;
                    playSound(audioLoseImpostor); 
                } else if (activeImpostors >= activeCivils) {
                    finalMessage = `😈 ¡Victoria Impostor! 😈<br>Impostores dominan la nave.<br><br>Impostor(es): <span style="color:#FFEB3B; font-weight:bold; font-size:1.2em;">${impostorNames}</span>`;
                    gameEnded = true;
                    // SONIDO: Victoria Impostor
                    playSound(audioWinImpostor); 
                } else {
                    finalMessage = playerVoted.isImpostor ? 
                        "✅ ¡Bien! Un Impostor menos.<br>El juego continúa..." : 
                        "❌ Error. Inocente expulsado.<br>El juego continúa...";
                    gameEnded = false;
                }
                
                votingResultDiv.innerHTML = finalMessage;
                
                if (!gameEnded) {
                    setTimeout(function() {
                        votingResultDiv.style.display = "none";
                        voteButton.style.display = "block";
                        resumeCountdown(); 
                    }, 3000);
                } else {
                    newGameBtn.style.display = "block";
                }

            }, 3000); 
        }, 3000); 
    }

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
        roleTitle.id = "roleTitle";
        roleTitle.innerText = `Hola ${player.name}`;
        
        let wordText = document.createElement("div"); 
        wordText.id = "wordText";
        wordText.innerText = "Toca para revelar";
        
        let clueElement = document.createElement("div");
        clueElement.id = "clue";
        clueElement.innerText = player.clue;
        clueElement.style.display = "none";

        cardContent.appendChild(roleImage); 
        cardContent.appendChild(roleTitle); 
        cardContent.appendChild(wordText); 
        cardContent.appendChild(clueElement);
        
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
                if (player.isImpostor && player.clue) clueElement.style.display = "block";
                
                card.classList.add("revealed");
                nextPlayerBtn.style.display = "block";
                
                // SONIDO: Revelar carta (audio/revelar.mp3)
                playSound(audioReveal); 
                
                if (index === numPlayers - 1) {
                    nextPlayerBtn.textContent = "¡Comenzar el juego!";
                } else {
                    nextPlayerBtn.textContent = "Siguiente Jugador";
                }
            }
        });
    }

    function generateNameInputs() {
        playerNamesContainer.innerHTML = '';
        const currentNumPlayers = parseInt(numPlayersSelect.value);
        for (let i = 0; i < currentNumPlayers; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `playerName${i}`;
            input.placeholder = `Jugador ${i + 1}`;
            input.autocomplete = "off";
            playerNamesContainer.appendChild(input);
        }
    }

    function updateImpostorControls() {
        const currentPlayers = parseInt(numPlayersSelect.value);
        let maxImpostors = (currentPlayers >= 7) ? 2 : 1;
        if (currentPlayers >= 9) maxImpostors = 3;

        let currentImpostors = parseInt(impostorsSpan.textContent);
        if (currentImpostors > maxImpostors) impostorsSpan.textContent = maxImpostors;
        if (currentImpostors < 1) impostorsSpan.textContent = 1;
        
        decreaseImpostors.disabled = parseInt(impostorsSpan.textContent) <= 1;
        increaseImpostors.disabled = parseInt(impostorsSpan.textContent) >= maxImpostors;
    }

    // --- Listeners (Mantenido sin cambios) ---
    numPlayersSelect.addEventListener('change', () => {
        generateNameInputs();
        updateImpostorControls();
    });
    
    document.getElementById("changeNamesBtn").addEventListener('click', function() {
        playerNamesContainer.style.display = (playerNamesContainer.style.display === 'flex') ? 'none' : 'flex';
        if(playerNamesContainer.style.display === 'flex') generateNameInputs();
    });
    
    decreaseImpostors.addEventListener('click', () => {
        let current = parseInt(impostorsSpan.textContent);
        if (current > 1) {
            impostorsSpan.textContent = current - 1;
            updateImpostorControls();
        }
    });
    
    increaseImpostors.addEventListener('click', () => {
        let current = parseInt(impostorsSpan.textContent);
        const currentPlayers = parseInt(numPlayersSelect.value);
        let maxImpostors = (currentPlayers >= 9) ? 3 : (currentPlayers >= 7 ? 2 : 1);
        if (current < maxImpostors) {
            impostorsSpan.textContent = current + 1;
            updateImpostorControls();
        }
    });

    startGameBtn.addEventListener("click", function() {
        document.getElementById("gameSettings").style.display = "none";
        document.getElementById("gameInterface").style.display = "flex";
        
        currentPlayerIndex = 0;
        numPlayers = parseInt(numPlayersSelect.value);
        impostors = parseInt(impostorsSpan.textContent);
        
        const selectedCategory = CATEGORIES[categorySelect.value];
        let civilWord = "Error", impostorWord = "Error", impostorClue = "";

        if (selectedCategory && selectedCategory.type === 'dynamic' && selectedCategory.list.length > 0) {
            const pair = selectedCategory.list[Math.floor(Math.random() * selectedCategory.list.length)];
            civilWord = pair.civil;
            impostorWord = pair.impostor; 
        }

        players = [];
        
        // 1. Crear jugadores básicos
        for (let i = 0; i < numPlayers; i++) {
            let nameInput = document.getElementById(`playerName${i}`);
            let playerName = (nameInput && nameInput.value.trim() !== "") ? nameInput.value : `Jugador ${i + 1}`;
            players.push({ name: playerName, isImpostor: false, word: civilWord, clue: impostorClue, disabled: false });
        }

        // 2. Asignar Impostores usando Fisher-Yates para asegurar distribución uniforme
        let indices = Array.from({length: numPlayers}, (_, i) => i);
        indices = shuffleArray(indices);
        
        for (let i = 0; i < impostors; i++) {
            let impostorIndex = indices[i];
            players[impostorIndex].isImpostor = true;
            players[impostorIndex].word = impostorWord;
        }

        showCard(currentPlayerIndex);
    });

    nextPlayerBtn.addEventListener("click", function() {
        if (currentPlayerIndex === numPlayers - 1) {
            document.getElementById("gameInterface").style.display = "none";
            start3SecondCountdown();
            nextPlayerBtn.style.display = "none";
        } else {
            currentPlayerIndex++;
            showCard(currentPlayerIndex);
            this.style.display = "none";
        }
    });

    voteButton.addEventListener("click", function() {
        pauseCountdown(); 
        voteInterface.style.display = "block";
        voteButton.style.display = "none";
        newGameBtn.style.display = "none"; 
        votingResultDiv.style.display = "none"; 

        voteOptionsDiv.innerHTML = "";
        players.forEach((player, index) => {
            if (!player.disabled) {
                let btn = document.createElement("button");
                btn.innerText = player.name;
                btn.addEventListener("click", () => voteForPlayer(index));
                voteOptionsDiv.appendChild(btn);
            }
        });
    });

    // Cancelar voto
    cancelVoteBtn.addEventListener("click", function() {
        voteInterface.style.display = "none";
        voteButton.style.display = "block";
        resumeCountdown();
    });
    
    updateImpostorControls();
});
