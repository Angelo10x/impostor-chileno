<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Impostor Chileno</title>
    <!-- Incluye Tailwind CSS para un estilo moderno y responsive -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        /* Estilos personalizados para el juego */
        :root {
            --primary-color: #3b82f6; /* Blue 500 */
            --secondary-color: #10b981; /* Emerald 500 */
            --danger-color: #ef4444; /* Red 500 */
            --bg-dark: #1f2937; /* Gray 800 */
            --text-light: #f3f4f6; /* Gray 100 */
        }
        
        * {
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-dark);
            min-height: 100dvh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }

        .container {
            max-width: 420px;
            width: 100%;
            background-color: #374151; /* Gray 700 */
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        h1 {
            font-size: 2.2rem;
            font-weight: 800;
            text-align: center;
            color: var(--secondary-color);
            text-shadow: 0 0 5px rgba(16, 185, 129, 0.5);
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary-color);
            text-align: center;
        }
        
        /* Estilos de Botones */
        button {
            padding: 12px 20px;
            border-radius: 9999px;
            font-weight: 700;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            cursor: pointer;
        }

        .start-btn {
            background-color: var(--secondary-color);
            color: var(--bg-dark);
            width: 100%;
            margin-top: 10px;
        }
        .start-btn:hover { background-color: #059669; }

        .action-btn {
            background-color: var(--primary-color);
            color: white;
            flex-grow: 1;
        }
        .action-btn:hover { background-color: #2563eb; }

        .vote-btn {
            background-color: var(--danger-color);
            color: white;
        }
        .vote-btn:hover { background-color: #dc2626; }

        /* Contenedor de Ajustes */
        .setting {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #4b5563; /* Gray 600 */
        }
        .setting:last-child {
            border-bottom: none;
        }
        .adjuster button {
            background-color: #4b5563;
            color: white;
            padding: 5px 12px;
            border-radius: 8px;
            line-height: 1;
            font-size: 1.2rem;
            box-shadow: none;
        }
        .adjuster span {
            margin: 0 15px;
            font-size: 1.2rem;
            font-weight: 600;
            min-width: 20px;
            text-align: center;
        }
        
        /* Contenedor de Nombres */
        .player-names-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        .player-names-grid input {
            background-color: #4b5563;
            color: white;
            border: 1px solid #6b7280;
            padding: 8px;
            border-radius: 8px;
        }

        /* Cartas */
        #cardsContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px;
            background-color: #4b5563;
            border-radius: 15px;
            height: 250px;
            text-align: center;
        }
        
        .card-content {
            font-size: 1.8rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--text-light);
        }

        /* Overlays (Cuenta regresiva, resultado) */
        #countdown, #playerToStart, #gameResult {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 20px;
        }
        
        #countdown h2, #playerToStart h2 { 
            color: var(--secondary-color);
            font-size: clamp(2rem, 10vw, 4rem);
            text-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
            margin-bottom: 20px;
        }

        /* Interfaz de Votación */
        #voteInterface {
            padding: 15px;
            background-color: #4b5563;
            border-radius: 15px;
            margin-top: 20px;
        }
        #voteOptions button {
            margin: 5px;
            background-color: #6b7280;
            color: white;
            padding: 8px 15px;
            border-radius: 8px;
            box-shadow: none;
        }
        #voteOptions button:disabled {
            background-color: #1f2937;
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .voting-options-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }
    </style>
</head>
<body class="bg-gray-800">

    <!-- Pantalla de Cuenta Regresiva de 5 Minutos (Oculta por defecto) -->
    <div id="countdownFiveMinutes" class="fixed top-0 left-0 w-full h-full bg-gray-900 flex justify-center items-center z-50" style="display:none;">
        <h2 id="fiveMinuteCountdown" class="text-6xl font-extrabold text-red-500 shadow-2xl">05:00</h2>
    </div>

    <!-- Contenedor Principal -->
    <div class="container" id="mainContainer">
        
        <!-- Encabezado -->
        <div class="header" id="headerGameTitle">
            <h1>Impostor Chileno</h1>
        </div>

        <!-- Ajustes del Juego (Menú Inicial) -->
        <div class="game-settings" id="gameSettings">
            <div class="setting">
                <label for="numPlayers" class="font-semibold">Número de Jugadores</label>
                <select id="numPlayers" class="bg-gray-600 border-gray-500 rounded-lg p-2 text-white">
                    <option value="3">3</option>
                    <option value="4" selected>4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="setting">
                <label for="categories" class="font-semibold">Categoría</label>
                <select id="categories" class="bg-gray-600 border-gray-500 rounded-lg p-2 text-white">
                    <option value="ANIMALES">Animales</option>
                    <option value="COMIDA">Comida</option>
                    <option value="OBJETOS">Objetos</option>
                    <option value="LUGARES">Lugares</option>
                    <option value="PELICULAS">Películas</option>
                </select>
            </div>
            
            <button id="changeNamesBtn" class="action-btn">Nombrar Jugadores</button>

            <div class="player-names-grid mt-4" id="playerNamesContainer">
                <!-- Inputs de nombres se generarán aquí -->
            </div>

            <div class="setting">
                <label for="impostorsCount" class="font-semibold">Impostores</label>
                <div class="flex items-center space-x-3" id="impostorAdjuster">
                    <button id="decreaseImpostors" class="adjuster-btn">-</button>
                    <span id="impostorsCount" class="text-xl font-bold">1</span> 
                    <button id="increaseImpostors" class="adjuster-btn">+</button>
                </div>
            </div>

            <button id="startGame" class="start-btn">Iniciar Juego</button>
        </div>

        <!-- Interfaz de Mostrar Cartas (Durante la Ronda de Identificación) -->
        <div id="gameInterface" class="flex flex-col items-center gap-4" style="display:none;">
            <p class="text-center text-sm text-gray-400">Pasa el teléfono al jugador actual y presiona "Mostrar mi tarjeta".</p>
            <div id="cardsContainer" class="w-full h-64 flex justify-center items-center bg-gray-600 rounded-xl shadow-lg">
                <div class="card-content text-2xl font-extrabold p-5">
                    Presiona el botón para ver tu rol.
                </div>
            </div>
            <button id="nextPlayerBtn" class="action-btn" style="display:none;">Siguiente Jugador</button>
            <button id="showCardBtn" class="start-btn">Mostrar mi tarjeta</button>
        </div>

        <!-- Sección de Votación (Aparece después de la cuenta regresiva o al presionar "VOTAR") -->
        <div id="votingSection" class="flex flex-col items-center gap-3" style="display:none;">
            <button id="voteButton" class="vote-btn">VOTAR / TERMINAR</button>
            
            <div id="voteInterface" class="w-full" style="display:none;">
                <h2 class="text-white mb-4">Selecciona al sospechoso:</h2>
                <div id="voteOptions" class="voting-options-container">
                    <!-- Botones de voto se generan aquí -->
                </div>
                <div class="flex gap-2 mt-4">
                    <button id="cancelVoteBtn" class="action-btn">Cancelar Voto</button>
                    <button id="confirmVoteBtn" class="vote-btn">Confirmar Voto</button>
                </div>
            </div>
        </div>

        <!-- Botones de Fin de Juego (Ocultos inicialmente) -->
        <div class="flex flex-col gap-3" id="gameEndButtons" style="display:none;">
            <button id="newGameBtn" class="start-btn">Nuevo Juego</button>
        </div>
    </div> 

    <!-- Overlays de Transición -->

    <!-- Overlay de Cuenta Regresiva de 3 Segundos -->
    <div id="countdown" style="display:none;">
        <h2 class="animate-pulse">¡A Discutir! <span id="timer">3</span></h2>
    </div>

    <!-- Overlay para Indicar el Jugador de Inicio (Opcional) -->
    <div id="playerToStart" style="display:none;">
        <h2 id="startPlayerMessage" class="text-white"></h2>
    </div>

    <!-- Overlay de Resultado de la Partida -->
    <div id="gameResult" style="display:none;">
        <h2 id="resultTitle" class="text-5xl font-extrabold mb-4"></h2>
        <p id="resultDetails" class="text-lg mb-6 text-center"></p>
        <div id="votingResultDiv" class="text-lg p-4 bg-gray-700 rounded-lg w-full max-w-xs" style="display:none;">
            <h3 class="font-bold text-xl mb-2 text-primary-color">Resultados de la Votación:</h3>
            <ul id="voteCountsList" class="list-none text-left"></ul>
        </div>
        <button id="newGameResultBtn" class="start-btn mt-6">Nuevo Juego</button>
    </div>

    <script>
        // EL CÓDIGO JAVASCRIPT ORIGINAL DE GAME.JS HA SIDO INTEGRADO AQUÍ

        document.addEventListener("DOMContentLoaded", function() {

            // --- Constantes y Variables Globales ---

            // Categorías y Palabras
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
                        { civil: "Zebra", impostor: "Sabana rayada" },
                        { civil: "Serpiente", impostor: "Escamas" },
                        { civil: "Cocodrilo", impostor: "Reptil letal" },
                        { civil: "Hipopótamo", impostor: "Terrestre acuático" },
                        { civil: "Gorila", impostor: "Fuerza salvaje" },
                        { civil: "Mono", impostor: "Travesuras arbóreas" },
                        { civil: "Pez", impostor: "Nado silencioso" },
                        { civil: "Mariposa", impostor: "Alas coloridas" },
                        { civil: "Araña", impostor: "Telaraña pegajosa" }
                    ]
                },
                COMIDA: {
                    list: [
                        { civil: "Manzana", impostor: "Fruta crujiente" },
                        { civil: "Plátano", impostor: "Cáscara resbaladiza" },
                        { civil: "Pan", impostor: "Horneado diario" },
                        { civil: "Queso", impostor: "Lácteo fermentado" },
                        { civil: "Pizza", impostor: "Masa circular" },
                        { civil: "Hamburguesa", impostor: "Carne entre panes" },
                        { civil: "Sushi", impostor: "Arroz y pescado crudo" },
                        { civil: "Chocolate", impostor: "Cacao dulce" },
                        { civil: "Café", impostor: "Grano energizante" },
                        { civil: "Té", impostor: "Hoja caliente" },
                        { civil: "Papas Fritas", impostor: "Aceite salado" },
                        { civil: "Huevo", impostor: "Cáscara ovalada" },
                        { civil: "Arroz", impostor: "Grano básico" },
                        { civil: "Pasta", impostor: "Harina cocida" },
                        { civil: "Vino", impostor: "Uva fermentada" },
                        { civil: "Cerveza", impostor: "Lúpulo refrescante" },
                        { civil: "Torta", impostor: "Dulce de cumpleaños" },
                        { civil: "Helado", impostor: "Postre congelado" },
                        { civil: "Sopa", impostor: "Caldo de verduras" },
                        { civil: "Ensalada", impostor: "Hojas frescas" }
                    ]
                },
                OBJETOS: {
                    list: [
                        { civil: "Teléfono", impostor: "Pantalla táctil" },
                        { civil: "Libro", impostor: "Páginas impresas" },
                        { civil: "Reloj", impostor: "Manecillas que giran" },
                        { civil: "Llave", impostor: "Metal de seguridad" },
                        { civil: "Silla", impostor: "Cuatro patas" },
                        { civil: "Mesa", impostor: "Superficie plana" },
                        { civil: "Lápiz", impostor: "Grafito para escribir" },
                        { civil: "Gafas", impostor: "Cristales para ver" },
                        { civil: "Paraguas", impostor: "Tejido impermeable" },
                        { civil: "Espejo", impostor: "Reflejo de uno mismo" },
                        { civil: "Cuchillo", impostor: "Borde afilado" },
                        { civil: "Billetera", impostor: "Cuero de valor" },
                        { civil: "Cámara", impostor: "Lente de captura" },
                        { civil: "Cepillo", impostor: "Cerdas para peinar" },
                        { civil: "Computadora", impostor: "Máquina de cálculo" },
                        { civil: "Botella", impostor: "Contenedor de líquido" },
                        { civil: "Zapatos", impostor: "Suela para caminar" },
                        { civil: "Globo", impostor: "Caucho inflado" },
                        { civil: "Bandera", impostor: "Símbolo patrio" },
                        { civil: "Guitarra", impostor: "Cuerdas vibrantes" }
                    ]
                },
                LUGARES: {
                    list: [
                        { civil: "Playa", impostor: "Arena húmeda" },
                        { civil: "Montaña", impostor: "Cumbre nevada" },
                        { civil: "Bosque", impostor: "Árboles densos" },
                        { civil: "Ciudad", impostor: "Rascacielos altos" },
                        { civil: "Escuela", impostor: "Salones de clase" },
                        { civil: "Hospital", impostor: "Camas de emergencia" },
                        { civil: "Banco", impostor: "Dinero guardado" },
                        { civil: "Parque", impostor: "Áreas verdes" },
                        { civil: "Cine", impostor: "Pantalla gigante" },
                        { civil: "Museo", impostor: "Arte antiguo" },
                        { civil: "Teatro", impostor: "Escenario de drama" },
                        { civil: "Restaurante", impostor: "Mesas de comida" },
                        { civil: "Aeropuerto", impostor: "Pista de aterrizaje" },
                        { civil: "Biblioteca", impostor: "Estantes de libros" },
                        { civil: "Piscina", impostor: "Agua clorada" },
                        { civil: "Cárcel", impostor: "Rejas de metal" },
                        { civil: "Iglesia", impostor: "Bancos de oración" },
                        { civil: "Tienda", impostor: "Vitrinas de venta" },
                        { civil: "Hotel", impostor: "Habitaciones temporales" },
                        { civil: "Granja", impostor: "Animales de corral" }
                    ]
                },
                PELICULAS: {
                    list: [
                        { civil: "Titanic", impostor: "Iceberg" },
                        { civil: "Star Wars", impostor: "Fuerza mística" },
                        { civil: "Harry Potter", impostor: "Varita mágica" },
                        { civil: "El Padrino", impostor: "Mafia Italiana" },
                        { civil: "Jurassic Park", impostor: "Dinosaurios escapados" },
                        { civil: "Avatar", impostor: "Piel azul" },
                        { civil: "Matrix", impostor: "Pastilla roja" },
                        { civil: "Pulp Fiction", impostor: "Maleta misteriosa" },
                        { civil: "El Señor de los Anillos", impostor: "Anillo de poder" },
                        { civil: "Toy Story", impostor: "Juguetes con vida" },
                        { civil: "Buscando a Nemo", impostor: "Pez payaso" },
                        { civil: "E.T.", impostor: "Dedo que brilla" },
                        { civil: "Los Vengadores", impostor: "Superhéroes unidos" },
                        { civil: "El Rey León", impostor: "Sabana africana" },
                        { civil: "Gladiador", impostor: "Coliseo romano" },
                        { civil: "Forrest Gump", impostor: "Caja de bombones" },
                        { civil: "Terminator", impostor: "Máquina del tiempo" },
                        { civil: "Indiana Jones", impostor: "Látigo aventurero" },
                        { civil: "Duro de Matar", impostor: "Navidad en peligro" },
                        { civil: "Misión Imposible", impostor: "Máscaras de látex" }
                    ]
                }
            };
            
            let players = [];
            let numPlayers = 4; // Valor por defecto
            let numImpostors = 1; // Valor por defecto
            let currentPlayerIndex = 0;
            let timerInterval;
            let discussionTimer;

            // Elementos del DOM
            const numPlayersSelect = document.getElementById("numPlayers");
            const categoriesSelect = document.getElementById("categories");
            const impostorsCountSpan = document.getElementById("impostorsCount");
            const decreaseImpostorsBtn = document.getElementById("decreaseImpostors");
            const increaseImpostorsBtn = document.getElementById("increaseImpostors");
            const startGameBtn = document.getElementById("startGame");
            const gameSettingsDiv = document.getElementById("gameSettings");
            const gameInterfaceDiv = document.getElementById("gameInterface");
            const cardsContainer = document.getElementById("cardsContainer");
            const showCardBtn = document.getElementById("showCardBtn");
            const nextPlayerBtn = document.getElementById("nextPlayerBtn");
            const countdownOverlay = document.getElementById("countdown");
            const timerSpan = document.getElementById("timer");
            const playerToStartOverlay = document.getElementById("playerToStart");
            const startPlayerMessage = document.getElementById("startPlayerMessage");
            const votingSection = document.getElementById("votingSection");
            const voteButton = document.getElementById("voteButton");
            const voteInterface = document.getElementById("voteInterface");
            const voteOptionsDiv = document.getElementById("voteOptions");
            const cancelVoteBtn = document.getElementById("cancelVoteBtn");
            const confirmVoteBtn = document.getElementById("confirmVoteBtn");
            const gameResultOverlay = document.getElementById("gameResult");
            const resultTitle = document.getElementById("resultTitle");
            const resultDetails = document.getElementById("resultDetails");
            const votingResultDiv = document.getElementById("votingResultDiv");
            const voteCountsList = document.getElementById("voteCountsList");
            const newGameBtn = document.getElementById("newGameBtn");
            const newGameResultBtn = document.getElementById("newGameResultBtn");
            const playerNamesContainer = document.getElementById("playerNamesContainer");
            const changeNamesBtn = document.getElementById("changeNamesBtn");
            const countdownFiveMinutesDiv = document.getElementById("countdownFiveMinutes");
            const fiveMinuteCountdown = document.getElementById("fiveMinuteCountdown");
            const mainContainer = document.getElementById("mainContainer");
            const gameEndButtons = document.getElementById("gameEndButtons");
            
            // --- Funciones de Utilidad ---

            // Función para barajar un array (Algoritmo de Fisher-Yates)
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            // Genera la lista inicial de nombres de jugadores
            function generatePlayerNamesInputs(count) {
                playerNamesContainer.innerHTML = "";
                for (let i = 0; i < count; i++) {
                    const input = document.createElement("input");
                    input.type = "text";
                    input.placeholder = `Jugador ${i + 1}`;
                    input.value = `Jugador ${i + 1}`;
                    input.id = `playerInput${i}`;
                    playerNamesContainer.appendChild(input);
                }
            }

            // Inicializar al cargar
            generatePlayerNamesInputs(numPlayers);

            // Actualizar la lista de nombres cuando cambia el número de jugadores
            numPlayersSelect.addEventListener("change", function() {
                numPlayers = parseInt(this.value);
                generatePlayerNamesInputs(numPlayers);
                // Ajustar el número de impostores si excede un límite razonable (max N/3)
                const maxImpostors = Math.floor(numPlayers / 3);
                if (numImpostors > maxImpostors) {
                    numImpostors = maxImpostors;
                    impostorsCountSpan.textContent = numImpostors;
                }
                updateImpostorButtonsState();
            });

            // Muestra el nombre del jugador que debe comenzar el juego
            function showStartingPlayer(playerIndex) {
                // Selecciona aleatoriamente al primer jugador
                const startingPlayerIndex = playerIndex; 
                const startingPlayerName = players[startingPlayerIndex].name;

                playerToStartOverlay.style.display = "flex";
                startPlayerMessage.innerHTML = `¡Comienza el turno de preguntas! <br><br> Inicia: <span class="text-white text-3xl block mt-2 p-2 bg-gray-700 rounded-lg">${startingPlayerName}</span>`;

                setTimeout(() => {
                    playerToStartOverlay.style.display = "none";
                    mainContainer.style.display = "flex";
                    votingSection.style.display = "block";
                    startDiscussionTimer();
                }, 5000); // Muestra el nombre por 5 segundos
            }

            // Muestra la tarjeta de rol al jugador actual
            function showCard(playerIndex) {
                const player = players[playerIndex];
                const cardContent = cardsContainer.querySelector('.card-content');
                
                cardsContainer.classList.remove('bg-red-500', 'bg-blue-500');
                cardContent.innerHTML = "Presiona el botón para ver tu rol.";

                showCardBtn.style.display = "block";
                nextPlayerBtn.style.display = "none";

                // Lógica de mostrar/ocultar rol
                showCardBtn.onclick = function() {
                    if (player.isImpostor) {
                        cardsContainer.classList.add('bg-red-500');
                        cardContent.innerHTML = `¡ERES EL **IMPOSTOR**!<br><br>Palabra Pista: <span class="text-xl font-bold">${player.word}</span>`;
                    } else {
                        cardsContainer.classList.add('bg-blue-500');
                        cardContent.innerHTML = `¡ERES **CIVIL**!<br><br>Palabra Clave: <span class="text-xl font-bold">${player.word}</span>`;
                    }
                    showCardBtn.style.display = "none";
                    nextPlayerBtn.style.display = "block";
                };
            }

            // Inicia la cuenta regresiva de 3 segundos
            function start3SecondCountdown() {
                countdownOverlay.style.display = "flex";
                let count = 3;
                timerSpan.textContent = count;

                const countdownInterval = setInterval(() => {
                    count--;
                    timerSpan.textContent = count;

                    if (count <= 0) {
                        clearInterval(countdownInterval);
                        countdownOverlay.style.display = "none";
                        // Después de la cuenta regresiva de 3 segundos, mostrar el jugador de inicio.
                        // Selecciona aleatoriamente quién empieza la ronda de preguntas/respuestas
                        const startingPlayerIndex = Math.floor(Math.random() * numPlayers);
                        showStartingPlayer(startingPlayerIndex);
                    }
                }, 1000);
            }

            // Inicia el contador de discusión de 5 minutos
            function startDiscussionTimer() {
                mainContainer.style.display = "none";
                countdownFiveMinutesDiv.style.display = "flex";
                
                let time = 5 * 60; // 5 minutos en segundos

                discussionTimer = setInterval(() => {
                    time--;
                    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
                    const seconds = (time % 60).toString().padStart(2, '0');
                    fiveMinuteCountdown.textContent = `${minutes}:${seconds}`;

                    if (time <= 10) {
                        fiveMinuteCountdown.classList.add('text-yellow-400');
                    }
                    if (time <= 5) {
                        fiveMinuteCountdown.classList.add('animate-ping');
                    }

                    if (time <= 0) {
                        clearInterval(discussionTimer);
                        countdownFiveMinutesDiv.style.display = "none";
                        showFinalResult(false); // Tiempo agotado: La victoria del impostor depende de la votación
                    }
                }, 1000);
            }

            // Pausa el contador de discusión
            function pauseCountdown() {
                clearInterval(discussionTimer);
                countdownFiveMinutesDiv.style.display = "none";
            }

            // Reanuda el contador de discusión
            function resumeCountdown() {
                if (parseInt(fiveMinuteCountdown.textContent.substring(0, 2)) > 0 || parseInt(fiveMinuteCountdown.textContent.substring(3, 5)) > 0) {
                    countdownFiveMinutesDiv.style.display = "flex";
                    // Recalcula el tiempo restante para reiniciar el intervalo
                    let currentMinutes = parseInt(fiveMinuteCountdown.textContent.substring(0, 2));
                    let currentSeconds = parseInt(fiveMinuteCountdown.textContent.substring(3, 5));
                    let remainingTime = (currentMinutes * 60) + currentSeconds;
                    
                    // Asegura que el contador continúe
                    let time = remainingTime;
                    startDiscussionTimer();
                } else {
                    // Si el tiempo es 0:00, no reanudar y mostrar el resultado
                    showFinalResult(false);
                }
            }

            // --- Lógica del Juego ---

            let voteCounts = {}; // { playerIndex: count }
            let votingPlayers = numPlayers; // Número de jugadores que votan
            let confirmedVotes = 0; // Votos emitidos
            let currentVoterIndex = 0; // Índice del jugador que está votando
            let currentVotes = new Array(numPlayers).fill(null); // Almacena el voto de cada jugador (índice del jugador votado)

            // Inicia la fase de votación
            function startVotingPhase() {
                // Oculta la interfaz principal y muestra la interfaz de voto
                mainContainer.style.display = "none"; 
                countdownFiveMinutesDiv.style.display = "none";
                gameResultOverlay.style.display = "none"; // Asegura que el resultado anterior esté oculto

                // Reiniciar contadores de voto
                voteCounts = {};
                confirmedVotes = 0;
                currentVoterIndex = 0;
                currentVotes = new Array(numPlayers).fill(null);
                votingPlayers = numPlayers; // Todos votan

                // Muestra la interfaz de voto
                voteInterface.style.display = "block";
                document.getElementById("votingSection").style.display = "block";
                voteButton.style.display = "none"; // Oculta el botón general
                gameEndButtons.style.display = "none"; // Oculta botones de juego nuevo
                
                // Muestra el nombre del primer votante
                displayCurrentVoter();
                
                // Genera las opciones de voto
                generateVoteOptions();
            }

            // Muestra las opciones de voto (jugadores)
            function generateVoteOptions() {
                voteOptionsDiv.innerHTML = "";
                players.forEach((player, index) => {
                    let btn = document.createElement("button");
                    btn.innerText = player.name;
                    btn.dataset.playerIndex = index;
                    btn.classList.add("vote-option-btn");
                    btn.addEventListener("click", () => selectVote(index));
                    voteOptionsDiv.appendChild(btn);
                });
                // También se puede votar por "Nadie" (Saltar voto)
                let skipBtn = document.createElement("button");
                skipBtn.innerText = "Nadie / Saltar";
                skipBtn.dataset.playerIndex = -1; // -1 para "Nadie"
                skipBtn.classList.add("vote-option-btn");
                skipBtn.addEventListener("click", () => selectVote(-1));
                voteOptionsDiv.appendChild(skipBtn);
                
                // Deshabilita el botón de confirmar voto hasta que se seleccione una opción
                confirmVoteBtn.disabled = true;
                confirmVoteBtn.classList.add('opacity-50', 'cursor-not-allowed');
            }

            // Maneja la selección de voto
            function selectVote(votedIndex) {
                // Resalta la opción seleccionada
                document.querySelectorAll('.vote-option-btn').forEach(btn => {
                    btn.classList.remove('bg-green-500', 'hover:bg-green-600');
                });
                
                const selectedButton = document.querySelector(`.vote-option-btn[data-player-index="${votedIndex}"]`);
                if(selectedButton) {
                    selectedButton.classList.add('bg-green-500', 'hover:bg-green-600');
                }
                
                // Habilita el botón de confirmar voto
                confirmVoteBtn.disabled = false;
                confirmVoteBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                
                // Almacena la selección actual (temporalmente)
                currentVotes[currentVoterIndex] = votedIndex;
            }

            // Muestra el nombre del jugador que está votando
            function displayCurrentVoter() {
                voteInterface.querySelector('h2').textContent = `Vota: ${players[currentVoterIndex].name}`;
            }

            // Maneja la confirmación de voto
            confirmVoteBtn.addEventListener("click", function() {
                const votedIndex = currentVotes[currentVoterIndex];

                if (votedIndex === null) {
                    // Esto no debería suceder si el botón está bien manejado, pero es una seguridad
                    console.error("Ningún voto seleccionado.");
                    return;
                }
                
                // Registra el voto (si no es "Nadie")
                if (votedIndex !== -1) {
                    voteCounts[votedIndex] = (voteCounts[votedIndex] || 0) + 1;
                }

                confirmedVotes++;
                
                // Pasa al siguiente votante
                currentVoterIndex++;
                
                if (currentVoterIndex < numPlayers) {
                    // Hay más jugadores votando
                    displayCurrentVoter();
                    // Limpia la selección para el siguiente votante
                    document.querySelectorAll('.vote-option-btn').forEach(btn => {
                        btn.classList.remove('bg-green-500', 'hover:bg-green-600');
                    });
                    confirmVoteBtn.disabled = true;
                    confirmVoteBtn.classList.add('opacity-50', 'cursor-not-allowed');
                } else {
                    // Todos han votado, mostrar resultado
                    showVotingResult();
                }
            });

            // Muestra el resultado de la votación
            function showVotingResult() {
                voteInterface.style.display = "none"; // Oculta la interfaz de voto

                // 1. Determinar el más votado
                let maxVotes = 0;
                let suspectIndex = -1;
                let tie = false;
                
                for (const index in voteCounts) {
                    const count = voteCounts[index];
                    if (count > maxVotes) {
                        maxVotes = count;
                        suspectIndex = parseInt(index);
                        tie = false;
                    } else if (count === maxVotes && maxVotes > 0) {
                        tie = true;
                    }
                }

                // 2. Mostrar conteo de votos
                voteCountsList.innerHTML = '';
                players.forEach((player, index) => {
                    const votes = voteCounts[index] || 0;
                    const listItem = document.createElement('li');
                    listItem.textContent = `${player.name}: ${votes} votos`;
                    voteCountsList.appendChild(listItem);
                });
                
                // Mostrar el resultado de la votación
                votingResultDiv.style.display = "block";

                // 3. Determinar el ganador
                let isImpostorEliminated = false;
                let impostorWin = false;

                if (suspectIndex !== -1 && !tie && maxVotes > numPlayers / 2) {
                    // Hay un sospechoso claro y la mayoría lo votó
                    const suspect = players[suspectIndex];
                    if (suspect.isImpostor) {
                        // ¡Victoria de los civiles!
                        isImpostorEliminated = true;
                    } else {
                        // ¡Derrota de los civiles!
                        impostorWin = true; // Civil inocente eliminado
                    }
                } else if (maxVotes > 0 && maxVotes <= numPlayers / 2) {
                    // No hay mayoría o hay empate, no se elimina a nadie.
                    impostorWin = false; // El juego continúa, pero por ahora no hay victoria del impostor
                } else if (maxVotes === 0) {
                    // Nadie fue votado (todos votaron "Nadie" o no votaron), no se elimina a nadie.
                    impostorWin = false;
                }
                
                // Muestra el resultado final (victoria/derrota)
                showFinalResult(isImpostorEliminated, impostorWin, suspectIndex, maxVotes, tie);
            }

            // Muestra el resultado final del juego
            function showFinalResult(civiliansWin, impostorWin = false, eliminatedIndex = -1, maxVotes = 0, tie = false) {
                // Detiene el temporizador de discusión (si aún estuviera corriendo)
                clearInterval(discussionTimer); 
                countdownFiveMinutesDiv.style.display = "none";
                
                gameResultOverlay.style.display = "flex";
                mainContainer.style.display = "none";
                votingSection.style.display = "none";

                let civilWord = players.find(p => !p.isImpostor)?.word || "Desconocida";
                let impostorPlayer = players.find(p => p.isImpostor);
                
                let eliminatedPlayerName = eliminatedIndex !== -1 ? players[eliminatedIndex].name : "Nadie";
                
                if (civiliansWin) {
                    // CIvilian Win: Impostor fue eliminado.
                    resultTitle.textContent = "¡VICTORIA DE LOS CIVILES!";
                    resultTitle.style.color = "#10b981"; // Verde (secondary-color)
                    resultDetails.innerHTML = `El impostor (<span class="font-bold">${impostorPlayer.name}</span>) ha sido eliminado. La palabra clave era: <span class="font-bold">${civilWord}</span>.`;
                    votingResultDiv.style.display = "block";
                } else if (impostorWin) {
                    // Impostor Win: Civil fue eliminado o tiempo agotado y no se encontró al impostor
                    resultTitle.textContent = "¡VICTORIA DEL IMPOSTOR!";
                    resultTitle.style.color = "#ef4444"; // Rojo (danger-color)
                    if (eliminatedIndex !== -1) {
                         resultDetails.innerHTML = `Un civil inocente (<span class="font-bold">${eliminatedPlayerName}</span>) fue eliminado. El impostor era: <span class="font-bold">${impostorPlayer.name}</span>. La palabra clave era: <span class="font-bold">${civilWord}</span>.`;
                    } else if (tie) {
                         resultDetails.innerHTML = `La votación terminó en empate, el impostor (<span class="font-bold">${impostorPlayer.name}</span>) escapó. La palabra clave era: <span class="font-bold">${civilWord}</span>.`;
                    } else {
                        resultDetails.innerHTML = `El tiempo se agotó y el impostor (<span class="font-bold">${impostorPlayer.name}</span>) no fue descubierto. La palabra clave era: <span class="font-bold">${civilWord}</span>.`;
                    }
                    votingResultDiv.style.display = "block";
                } else {
                    // Caso de "Nadie" o sin mayoría clara
                    resultTitle.textContent = "VOTACIÓN SIN MAYORÍA";
                    resultTitle.style.color = "#f59e0b"; // Amarillo
                    resultDetails.innerHTML = `Nadie fue eliminado con mayoría clara (${maxVotes} votos). El juego debería continuar o reiniciar.`;
                    // Oculta el resultado detallado de la votación si no hubo una eliminación significativa
                    votingResultDiv.style.display = "block";
                    // Para este caso, el botón de "Nuevo Juego" en el resultado es el más apropiado.
                }

                // Reinicia los botones para el juego nuevo
                newGameResultBtn.style.display = "block";
            }

            // --- Event Listeners ---

            // Ajustar el número de impostores
            function updateImpostorButtonsState() {
                const maxImpostors = Math.floor(numPlayers / 3);
                decreaseImpostorsBtn.disabled = numImpostors <= 1;
                increaseImpostorsBtn.disabled = numImpostors >= maxImpostors;
                
                if (numImpostors <= 1) decreaseImpostorsBtn.classList.add('opacity-50'); else decreaseImpostorsBtn.classList.remove('opacity-50');
                if (numImpostors >= maxImpostors) increaseImpostorsBtn.classList.add('opacity-50'); else increaseImpostorsBtn.classList.remove('opacity-50');
            }

            decreaseImpostorsBtn.addEventListener("click", function() {
                if (numImpostors > 1) {
                    numImpostors--;
                    impostorsCountSpan.textContent = numImpostors;
                    updateImpostorButtonsState();
                }
            });

            increaseImpostorsBtn.addEventListener("click", function() {
                const maxImpostors = Math.floor(numPlayers / 3);
                if (numImpostors < maxImpostors) {
                    numImpostors++;
                    impostorsCountSpan.textContent = numImpostors;
                    updateImpostorButtonsState();
                }
            });

            // Botón para generar inputs de nombres (oculto por defecto)
            changeNamesBtn.addEventListener("click", function() {
                const isVisible = playerNamesContainer.style.display === "grid";
                playerNamesContainer.style.display = isVisible ? "none" : "grid";
                this.textContent = isVisible ? "Nombrar Jugadores" : "Ocultar Nombres";
            });
            playerNamesContainer.style.display = "none"; // Ocultar al inicio

            // Iniciar el juego
            startGameBtn.addEventListener("click", function() {
                // 1. Ocultar ajustes y mostrar interfaz de juego
                gameSettingsDiv.style.display = "none";
                votingSection.style.display = "none";
                gameInterfaceDiv.style.display = "flex";
                currentPlayerIndex = 0; // Iniciar con el primer jugador

                // 2. Obtener nombres de jugadores
                players = [];
                const nameInputs = playerNamesContainer.querySelectorAll("input");
                nameInputs.forEach(input => {
                    players.push({ name: input.value, isImpostor: false, word: "" });
                });

                // 3. Seleccionar categoría y palabra
                const selectedCategory = categoriesSelect.value;
                const wordList = CATEGORIES[selectedCategory].list;
                shuffle(wordList); // Baraja la lista de palabras
                const selectedWords = wordList[0];
                const civilWord = selectedWords.civil;
                const impostorWord = selectedWords.impostor;

                // 4. Asignar roles
                shuffle(players); // Baraja a los jugadores
                for (let i = 0; i < numPlayers; i++) {
                    players[i].word = civilWord; // Por defecto todos tienen la palabra clave

                    if (i < numImpostors) {
                        players[i].isImpostor = true;
                        players[i].word = impostorWord; // Los primeros N son impostores con la palabra trampa
                    }
                }
                
                // Vuelve a barajar el orden de los jugadores para que no se sepa quién es el impostor por su orden
                shuffle(players);

                showCard(currentPlayerIndex);
            });

            // Botón Siguiente Jugador (en ronda de revelación de cartas)
            nextPlayerBtn.addEventListener("click", function() {
                if (currentPlayerIndex === numPlayers - 1) {
                    // Último jugador revisó su carta, iniciar discusión
                    gameInterfaceDiv.style.display = "none";
                    start3SecondCountdown();
                    nextPlayerBtn.style.display = "none";
                } else {
                    currentPlayerIndex++;
                    showCard(currentPlayerIndex);
                    this.style.display = "none";
                }
            });

            // Botón VOTAR / TERMINAR (inicia fase de voto)
            voteButton.addEventListener("click", function() {
                pauseCountdown(); // Pausa el tiempo de discusión
                startVotingPhase();
            });

            // Botón CANCELAR VOTO (vuelve a la discusión)
            cancelVoteBtn.addEventListener("click", function() {
                voteInterface.style.display = "none";
                voteButton.style.display = "block";
                resumeCountdown(); // Reanuda el tiempo de discusión
                document.getElementById("votingSection").style.display = "block"; // Asegura que la sección de voto esté visible
            });

            // Botones de Nuevo Juego (reinician la aplicación)
            function resetGame() {
                // Limpiar estados y ocultar overlays
                clearInterval(discussionTimer);
                gameResultOverlay.style.display = "none";
                countdownFiveMinutesDiv.style.display = "none";
                gameInterfaceDiv.style.display = "none";
                votingSection.style.display = "none";
                
                // Mostrar menú inicial
                gameSettingsDiv.style.display = "flex";
                mainContainer.style.display = "flex";
                
                // Resetear contadores
                currentPlayerIndex = 0;
                
                // Limpiar estilos y contenido de cartas
                cardsContainer.classList.remove('bg-red-500', 'bg-blue-500');
                cardsContainer.querySelector('.card-content').textContent = "Presiona el botón para ver tu rol.";

                // Resetear temporizador de 5 minutos
                fiveMinuteCountdown.textContent = "05:00";
                fiveMinuteCountdown.classList.remove('animate-ping', 'text-yellow-400');
                
                // Ocultar botones de fin de juego y voto
                voteButton.style.display = "block"; // Vuelve a mostrar el botón de voto
                voteInterface.style.display = "none";
                gameEndButtons.style.display = "none"; 
                
                // Reiniciar estado de impostores y jugadores (por si se cambió el select)
                numPlayers = parseInt(numPlayersSelect.value);
                generatePlayerNamesInputs(numPlayers);
                numImpostors = 1;
                impostorsCountSpan.textContent = numImpostors;
                updateImpostorButtonsState();
            }

            newGameBtn.addEventListener("click", resetGame);
            newGameResultBtn.addEventListener("click", resetGame);

            // Inicializar el estado de los botones de impostores al cargar
            updateImpostorButtonsState();
        });
    </script>
</body>
</html>
