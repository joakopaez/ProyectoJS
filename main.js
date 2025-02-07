let Game = function(name , year , genre , development){
    this.name = name
    this.year = year
    this.genre = genre
    this.development = development
}
let library=[
new Game ("SPACE INVADERS", 1978, "SHOOT'EM UP","TAITO"),
new Game ("PAC-MAN", 1980, "LABERINTO", "NAMCO"),
new Game ("DONKEY KONG", 1981, "PLATAFORMAS", "NINTENDO" ),
new Game ("TETRIS", 1984, "ROMPECABEZAS", "THE TETRIS COMPANY"),
new Game ("SUPER MARIO BROS.", 1985, "PLATAFORMAS", "NINTENDO"),
new Game ("THE LEGEND OF ZELDA", 1986, "AVENTURA", "NINTENDO"),
new Game ("CONTRA", 1987, "RUN AND GUN", "KONAMI"),
new Game ("DOUBLE DRAGON", 1987, "BEAT'EM UP", "TECHNOS JAPON"),
new Game ("MEGA MAN 2", 1988, "PLATAFORMAS", "CAPCOM"),
new Game ("PRINCE OF PERSIA", 1989, "PLATAFORMAS", "BRODERBUND"),
new Game ("THE SECRET OF MONKY ISLAND", 1990, "AVENTURA", "LUCASARTS"),
new Game ("SUPER MARIO WORLD", 1990, "PLATAFORMAS", "NINTENDO"),
new Game ("SONIC THE HEDGEDOG", 1991, "PLATAFORMAS", "SEGA"),
new Game ("STREET FIGHTER 2", 1991, "LUCHA", "CAPCOM"),
new Game ("SUNSET RIDERS", 1991, "SHOOT'EM UP", "KONAMI"),
new Game ("WOLFENSTEIN 3D", 1992, "F.P.S.", "APOGEE SOFTWARE"),
new Game ("DOOM", 1993, "F.P.S.", "ID SOFTWARWE"),
new Game ("MORTAL KOMBAT 2", 1993, "LUCHA", "MIDWAY"),
new Game ("EARTHBOUND", 1994, "ROL", "NINTENDO"),
new Game ("SUPER METROID", 1994, "AVENTURA", "NINTENDO"),
new Game ("CHRONO TRIGGER", 1995, "ROL", "SQUARE"),
new Game ("WIPEOUT", 1995, "CARRERAS", "PSYGNOSIS"),
new Game ("RESIDENT EVIL", 1996, "TERROR", "CAPCOM"),
new Game ("TOM RAIDER", 1996, "AVENTURAS", "EIDOS ENTERTAINMENT"),
new Game ("STARCRAFT", 1998, "ESTRATEGIA", "BLIZZARD "),
new Game ("THIEF: THE DARK PROYECT", 1998, "SIGILO", "EIDOS ENTERTAINMENT"),
new Game ("AGE OF EMPIRES II: THE AGE OF KINGS", 1999, "ESTRATEGIA", "MICROSOFT GAMES"),
new Game ("EVERQUEST", 1999, "MMORPG", "SONY ENTERTAINMENT"),
new Game ("HOMEWORLD", 1999, "ESTRATEGIA", "SIERRA STUDIOS"),
new Game ("PLANESCAPE: TORMENT", 1999, "ROL", "INTERPLAY ENTERTAINMENT"),
new Game ("OREGEON TRAIL", 1971, "ESTRATEGIA", "MECC"),
new Game ("PONG", 1972, "DEPORTES", "ATARI"),
new Game ("ZORK", 1977, "AVENTURA", "INFOCOM"),
new Game ("ASTEROIDES", 1979, "SHOOT'EM UP", "ATARI"),
new Game ("DEFENDER", 1981, "SHOOT'EM UP", "WILLIAMS ENTERTAINMENT"),
new Game ("FROGGER", 1981, "ACCIÓN", "SEGA"),
new Game ("GALAGA", 1981, "SHOOT'EM UP", "NAMCO"),
new Game ("JOUST", 1982, "ACCIÓN", "WILLIAMS ENTERTAINMENT"),
new Game ("MS. PAC-MAN", 1982, "LABERINTO", "MIDWAY"),
new Game ("PITFALL!", 1982, "PLATAFORMAS", "ACTIVISON"),
new Game ("ROBOTRON:2084", 1982, "SHOOTER", "WILLIAMS ENTERTAINMENT"),
new Game ("ELITE", 1984, "SIMULACIÓN ESPACIAL", "ACORNSOFT"),
new Game ("GAUNTLET", 1984, "ROL", "ATARI"),
new Game ("MIKE TYSON'S PUNCH-OUT!!", 1987, "DEPORTES", "NINTENDO"),
new Game ("R-TYPE", 1987, "SHOOT'EM UP", "IREM"),
new Game ("SIMCITY", 1989, "CONSTRUCCIÓN DE CIUDADES", "MAXIS"),
new Game ("THE LEGEND OF ZELDA: A LINK TO THE PAST", 1991, "AVENTURA", "NINTENDO"),
new Game ("LEMINGS", 1991, "ROMPECABEZAS", "PSYGNOSIS"),
new Game ("MONKEY ISLAND 2: LECHUCK'S REVENGE", 1991, "AVENTURA", "LUCASARTS"),
new Game ("SONIC THE HEDGEHOG 2", 1992, "PLATAFORMAS", "SEGA"),
new Game ("SUPER MARIO KART", 1992, "CARRERAS", "NINTENDO"),
new Game ("DAY OF THE TENTACLE", 1993, "AVENTURA", "LUCASARTS"),
new Game ("DAYTONA USA", 1993, "CARRERAS", "SEGA"),
new Game ("THE LEGEND OF ZELDA: LINK'S AWAKENING", 1993, "AVENTURAS", "NINTENDO"),
new Game ("MYST", 1993, "AVENTURA", "BRODERBUND"),
new Game ("NBA JAM", 1993, "DEPORTES", "MIDWAY"),
new Game ("PHANTASY STAR IV", 1993, "ROL", "SEGA"),
new Game ("SAM & MAX HIT THE ROAD", 1993, "AVENTURA", "LUCASARTS"),
new Game ("SECRET OF MANA", 1993, "ROL", "SQUARE"),
new Game ("SIMCITY", 1993, "CONSTRUCCIÓN DE CIUDADES", "MAXIS"),
new Game ("DONKEY KONG COUNTRY", 1994, "PLATAFORMAS", "NINTENDO"),
new Game ("FINAL FANTASY VI", 1994, "ROL", "SQUARE"),
new Game ("STAR WARS: TIE FIGHTER", 1994, "SIMULACION ESPACIAL", "LUCASARTS"),
new Game ("UFO: UNKNOWN ENEMY", 1994, "ESTRATEGIA POR TURNOS", "MICROPROSE"),
new Game ("WARCRAFT 2: TIDES OF DARKNESS", 1995, "ROL", "BLIZZARD"),
new Game ("YOSHI'S ISLAND", 1995, "PLATAFORMAS", "NINTENDO"),
new Game ("CIVILIZATION 2", 1996, "ESTRATEGIA", "MICROPROSE"),
new Game ("COMMAND & CONQUER: RED ALERT", 1996, "ESTRATEGIA", "VIRGIN INERACTIVE"),
new Game ("NIGHTS INTO DREAMS", 1996, "ACCIÓN", "SEGA"),
new Game ("POKÉMON RED AND BLUE", 1996, "ROL", "NINTENDO"),
new Game ("QUAKE", 1996, "F.P.S.", "GT INTERACTIVE"),
new Game ("SUPER MARIO 64", 1996, "PLATAFORMAS", "NINTENDO"),
new Game ("CASTELVENIA: SYMPHONY OF THE NIGHT", 1997, "ACCIÓN", "KONAMI"),
new Game ("FINAL FANTASY VII", 1997, "ROL", "SQUARE"),
new Game ("GOLDENEYE 007", 1997, "F.P.S.", "NINTENDO"),
new Game ("GRAN TURISMO", 1997, "CARRERAS", "SONY ENTERTAINMENT"),
new Game ("QUAKE II", 1997, "F.P.S.", "ACTIVISION"),
new Game ("STAR FOX 64", 1997, "SHOOT'EM UP", "NINTENDO")   ,
new Game ("STAR WARS JEDI KNIGHT: DARK FORCES II ", 1997, "F.P.S.", "LUCASARTS"),
new Game ("TEKKEN 3", 1997, "LUCHA", "NAMCO"),
new Game ("ULTIMA ONLINE", 1997, "MMORPG", "ELECTRONIC ARTS"),
new Game ("DANCE DANCE REVOLUTION", 1998, "RITMO", "KONAMI"),
new Game ("GRIM FANDANGO", 1998, "AVENTURA" ,"LUCASARTS"),
new Game ("HALF-LIFE", 1998, "F.P.S.","SIERRA STUDIOS"),
new Game ("THE LEYEND OF ZELDA: OCARINA OF TIME", 1998, "AVENTURA", "NINTENDO"),
new Game ("METAL GEAR SOLID", 1998, "SIGILO", "KONAMI"),
new Game ("PANZER DRAGOON SAGA", 1998, "ROL", "KONAMI"),
new Game ("RESIDENT EVIL 2", 1998, "TERROR", "CAPCOM"),
new Game ("SOULCALIBUR", 1998, "LUCHA","NAMCO"),
new Game ("SHENMUE", 1999, "AVENTURA", "SEGA"),
new Game ("SILENT HILL", 1999, "TERROR" ,"KONAMI"),
new Game ("SYSTEM SHOCK 2", 1999, "F.P.S.", "ELECTRONIC ARTS"),
new Game ("BALDUR'S GATE 2: SHADOWS OF AMN", 2000, "ROL", "BLACK ISLE STUDIOS"),
new Game ("COUNTER-STRIKE", 2000, "F.P.S.", "VALVE CORPORATION"),
new Game ("DEUS-EX", 2000, "ACCIÓN", "EIDOS ENTERTAINMENT"),
new Game ("GOD HAND", 2007, "BEAT'EM UP", "CAPCOM"),
new Game ("DIABLO II", 2000, "ACCIÓN" ,"BLIZZARD"),
new Game ("JET SET RADIO", 2000, "PLATAFORMAS", "SEGA"),
new Game ("THE LEGEND OF ZELDA: MAJORA'S MASK", 2000, "AVENTURA", "NINTENDO"),
new Game ("LOS SIMS", 2000, "SIMULACIÓN", "ELECTRONIC ARTS"),
new Game ("TONY HAWK'S PRO SKATER 2", 2000, "DEPORTES", "ACTIVISION"),
new Game ("ANIMAL CROSSING", 2001, "SIMULACIÓN", "NINTENDO"),
new Game ("FINAL FANTASY X", 2001, "ROL", "SQUARE"),
new Game ("GRAN TURISMO 3: A-SPEC", 2001, "CARRERAS", "SONY ENTERTAINMENT"),
new Game ("GRAND THEFT AUTO III", 2001, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("HALO: COMBAT EVOLVED", 2001, "F.P.S.", "MICROSOFT GAMES"),
new Game ("ICO", 2001, "ACCIÓN", "SONY ENTERTAINMENT"),
new Game ("MAX PAYNE", 2001, "DISPAROS EN TERCERA PERSONA", "ROCKSTAR GAMES"),
new Game ("METAL GEAR SOLID 2: SONS OF LIBERTY", 2001, "SIGILO", "KONAMI"),
new Game ("REZ", 2001, "SHOOT'EM UP", "SEGA"),
new Game ("SILENT HILL 2", 2001, "TERROR", "KONAMI"),
new Game ("SUPER SMASH BROS. MELEE", 2001, "LUCHA", "NINTENDO"),
new Game ("GRAND THEFT AUTO: VICE CITY", 2002, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("METROID PRIME", 2002, "ACCIÓN", "NINTENDO"),
new Game ("BURNOUT 3: TAKEDOWN", 2004, "CARRERAS", "ELECTRONIC ARTS"),
new Game ("GRAND THEFT AUTO: SAN ANDREAS", 2004, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("THE LEGEND OF ZELDA: THE WIND MAKER", 2002, "AVENTURA", "NINTENDO"),
new Game ("PRINCE OF PERSIA: THE SANDS OF TIME", 2003, "ACCIÓN", "UBISOFT"),
new Game ("STAR WARS: KNIGHTS OF THE OLD REPUBLIC", 2003, "ROL", "LUCASARTS"),
new Game ("WARIOWARE, INC.: MEGA MICROGAMES!", 2003, "ACCIÓN", "NINTENDO"),
new Game ("HALF-LIFE 2", 2004, "F.P.S.", "VALVE CORPORATION"),
new Game ("KATAMARI DAMACY", 2004, "ACCIÓN", "NAMCO"),
new Game ("METAL GEAR SOLID 3: SNAKE EATER", 2004, "SIGILO", "KONAMI"),
new Game ("WORLD OF WARCRATF", 2004, "MMORPG", "BLIZZARD"),
new Game ("CIVILIZATION IV", 2005, "ESTRATEGIA", "2K GAMES"),
new Game ("DEVIL MAY CRY 3: DANTE'S AWAKENING", 2005, "ACCIÓN", "CAPCOM"),
new Game ("GOD OF WAR", 2005, "ACCIÓN", "SONY ENTERTAINMENT"),
new Game ("GUITAR HERO", 2005, "RITMO", "REDOCTANE"),
new Game ("RESIDENT EVIL 4", 2005, "TERROR", "CAPCOM"),
new Game ("SHADOW OF THE COLOSSUS", 2005, "AVENTURA", "SONY ENTERTAINMENT"),
new Game ("SPLINTER CELL: CHAOS THEORY", 2005, "SIGILO", "UBISOFT"),
new Game ("THE ELDER SCROLLS IV: OBLIVION", 2006, "ROL", "BETHESDA SOFTWORKS"),
new Game ("GEARS OF WAR", 2006, "DISPAROS EN TERCERA PERSONA", "MICROSOFT GAMES"),
new Game ("OKAMI", 2006, "AVENUTURA", "CAPCOM"),
new Game ("WII SPORTS", 2006, "DEPORTES", "NINTENDO"),
new Game ("BIOSHOCK", 2007, "F.P.S.", "2K GAMES"),
new Game ("CALL OF DUTY 4: MODERN WARFARE", 2007, "F.P.S.", "ACTIVISION"),
new Game ("GOD OF WAR 2", 2007, "ACCIÓN", "SONY ENTERTAINMENT"),
new Game ("HALO 3", 2007, "F.P.S.", "MICROSOFT GAMES"),
new Game ("PORTAL", 2007, "ROMPECABEZAS", "VALVE CORPORATION"),
new Game ("SUPER MARIO GALAXY", 2007, "PLATAFORMAS", "NINTENDO"),
new Game ("TEAM FORTRESS 2", 2007, "F.P.S", "VALVE CORPORATION"),
new Game ("BRAID", 2008, "PLATAFORMAS", "MICROSOFT GAMES"),
new Game ("DEAD SPACE", 2008, "TERROR", "ELECTRONIC ARTS"),
new Game ("FALLOUT 3", 2008, "ACCIÓN", "BETHESDA SOFTWORKS"),
new Game ("GRAND THEFT AUTO IV", 2008, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("LEFT 4 DEAD", 2008, "F.P.S.", "VALVE CORPORATION"),
new Game ("LITTLEBIGPLANET", 2008, "PLATAFORMAS", "SONY ENTERTAINMENT"),
new Game ("PERSONA 4", 2008, "ROL", "ATLUS"),
new Game ("SPELUNKY", 2008, "PLATAFORMAS", "DEREK YU"),
new Game ("ASSASSIN'S CREED II", 2009, "ACCIÓN", "UBISOFT"),
new Game ("BATMAN: ARKHAM ASYLUM", 2009, "ACCIÓN", "WARNER BROS."),
new Game ("UNCHARTED 2: AMONG THIEVES", 2009, "AVENTURA", "SONY ENTERTAINMENT"),
new Game ("LIMBO", 2010, "PLATAFORMAS", "MICROSOFT GAMES"),
new Game ("MASS EFECT 2", 2010, "ACCIÓN", "ELECTRONIC ARTS"),
new Game ("RED DEAD REDEMPTION", 2010, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("ROCK BAND 3", 2010, "RITMO", "MTV GAMES"),
new Game ("SUPER MARIO GALAXY 2", 2010, "PLATAFORMAS", "NINTENDO"),
new Game ("SUPER MEAT BOY", 2010, "PLATAFORMAS", "TEAM MEAT"),
new Game ("BATMAN ARKHAM CITY", 2011, "ACCIÓN", "WARNER BROS."),
new Game ("DARK SOULS", 2011, "ACCIÓN", "BANDAI NAMCO"),
new Game ("THE ELDER SCROLLS V: SKYRIM", 2011, "ACCIÓN", "BETHESDA SOFTWORKS"),
new Game ("MINECRAFT", 2011, "SANDBOX", "MOJANG"),
new Game ("PORTAL 2", 2011, "ROMPECABEZAS", "VALVE CORPORATION"),
new Game ("FIRE EMBLEM: AWAKENING", 2012, "ESTRATEGIA", "NINTENDO"),
new Game ("JOURNEY", 2012, "AVENTURA", "SONY ENTERTAINMENT"),
new Game ("MASS EFFECT 3", 2012, "ACCIÓN", "ELECTRONIC ARTS"),
new Game ("THE WALKING DEAD", 2012, "AVENTURA", "TELLTALE GAMES"),
new Game ("DOTA 2", 2013, "MOBA", "VALVE CORPORATION"),
new Game ("GRAND THEFT AUTO V", 2013, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("THE LAST OF US", 2013, "ACCIÓN", "SONY ENTERTAINMENT"),
new Game ("BLOODBORNE", 2015, "ACCION", "SONY ENTERTAINMENT"),
new Game ("THE WITCHER 3: WILD HUNT", 2015, "ACCION", "CD PROYECT"),
new Game ("INSIDE", 2016, "PLATAFORMAS", "PLAYDEAD"),
new Game ("OVERWATCH", 2016, "F.P.S.", "BLIZZARD"),
new Game ("THE LEYEND OF ZELDA: BREATH OF THE WILD", 2017, "AVENTURA", "NINTENDO"),
new Game ("ASSASSIN'S CREED: ORIGINS", 2017, "ACCIÓN", "UBISOFT"),
new Game ("GOD OF WAR", 2018, "ACCIÓN", "SONY ENTERTAINMENT"),
new Game ("RED DEAD REDEMPTION 2", 2018, "ACCIÓN", "ROCKSTAR GAMES"),
new Game ("PERSONA 5 ROYAL", 2019, "ROL", "ATLUS"),
new Game ("SEKIRO: SHADOWS DIE TWICE", 2019, "ACCION", "ACTIVISON"),
new Game ("THE LAST OF US 2", 2020, "ACCION", "SONY ENTERTAINMENT"),
new Game ("HADES", 2020, "ROGUELIKE", "SUPERGIANT GAMES"),
]

  if (localStorage.getItem("VideoGames")) {
    let storedGames = JSON.parse(localStorage.getItem("VideoGames"));
    library.length = 0;
    library.push(...storedGames);
  }
  
  function addGame() {
    let name = document.getElementById("inputName").value.trim();
    let year = parseInt(document.getElementById("inputYear").value);
    let genre = document.getElementById("inputGenre").value.trim();
    let development = document.getElementById("inputDevelopment").value.trim();
  
    if (!name || isNaN(year) || !genre || !development) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos correctamente.",
        icon: "error"
      });
      return;
    }
  
    let newGame = new Game(name, year, genre, development);
    library.push(newGame);
    localStorage.setItem("VideoGames", JSON.stringify(library));
  
    Swal.fire({
      title: "Juego agregado exitosamente",
      icon: "success"
    });
  }

  function searchGames() {
    let searchName = document.getElementById("inputName").value.trim();
    let searchYear = document.getElementById("inputYear").value.trim();
    let searchGenre = document.getElementById("inputGenre").value.trim();
    let searchDevelopment = document.getElementById("inputDevelopment").value.trim();
  
    let localResults = library.filter(game => {
      let nameMatch = !searchName || game.name.toUpperCase().includes(searchName.toUpperCase());
      let yearMatch = !searchYear || game.year.toString() === searchYear;
      let genreMatch = !searchGenre || game.genre.toUpperCase() === searchGenre.toUpperCase();
      let devMatch = !searchDevelopment || game.development.toUpperCase() === searchDevelopment.toUpperCase();
      return nameMatch && yearMatch && genreMatch && devMatch;
    });
  
    if (localResults.length > 0) {
      const gameNames = localResults.map(game => game.name).join(", ");
      Swal.fire({
        title: "Resultados en la biblioteca local:",
        text: gameNames,
        icon: "success"
      });
    } else {
      searchRAWG({ name: searchName, year: searchYear, genre: searchGenre, development: searchDevelopment });
    }
  }
  
  function searchRAWG(params) {
    let API_KEY = "4f1982e4e0ed48ce87d685cfa5c2443f"; 
    let query = `https://api.rawg.io/api/games?key=${API_KEY}`;
  
    if (params.name) {
      query += `&search=${encodeURIComponent(params.name)}`;
    }
    if (params.year) {
      query += `&dates=${params.year}-01-01,${params.year}-12-31`;
    }
    if (params.genre) {
      query += `&genres=${encodeURIComponent(params.genre)}`;
    }
    if (params.development) {
      query += `&developers=${encodeURIComponent(params.development)}`;
    }
  
    fetch(query)
      .then(response => response.json())
      .then(data => {
        if (data.count && data.count > 0) {
          const gameNames = data.results.map(game => game.name).join(", ");
          Swal.fire({
            title: "Resultados en RAWG API:",
            text: gameNames,
            icon: "success"
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Juego no encontrado",
            text: "No se encontró ningún juego en RAWG API con esos parámetros."
          });
        }
      })
      .catch(error => {
        console.error("Error en RAWG API:", error);
        Swal.fire({
          icon: "error",
          title: "Error en RAWG API",
          text: "Ocurrió un error al buscar en RAWG API."
        });
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addNewGame").addEventListener("click", addGame);
    document.getElementById("searchNewGame").addEventListener("click", searchGames);
  });
  