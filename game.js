document.addEventListener("DOMContentLoaded", function() {

    // --- Categorías ---
    const CATEGORIES = {
    ANIMALES: {
        list: [
            { civil: "Perro", impostor: "Lealtad" },
            { civil: "Gato", impostor: "Sigiloso" },
            { civil: "Caballo", impostor: "Establo" },
            { civil: "Vaca", impostor: "Pastoreo" },
            { civil: "Oveja", impostor: "Rebaño" },
            { civil: "Pato", impostor: "Plumaje impermeable" },
            { civil: "Gallina", impostor: "Pico ruidoso" },
            { civil: "León", impostor: "Sabana" },
            { civil: "Elefante", impostor: "Paquidermo" },
            { civil: "Tigre", impostor: "Caza nocturna" },
            { civil: "Conejo", impostor: "Zanahorias" },
            { civil: "Cebra", impostor: "Sabana rayada" },
            { civil: "Serpiente", impostor: "Escamas" },
            { civil: "Cocodrilo", impostor: "Reptil letal" },
            { civil: "Hipopótamo", impostor: "Terrestre acuático" },
            { civil: "Gorila", impostor: "Fuerza salvaje" },
            { civil: "Mono", impostor: "Travesuras arbóreas" },
            { civil: "Jirafa", impostor: "Sombrero vegetal" },
            { civil: "Rinoceronte", impostor: "Blindaje natural" },
            { civil: "Osos", impostor: "Frutos de bosque" },
            { civil: "Lobo", impostor: "Aullido" },
            { civil: "Águila", impostor: "Vuelo de altura" },
            { civil: "Búho", impostor: "Ojos nocturnos" },
            { civil: "Cigüeña", impostor: "Emigrante" },
            { civil: "Pingüino", impostor: "Marcha helada" },
            { civil: "Delfín", impostor: "Salto acrobático" },
            { civil: "Ballena", impostor: "Canción profunda" },
            { civil: "Tiburón", impostor: "Depredador marino" },
            { civil: "Canguro", impostor: "Marsupial saltarín" },
            { civil: "Koala", impostor: "Dormilón de eucalipto" },
            { civil: "Panda", impostor: "Bamboo" },
            { civil: "Ciervo", impostor: "Rastro de cornamenta" },
            { civil: "Alce", impostor: "Bosque boreal" },
            { civil: "Llama", impostor: "Andina y resistente" },
            { civil: "Coyote", impostor: "Aullido solitario" },
            { civil: "Búfalo", impostor: "Llanuras abiertas" },
            { civil: "Bisonte", impostor: "Estepa salvaje" },
            { civil: "Pavo real", impostor: "Cola desplegada" },
            { civil: "Gaviota", impostor: "Alas costeras" },
            { civil: "Gusano", impostor: "Excavador subterráneo" },
            { civil: "Murciélago", impostor: "Vuelo nocturno" },
            { civil: "Pollo", impostor: "Ponedora" },
            { civil: "Leopardo", impostor: "Sigiloso acecho" },
            { civil: "Cangrejo", impostor: "Caminar de lado" },
            { civil: "Mula", impostor: "Híbrido de carga" },
            { civil: "Ardilla", impostor: "Almacenadora" },
            { civil: "Zorro", impostor: "Astuto cazador" }
        ],
        type: 'dynamic'
    },
    COMIDA: {
    list: [
        { civil: "Choclo", impostor: "Grano" },
        { civil: "Parrilla", impostor: "Carbón" },
        { civil: "Sopaipilla", impostor: "Zapallo" },
        { civil: "Mote con huesillo", impostor: "Durazno" },
        { civil: "Empanada", impostor: "Horno" },
        { civil: "Cazuela", impostor: "Caldo" },
        { civil: "Completo", impostor: "Vienesa" },
        { civil: "Empanada de pino", impostor: "Masa" },
        { civil: "Pastel de choclo", impostor: "Gratinado" },
        { civil: "Curanto", impostor: "Mariscos" },
        { civil: "Sopaipillas", impostor: "Fritura" },
        { civil: "Pebre", impostor: "Ají" },
        { civil: "Choripán", impostor: "Parrilla" },
        { civil: "Porotos con riendas", impostor: "Frijoles" },
        { civil: "Pantrucas", impostor: "Fideos" },
        { civil: "Tortillas de rescoldo", impostor: "Horno" },
        { civil: "Chirimoya alegre", impostor: "Fruta" },
        { civil: "Humitas", impostor: "Choclo" },
        { civil: "Paila marina", impostor: "Sopa" },
        { civil: "Caldillo de congrio", impostor: "Congrio" },
        { civil: "Ceviche chileno", impostor: "Cítrico" },
        { civil: "Tallarines con salsa de mariscos", impostor: "Mariscos" },
        { civil: "Leche asada", impostor: "Dulce" },
        { civil: "Papas con mayonesa", impostor: "Ensalada" },
        { civil: "Berlines", impostor: "Dulce" },
        { civil: "Cuchuflí", impostor: "Caramelo" },
        { civil: "Chacarero", impostor: "Papas" },
        { civil: "Sánguche de potito", impostor: "Cerdo" },
        { civil: "Torta de mil hojas", impostor: "Pastel" },
        { civil: "Ají de gallina", impostor: "Picante" },
        { civil: "Paila de mariscos", impostor: "Caldoso" },
        { civil: "Pescado frito", impostor: "Mariscos" },
        { civil: "Chorrillana", impostor: "Papas" },
        { civil: "Pan de Pascua", impostor: "Navidad" }
    ],
    type: "dynamic"
    },
    OBJETOS: {
        list: [
            { civil: "Celular", impostor: "Silencio" },
            { civil: "Llave", impostor: "Acceso" },
            { civil: "Lámpara", impostor: "Genio" },
            { civil: "Taza", impostor: "Desayuno" },
            { civil: "Sombrero", impostor: "Paja" },
            { civil: "Zapato", impostor: "Cordón" },
            { civil: "Bicicleta", impostor: "Pedal" },
            { civil: "Cinturón", impostor: "Apretar" },
            { civil: "Espejo", impostor: "Mirar" },
            { civil: "Reloj", impostor: "Puntualidad" },
            { civil: "Mochila", impostor: "Cierre" },
            { civil: "Pluma", impostor: "Escribir" },
            { civil: "Libro", impostor: "Páginas" },
            { civil: "Silla", impostor: "Reposo" },
            { civil: "Mesa", impostor: "Comedor" },
            { civil: "Cartera", impostor: "Billetera" },
            { civil: "Gafas", impostor: "Óptica" },
            { civil: "Carpeta", impostor: "Documentos" },
            { civil: "Cuaderno", impostor: "Notas" },
            { civil: "Auriculares", impostor: "Sonido" },
            { civil: "Manta", impostor: "Cobijo" },
            { civil: "Linterna", impostor: "Oscuridad" },
            { civil: "Paraguas", impostor: "Tormenta" },
            { civil: "Papel", impostor: "Escribir" },
            { civil: "Ropa", impostor: "Vestir" },
            { civil: "Bolsillo", impostor: "Secreto" },
            { civil: "Teclado", impostor: "Escribir" },
            { civil: "Ratón", impostor: "Click" },
            { civil: "Pantalla", impostor: "Cine" },
            { civil: "Ventilador", impostor: "Mistral" },
            { civil: "Caja", impostor: "Regalo" },
            { civil: "Vaso", impostor: "Cóctel" },
            { civil: "Lentes", impostor: "Aumento" },
            { civil: "Cinta", impostor: "Pegamento" },
            { civil: "Cuchara", impostor: "Sopa" }
        ],
        type: "dynamic"
    },
    LUGARES: {
        list: [
            { civil: "Cine", impostor: "Palomitas" },
            { civil: "Mar", impostor: "Olas" },
            { civil: "Playa", impostor: "Arena" },
            { civil: "Río", impostor: "Corriente" },
            { civil: "Sala de clases", impostor: "Tiza" },
            { civil: "Parque", impostor: "Juegos" },
            { civil: "Montaña", impostor: "Escalada" },
            { civil: "Biblioteca", impostor: "Silencio" },
            { civil: "Restaurante", impostor: "Menú" },
            { civil: "Supermercado", impostor: "Carro" },
            { civil: "Hospital", impostor: "Urgencias" },
            { civil: "Oficina", impostor: "Escritorio" },
            { civil: "Estadio", impostor: "Hinchas" },
            { civil: "Iglesia", impostor: "Rezo" },
            { civil: "Cafetería", impostor: "Café" },
            { civil: "Museo", impostor: "Exposición" },
            { civil: "Teatro", impostor: "Escenario" },
            { civil: "Aeropuerto", impostor: "Vuelo" },
            { civil: "Hotel", impostor: "Habitación" },
            { civil: "Centro comercial", impostor: "Compras" },
            { civil: "Plaza", impostor: "Banco" },
            { civil: "Estación de tren", impostor: "Andén" },
            { civil: "Estación de metro", impostor: "Subterráneo" },
            { civil: "Gimnasio", impostor: "Pesas" },
            { civil: "Farmacia", impostor: "Medicamentos" },
            { civil: "Tienda", impostor: "Producto" },
            { civil: "Pista de baile", impostor: "Música" },
            { civil: "Fábrica", impostor: "Producción" },
            { civil: "Universidad", impostor: "Carrera" },
            { civil: "Jardín", impostor: "Flores" },
            { civil: "Cementerio", impostor: "Tumba" },
            { civil: "Mercado", impostor: "Compras" },
            { civil: "Zoológico", impostor: "Animal" },
            { civil: "Paseo", impostor: "Vacaciones" },
            { civil: "Túnel", impostor: "Oscuridad" }
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

    // --- Referencias DOM ---
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

    // --- Variables ---
    let numPlayers = 0;
    let impostors = 0;
    let players = [];
    let currentPlayerIndex = 0;
    let countdownInterval;
    let totalSeconds = 300; 

    // --- Funciones ---

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
        votingSection.style.display = "flex"; // Usar Flex para centrar botones
        
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
                
                votingResultDiv.innerHTML = "⏰ ¡Tiempo terminado!<br>El Impostor ha ganado por tiempo.";
                
                voteButton.style.display = "none";
                newGameBtn.style.display = "block";
                fiveMinuteCountdownDiv.style.display = "none"; 
                headerGameTitle.style.display = "block";
            }
        }, 1000);
    }

    function start3SecondCountdown() {
        document.getElementById("gameInterface").style.display = "none"; 
        headerGameTitle.style.display = "block"; 
        countdownDiv.style.display = "flex";
        let countdownTime = 3;
        countdownTimer.textContent = countdownTime;

        let interval = setInterval(function() {
            countdownTime--;
            countdownTimer.textContent = countdownTime;

            if (countdownTime <= 0) {
                clearInterval(interval);
                
                const activePlayers = players.filter(p => !p.disabled);
                const startingPlayer = activePlayers[Math.floor(Math.random() * activePlayers.length)];
                
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
        fiveMinuteCountdownDiv.style.display = "none";
        headerGameTitle.style.display = "block"; 
        container.style.display = "block"; // Asegurar que el contenedor se vea de fondo
        
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

            setTimeout(function() {
                // FASE 3
                let finalMessage = "";
                let gameEnded = false;

                if (activeImpostors === 0) {
                    finalMessage = `🎉 ¡Victoria Civil! 🎉<br>Todos los impostores eliminados.`;
                    gameEnded = true;
                } else if (activeImpostors >= activeCivils) {
                    finalMessage = `😈 ¡Victoria Impostor! 😈<br>Impostores dominan la nave.`;
                    gameEnded = true;
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

    // --- Listeners ---
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
        let impostorIndices = [];

        for (let i = 0; i < numPlayers; i++) {
            let nameInput = document.getElementById(`playerName${i}`);
            let playerName = (nameInput && nameInput.value.trim() !== "") ? nameInput.value : `Jugador ${i + 1}`;
            players.push({ name: playerName, isImpostor: false, word: civilWord, clue: impostorClue, disabled: false });
        }

        while (impostorIndices.length < impostors) {
            let r = Math.floor(Math.random() * numPlayers);
            if (!impostorIndices.includes(r)) {
                impostorIndices.push(r);
                players[r].isImpostor = true;
                players[r].word = impostorWord;
            }
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
