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

    function playSound
