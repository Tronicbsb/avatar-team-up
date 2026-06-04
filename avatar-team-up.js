/* ================================================================
   Avatar: Invasão da Nação do Fogo (MTG Team-Up) — Engine & Banco de Dados
   ================================================================ */

// ── BANCO DE DADOS DAS CARTAS (Mapeamento Oficial de TMNT -> Avatar TLA) ──

const CARD_DATABASE = {
  bosses: [
    {
      id: "combustion_man",
      originalName: "Baxter, Exzzperimental Zzientist",
      name: "Homem Combustão",
      element: "fire",
      type: "Chefe Lendário — Dobrador de Fogo",
      rules: "Criaturas chamadas Soldado da Nação do Fogo que os chefes controlam têm voar.",
      flavor: "Um mercenário silencioso que usa sua mente para disparar rajadas explosivas mortais.",
      pt: "4/4",
      artDefault: "🔥"
    },
    {
      id: "zuko",
      originalName: "Bebop, Porcine Punk",
      name: "Príncipe Zuko",
      element: "fire",
      type: "Chefe Lendário — Dobrador de Fogo",
      rules: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada Soldado da Nação do Fogo.",
      flavor: "A determinação incansável de capturar o Avatar alimenta sua agressividade em combate.",
      pt: "3/5",
      artDefault: "⚔️"
    },
    {
      id: "ty_lee",
      originalName: "Chrome Dome, Cyber-Ninja",
      name: "Ty Lee",
      element: "fire",
      type: "Chefe Lendário — Acrobata",
      rules: "Soldados que os chefes controlam recebem +1/+0 para cada chefe em jogo.",
      flavor: "Com agilidade incomparável, seus golpes bloqueiam o fluxo de chi de qualquer adversário.",
      pt: "2/6",
      artDefault: "🤸"
    },
    {
      id: "azula",
      originalName: "Karai, Shadow Warrior",
      name: "Princesa Azula",
      element: "fire",
      type: "Chefe Lendário — Dobradora de Fogo",
      rules: "Sempre que uma criatura que os heróis controlam morrer, os heróis perdem 1 ponto de vida.",
      flavor: "Cruel, calculista e uma prodígio das chamas azuis e eletricidade.",
      pt: "4/4",
      artDefault: "⚡"
    },
    {
      id: "zhao",
      originalName: "Krang, Dimension X Overlord",
      name: "Almirante Zhao",
      element: "fire",
      type: "Chefe Lendário — Comandante",
      rules: "Os chefes jogam uma carta adicional a cada turno.\nNo início do turno dos chefes, os chefes perdem 2 pontos de vida.",
      flavor: "Sua sede impetuosa de glória o cega para os danos colaterais de sua própria frota.",
      pt: "5/4",
      artDefault: "🚢"
    },
    {
      id: "hama",
      originalName: "Leatherhead, Sewer Gator",
      name: "Hama, a Titereira",
      element: "water",
      type: "Chefe Lendário — Dobradora de Água",
      rules: "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo.",
      flavor: "A criadora do sangue-dobramento usa a umidade do ar e do corpo de suas vítimas na lua cheia.",
      pt: "4/5",
      artDefault: "🌙"
    },
    {
      id: "long_feng",
      originalName: "Rat King, the Chaosbringer",
      name: "Long Feng",
      element: "earth",
      type: "Chefe Lendário — Líder Dai Li",
      rules: "Soldados que os chefes controlam têm toque mortífero.",
      flavor: "Nas profundezas do Lago Laogai, ele controla segredos e lava cérebros para manter sua utopia.",
      pt: "3/5",
      artDefault: "🏛️"
    },
    {
      id: "mai",
      originalName: "Rocksteady, Rowdy Rhino",
      name: "Mai",
      element: "fire",
      type: "Chefe Lendário — Atiradora",
      rules: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada Soldado da Nação do Fogo.",
      flavor: "Agulhas de arremesso silenciosas e um tédio mortal para com seus oponentes.",
      pt: "4/4",
      artDefault: "🎯"
    },
    {
      id: "sozin",
      originalName: "Savanti Romero, Temporal Rogue",
      name: "Senhor do Fogo Sozin",
      element: "fire",
      type: "Chefe Lendário — Dobrador de Fogo",
      rules: "Sempre que uma ou mais criaturas que os chefes controlam causarem dano de combate aos heróis, os heróis escolhem uma carta e a colocam no fundo do grimório.",
      flavor: "A passagem de seu cometa marcou o início de uma guerra centenária de devastação.",
      pt: "5/5",
      artDefault: "☄️"
    },
    {
      id: "ozai",
      originalName: "Shredder, Foot Clan Overlord",
      name: "Senhor do Fogo Ozai",
      element: "fire",
      type: "Chefe Lendário — Dobrador de Fogo",
      rules: "Sempre que uma criatura que os chefes controlam morrer, os heróis perdem 1 ponto de vida.",
      flavor: "A força soberana suprema da Nação do Fogo, determinado a queimar o mundo sob o Cometa.",
      pt: "6/6",
      artDefault: "👑"
    },
    {
      id: "jet_brainwashed",
      originalName: "Slash, the Dark Mirror",
      name: "Jet, Rebelde Controlado",
      element: "earth",
      type: "Chefe Lendário — Guerreiro",
      rules: "Criaturas atacantes que os chefes controlam têm iniciativa.",
      flavor: "Suas espadas duplas em gancho agora atacam sob as ordens e controle da lavagem cerebral do Dai Li.",
      pt: "5/3",
      artDefault: "🌲"
    }
  ],
  
  minions: [
    {
      id: "fire_soldier",
      originalName: "Foot Disciple",
      name: "Soldado da Nação do Fogo",
      element: "fire",
      type: "Criatura — Soldado da Nação do Fogo",
      rules: "Esta criatura não pode bloquear.",
      flavor: "Treinados exaustivamente para marchar e espalhar cinzas por onde passam.",
      pt: "3/3",
      artDefault: "🛡️"
    },
    {
      id: "fire_scout",
      originalName: "Foot Skirmisher",
      name: "Batedor Aéreo da Nação do Fogo",
      element: "fire",
      type: "Criatura — Soldado Batedor",
      rules: "Voar.\n(Esta criatura não pode ser bloqueada por criaturas sem voar.)\nEsta criatura não pode bloquear.",
      flavor: "Montados em balões de guerra ou usando planadores, eles mapeiam o campo de batalha inimigo.",
      pt: "2/1",
      artDefault: "🎈"
    },
    {
      id: "fire_vanguard",
      originalName: "Foot Enforcer",
      name: "Vanguarda de Elite do Fogo",
      element: "fire",
      type: "Criatura — Soldado Elite",
      rules: "Esta criatura não pode bloquear.\nEsta criatura só pode ser bloqueada por uma criatura.",
      flavor: "Com armaduras pesadas e chamas concentradas, eles quebram qualquer linha de defesa dos heróis.",
      pt: "6/3",
      artDefault: "💥"
    }
  ],
  
  events: [
    {
      id: "combustion_blast",
      originalName: "Baxter's Experiments",
      name: "Explosão de Combustão",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Copie o próximo evento que os Chefes jogarem.\n(Coloque este card ao lado do deck de eventos. Depois que o próximo evento for jogado e resolvido, coloque este card no descarte de eventos.)",
      flavor: "Uma segunda faísca mental que explode logo em seguida, dobrando o perigo."
    },
    {
      id: "zuko_fire_lash",
      originalName: "Bebop's Rampage",
      name: "Açoite de Fogo de Zuko",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Esta Tática causa 2 pontos de dano a cada criatura que os heróis controlam.",
      flavor: "Um chicote de fogo fluido que varre os benders heróis de uma vez só."
    },
    {
      id: "ty_lee_chi_block",
      originalName: "Chrome Dome's Overload",
      name: "Bloqueio de Chi de Ty Lee",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Cada herói sacrifica uma criatura virada que controla.",
      flavor: "Um toque rápido nos pontos de pressão desativa completamente a capacidade de dobrar dos heróis."
    },
    {
      id: "azula_infiltration",
      originalName: "Karai's Planning",
      name: "Infiltração de Azula",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Os heróis perdem 3 pontos de vida e os chefes ganham 3 pontos de vida.",
      flavor: "Disfarçada como guerreira Kyoshi, ela rouba a liderança por dentro das muralhas de Ba Sing Se."
    },
    {
      id: "zhao_conquest",
      originalName: "Krang's Stratagem",
      name: "Conquista do Almirante Zhao",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Como equipe, os heróis descartam um total de 2 cartas.",
      flavor: "O cerco massivo ao Polo Norte força os benders da Tribo da Água a recuarem sob pressão."
    },
    {
      id: "hama_bloodbending",
      originalName: "Leatherhead's Smackdown",
      name: "Sangue-Dobramento de Hama",
      element: "water",
      type: "Tática (Feitiço Inimigo)",
      rules: "Como equipe, os heróis escolhem uma criatura que controlam com o maior poder e a destroem. Os chefes perdem pontos de vida igual ao poder dela.",
      flavor: "Manipulando os fluidos do próprio guerreiro herói, ela o força a atacar a si mesmo."
    },
    {
      id: "long_feng_brainwash",
      originalName: "Rat King's Revolution",
      name: "Lavagem Cerebral de Long Feng",
      element: "earth",
      type: "Tática (Feitiço Inimigo)",
      rules: "Cada herói vira X criaturas que controla, onde X é o número de chefes em jogo.\n(Se uma permanente já estiver virada, ela continua virada.)",
      flavor: "Não há guerra em Ba Sing Se. O Rei da Terra convida você para o Lago Laogai."
    },
    {
      id: "mai_pinpoint",
      originalName: "Rocksteady's Beatdown",
      name: "Adaga Certeira de Mai",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Destrua todas as criaturas com voar que os heróis controlam.",
      flavor: "Sua pontaria milimétrica fixa instantaneamente as asas dos oponentes na parede."
    },
    {
      id: "sozin_comet_erase",
      originalName: "Savanti Romero's Curse",
      name: "Cometa de Sozin",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Cada herói devolve X criaturas que controla para a mão de seus donos, onde X é o número de chefes em jogo.",
      flavor: "Um calor insuportável consome a atmosfera, forçando todas as defesas a recuarem."
    },
    {
      id: "ozai_decree",
      originalName: "Shredder's Challenge",
      name: "Decreto Imperial de Ozai",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Retorne 2 cartas de Soldado aleatórias do cemitério dos chefes para o campo de batalha sob o controle dos chefes.",
      flavor: "Ele exige lealdade absoluta e ressuscita sua infantaria caída para marchar novamente."
    },
    {
      id: "jet_rampage",
      originalName: "Slash's Smash",
      name: "Emboscada Rebelde de Jet",
      element: "earth",
      type: "Tática (Feitiço Inimigo)",
      rules: "Destrua todos os Aliados que os heróis controlam.",
      flavor: "Jet usa táticas implacáveis de guerrilha, inundando o vale sem se importar com inocentes."
    },
    {
      id: "fire_ambush",
      originalName: "Villain Infiltration",
      name: "Emboscada da Nação do Fogo",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Como equipe, os heróis escolhem uma criatura que controlam com o maior poder e a destroem.",
      flavor: "Um ataque surpresa das forças especiais Yuyan incapacita o líder da defesa."
    },
    {
      id: "firebombing",
      originalName: "Villain Mayhem",
      name: "Bombardeio da Nação do Fogo",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Como equipe, os heróis escolhem 3 criaturas que controlam. Destrua todas as outras criaturas que os heróis controlam.",
      flavor: "Dirigíveis cobrem os céus e lançam fogo devastador, limpando o campo de batalha."
    },
    {
      id: "resurgence",
      originalName: "Villain Scheme",
      name: "Ressurgimento Imperial",
      element: "fire",
      type: "Tática (Feitiço Inimigo)",
      rules: "Embaralhe esta carta e todo o cemitério dos chefes de volta no grimório (Event Deck) dos chefes.",
      flavor: "Quando a vitória dos heróis parece próxima, a máquina de guerra se reorganiza."
    }
  ]
};

// ── SISTEMA DE PERSISTÊNCIA DE CUSTOMIZAÇÃO DE ARTE (LocalStorage) ──

// Artes padrão globais (publicadas no JS) para funcionar em qualquer dispositivo.
// Preencha por cardId, por exemplo:
// combustion_man: { artUrl: "https://cards.scryfall.io/art_crop/front/..." }
const DEFAULT_CUSTOM_ART = {
  combustion_man: { artUrl: "https://cards.scryfall.io/art_crop/front/8/6/86f7399d-6876-4e85-ba34-ff1f97dc144a.jpg" },
  zuko: { artUrl: "https://cards.scryfall.io/art_crop/front/6/a/6a73b372-9c0e-4a85-89d2-440163330687.jpg" },
  ty_lee: { artUrl: "https://cards.scryfall.io/art_crop/front/d/c/dcd9df24-272b-4aa1-b05f-6ee6b3d3dfe7.jpg" },
  azula: { artUrl: "https://cards.scryfall.io/art_crop/front/b/c/bc6146bf-f0c6-4557-af6a-74c643d5fc01.jpg" },
  zhao: { artUrl: "https://cards.scryfall.io/art_crop/front/3/f/3fd48a57-b0bb-4177-a0f3-bd317a179cbe.jpg" },
  hama: { artUrl: "https://cards.scryfall.io/art_crop/front/6/f/6fa1197d-7b19-4d86-81e2-5c87de87757b.jpg" },
  long_feng: { artUrl: "https://cards.scryfall.io/art_crop/front/a/3/a3eb92fe-bc59-4472-9028-f368bd015609.jpg" },
  mai: { artUrl: "https://cards.scryfall.io/art_crop/front/7/4/74dd4c0e-27b8-4c47-b7a6-a281413cd6b4.jpg" },
  sozin: { artUrl: "https://cards.scryfall.io/art_crop/back/1/4/14eadf46-90c2-4376-8183-6a922a60174d.jpg" },
  ozai: { artUrl: "https://cards.scryfall.io/art_crop/front/a/9/a98b1550-4609-4a2f-9371-4afe1cdc613e.jpg" },
  jet_brainwashed: { artUrl: "https://cards.scryfall.io/art_crop/front/9/2/9202c044-15e4-4218-a94d-16287ba19d69.jpg" },
  fire_soldier: { artUrl: "https://cards.scryfall.io/art_crop/front/a/2/a20aaa6c-7032-43c1-9e7c-57cf8c8ecfd4.jpg" },
  fire_scout: { artUrl: "https://cards.scryfall.io/art_crop/front/6/8/6829b20d-c2fa-41a6-89ca-f21c522d8866.jpg" },
  fire_vanguard: { artUrl: "https://cards.scryfall.io/art_crop/front/4/a/4a08c7c4-d20f-4c5b-a308-b8c84c9030a9.jpg" },
  combustion_blast: { artUrl: "https://cards.scryfall.io/art_crop/front/5/7/5787b0e0-9469-4a6d-8b81-c992628e28c0.jpg" },
  azula_infiltration: { artUrl: "https://cards.scryfall.io/art_crop/front/d/a/daf30e1c-436d-4f23-b1d2-570619a4b7f5.jpg" },
  zuko_fire_lash: { artUrl: "https://cards.scryfall.io/art_crop/front/3/9/3959cf4e-57a5-4355-9837-56f70b321874.jpg" },
  ty_lee_chi_block: { artUrl: "https://cards.scryfall.io/art_crop/front/3/0/308cc687-9cb2-4e3a-98db-c5ba2a7da115.jpg" },
  zhao_conquest: { artUrl: "https://cards.scryfall.io/art_crop/front/e/5/e58372cc-9a89-47a4-a0db-df5435e26cd3.jpg" },
  hama_bloodbending: { artUrl: "https://cards.scryfall.io/art_crop/front/9/b/9bb928ae-f636-4aee-9146-a7885e6a8976.jpg" },
  long_feng_brainwash: { artUrl: "https://cards.scryfall.io/art_crop/front/b/1/b17e8bdb-4b91-4a9d-bfe1-8a55f0bd040b.jpg" },
  mai_pinpoint: { artUrl: "https://cards.scryfall.io/art_crop/front/7/3/732e6bc9-0798-4c00-aea0-5ef4298b45f5.jpg" },
  sozin_comet_erase: { artUrl: "https://cards.scryfall.io/art_crop/front/6/4/649e50e5-299b-4191-87a8-36e9378795be.jpg" },
  ozai_decree: { artUrl: "https://cards.scryfall.io/art_crop/front/2/2/22cad680-d46a-4589-a633-b6ee9a78d61e.jpg" },
  jet_rampage: { artUrl: "https://cards.scryfall.io/art_crop/front/7/9/79d4b68c-36b9-4597-83f8-a869c5cf4b93.jpg" },
  fire_ambush: { artUrl: "https://cards.scryfall.io/art_crop/front/9/9/99244462-a996-4a5b-91fb-947045647d6d.jpg" },
  firebombing: { artUrl: "https://cards.scryfall.io/art_crop/front/b/5/b51d3259-c41c-4f64-9666-0a9e676c812f.jpg" },
  resurgence: { artUrl: "https://cards.scryfall.io/art_crop/front/7/7/77e548c9-8bed-40c3-bcdd-9d97a82c885d.jpg" }
};

const CustomizationStore = {
  key: 'avatar_teamup_custom_art_db',
  
  getAll() {
    if (typeof localStorage === 'undefined') return {};
    const saved = localStorage.getItem(this.key);
    return saved ? JSON.parse(saved) : {};
  },
  
  get(cardId) {
    const local = this.getAll()[cardId] || {};
    const globalDefault = DEFAULT_CUSTOM_ART[cardId] || {};
    const merged = { ...globalDefault, ...local };
    return Object.keys(merged).length ? merged : null;
  },
  
  save(cardId, data) {
    const db = this.getAll();
    db[cardId] = { ...(db[cardId] || {}), ...data };
    localStorage.setItem(this.key, JSON.stringify(db));
  },
  
  reset(cardId) {
    const db = this.getAll();
    delete db[cardId];
    localStorage.setItem(this.key, JSON.stringify(db));
  },
  
  resetAll() {
    localStorage.removeItem(this.key);
  }
};

// Migração pontual de textos antigos salvos no localStorage
function migrateLegacyCustomTexts() {
  if (typeof localStorage === 'undefined') return;
  try {
    const db = CustomizationStore.getAll();
    if (!db || typeof db !== 'object') return;
    let changed = false;

    // 1) Correções específicas já padronizadas no projeto
    const exactRuleFixes = {
      jet_rampage: "Destrua todos os Aliados que os heróis controlam.",
      ozai: "Sempre que uma criatura que os chefes controlam morrer, os heróis perdem 1 ponto de vida.",
      mai: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada Soldado da Nação do Fogo.",
      long_feng: "Soldados que os chefes controlam têm toque mortífero.",
      hama: "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo."
    };

    Object.entries(exactRuleFixes).forEach(([cardId, canonicalRule]) => {
      const item = db[cardId];
      if (!item || typeof item.customText !== 'string') return;
      if (item.customText !== canonicalRule) {
        db[cardId] = { ...item, customText: canonicalRule };
        changed = true;
      }
    });

    // 2) Varredura global de termos antigos
    Object.keys(db).forEach((cardId) => {
      const item = db[cardId];
      if (!item || typeof item.customText !== 'string') return;

      let updated = item.customText;
      updated = updated.replace(/Dobradores\s*\(benders\)/gi, 'Aliados');
      updated = updated.replace(/\bbenders\b/gi, 'Aliados');
      updated = updated.replace(/\bDobradores\b/gi, 'Aliados');

      // Ajustes de consistência de texto recorrentes
      updated = updated.replace(/Soldado da Nação do Fogo(?!\.)/gi, 'Soldado da Nação do Fogo');
      updated = updated.replace(/chefes perdem 1 ponto de vida\./gi, 'heróis perdem 1 ponto de vida.');

      if (updated !== item.customText) {
        db[cardId] = { ...item, customText: updated };
        changed = true;
      }
    });

    if (changed) {
      localStorage.setItem(CustomizationStore.key, JSON.stringify(db));
    }
  } catch (err) {
    console.warn('Falha na migração de textos antigos:', err);
  }
}

// ── MAQUINA DE ESTADO DO JOGO COOPERATIVO (Companion Engine) ──

const GameEngine = {
  playerCount: 2,
  heroesLife: 20,
  bossesLife: 20,
  activeStage: 1,
  
  bossDeck: [],      // Lista embaralhada de chefes (6 ou 10 cartas)
  activeBosses: [],  // Chefes atualmente em combate
  
  eventDeck: [],     // Biblioteca de eventos inimiga (27 cartas)
  eventGraveyard: [],// Cemitério
  drawnCards: [],    // Cartas compradas no turno atual
  battlefield: [],   // Criaturas da Nação do Fogo em combate
  
  turnCount: 1,
  isGameOver: false,
  isVictory: false,
  
  // Inicialização da Partida
  setupGame(players) {
    this.playerCount = players;
    this.activeStage = 1;
    this.eventGraveyard = [];
    this.drawnCards = [];
    this.battlefield = [];
    this.turnCount = 1;
    this.isGameOver = false;
    this.isVictory = false;
    
    // 1. Configurar Boss Deck conforme Player Count
    //    O conjunto tem 11 cartas de chefe no total.
    //    2-3 Jogadores: escolher 6 aleatoriamente dos 11.
    //    4 Jogadores:   escolher 10 aleatoriamente dos 11.
    const allBosses = [...CARD_DATABASE.bosses]; // 11 bosses
    this.shuffleArray(allBosses);
    
    this.defeatedBosses = []; // Histórico de derrotados nesta partida

    if (players === 4) {
      // 4 Jogadores: 10 Chefes (Stage 1: 2 Bosses | Stage 2: 3 Bosses | Stage 3: 5 Bosses)
      this.bossDeck = allBosses.slice(0, 10);
      this.heroesLife = 40;
      this.bossesLife = 30;
      // Estágio 1: revela os 2 primeiros do deck embaralhado
      this.activeBosses = this.bossDeck.splice(0, 2);
    } else {
      // 2 ou 3 Jogadores: 6 Chefes escolhidos aleatoriamente dos 11 disponíveis
      // (Stage 1: 1 Boss | Stage 2: 2 Bosses | Stage 3: 3 Bosses)
      this.bossDeck = allBosses.slice(0, 6);
      this.heroesLife = (players === 3) ? 30 : 20;
      this.bossesLife = (players === 3) ? 30 : 20;
      // Estágio 1: revela o primeiro chefe do topo do deck
      this.activeBosses = this.bossDeck.splice(0, 1);
    }
    
    // 2. Criar e Embaralhar Event Deck (27 cartas conforme as regras oficiais TMNT/Avatar Team-Up)
    //    DB tem 14 táticas: 11 de boss específicas + Emboscada + Bombardeio + Ressurgimento (1 cópia cada)
    //    + cópias extras abaixo para atingir os totais corretos:
    //    - 11x Táticas de boss (1 cada): combustion, zuko, ty_lee, azula, zhao, hama, long_feng, mai, sozin, ozai, jet
    //    - 2x Emboscada da Nação do Fogo (Villain Infiltration) → 1 no DB + 1 extra abaixo
    //    - 3x Bombardeio da Nação do Fogo (Villain Mayhem) → 1 no DB + 2 extras abaixo
    //    - 1x Ressurgimento Imperial (Villain Scheme) → 1 no DB
    //    Total táticas: 14 (do forEach) + 1 + 2 = 17
    //    - 5x Soldado da Nação do Fogo (Foot Disciple)
    //    - 3x Batedor Aéreo (Foot Skirmisher)
    //    - 2x Vanguarda de Elite (Foot Enforcer)
    //    Total lacaios: 10
    //    GRAND TOTAL: 17 + 10 = 27 ✓
    const deck = [];
    
    // 14 táticas do DB (11 boss específicas + 3 gerais — cada uma 1 cópia)
    CARD_DATABASE.events.forEach(ev => {
      deck.push({ ...ev, instanceId: `event_${ev.id}_${Date.now()}_${Math.random()}` });
    });
    
    // 5x Soldado da Nação do Fogo (Foot Disciple)
    for (let i = 0; i < 5; i++) {
      deck.push({ ...CARD_DATABASE.minions[0], instanceId: `minion_soldier_${i}` });
    }
    
    // 3x Batedor Aéreo (Foot Skirmisher)
    for (let i = 0; i < 3; i++) {
      deck.push({ ...CARD_DATABASE.minions[1], instanceId: `minion_scout_${i}` });
    }
    
    // 2x Vanguarda de Elite (Foot Enforcer)
    for (let i = 0; i < 2; i++) {
      deck.push({ ...CARD_DATABASE.minions[2], instanceId: `minion_vanguard_${i}` });
    }
    
    // Nota: Villain Infiltration (2x) e Villain Mayhem (3x) já vêm nos events com IDs únicos.
    // As cópias extras precisam ser adicionadas manualmente pois o DB tem só 1 de cada:
    const fireAmbush = CARD_DATABASE.events.find(e => e.id === 'fire_ambush');
    if (fireAmbush) {
      deck.push({ ...fireAmbush, instanceId: `event_fire_ambush_copy2` });
    }
    
    const firebombing = CARD_DATABASE.events.find(e => e.id === 'firebombing');
    if (firebombing) {
      deck.push({ ...firebombing, instanceId: `event_firebombing_copy2` });
      deck.push({ ...firebombing, instanceId: `event_firebombing_copy3` });
    }
    
    this.shuffleArray(deck);
    this.eventDeck = deck;
  },
  
  // Fase de Ação (Compra X cartas de Evento)
  drawEventCard() {
    if (this.isGameOver) return null;
    
    // Se o deck estiver vazio, recicla automaticamente o cemitério
    if (this.eventDeck.length === 0) {
      if (this.eventGraveyard.length > 0) {
        this.eventDeck = [...this.eventGraveyard];
        this.shuffleArray(this.eventDeck);
        this.eventGraveyard = [];
        this.logMessage("⚠️ O deck inimigo acabou! O cemitério foi reembaralhado automaticamente no Event Deck.");
      } else {
        this.logMessage("🚨 Sem cartas no deck ou cemitério dos chefes!");
        return null;
      }
    }
    
    const card = this.eventDeck.pop();
    this.drawnCards.push(card);
    
    // Se for uma criatura inimiga, entra em campo (battlefield)
    const isMinion = CARD_DATABASE.minions.some(m => m.id === card.id);
    if (isMinion) {
      card.summoningSickness = true; // Aplica o enjoo de invocação (não pode atacar neste turno)
      this.battlefield.push(card);
      this.logMessage(`👾 Criatura Invocada: ${card.name} (${card.pt}) [Enjoo de Invocação]`);
    } else {
      this.logMessage(`🔮 Tática Revelada: ${card.name}`);
      
      // Tratamento especial da carta de Ressurgimento
      if (card.id === 'resurgence') {
        this.resolveResurgence();
      }
    }
    
    return card;
  },
  
  // Avançar Estágio de Chefes (Quando a vida dos chefes atinge 0)
  nextStage() {
    // Adiciona os chefes ativos anteriores ao histórico de derrotados
    this.defeatedBosses = [...this.defeatedBosses, ...this.activeBosses];
    this.activeBosses = [];

    this.activeStage++;
    
    if (this.activeStage > 3) {
      this.isGameOver = true;
      this.isVictory = true;
      this.logMessage("🏆 VITÓRIA SUPREMA DOS HERÓIS! Todos os chefes da Nação do Fogo foram derrotados!");
      return;
    }
    
    // Configurar Chefes e Vidas do Próximo Estágio puxando do topo do deck
    if (this.playerCount === 4) {
      this.bossesLife = 30;
      if (this.activeStage === 2) {
        // Stage 2: Revela os próximos 3 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 3);
      } else if (this.activeStage === 3) {
        // Stage 3: Revela os próximos 5 chefes do topo do deck (os últimos)
        this.activeBosses = this.bossDeck.splice(0, 5);
      }
    } else {
      this.bossesLife = 20;
      if (this.activeStage === 2) {
        // Stage 2: Revela os próximos 2 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 2);
      } else if (this.activeStage === 3) {
        // Stage 3: Revela os próximos 3 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 3);
      }
    }
    
    const bossNames = this.activeBosses.map(b => b.name).join(", ");
    this.logMessage(`🔥 Fase de Chefes Avançada! Estágio ${this.activeStage} iniciado. Novos Chefes Revelados: ${bossNames}!`);
  },
  
  // Avançar Turno do Jogo — descarta o turno anterior e auto-compra as cartas do novo turno
  nextTurn() {
    if (this.isGameOver) return;

    // A contagem de turno não aumenta no início, pois a Fase de Chefes faz parte do turno atual.

    
    // 1. Descarta automaticamente as TÁTICAS do turno anterior para o cemitério
    //    (Lacaios permanecem no campo de batalha — já estão em this.battlefield)
    const minionIds = CARD_DATABASE.minions.map(m => m.id);
    this.drawnCards.forEach(card => {
      if (!minionIds.includes(card.id) && card.id !== 'resurgence') {
        this.eventGraveyard.push(card);
      }
    });
    this.drawnCards = [];

    // Limpa o enjoo de invocação de todos os lacaios que já estavam no campo de batalha
    this.battlefield.forEach(minion => {
      minion.summoningSickness = false;
    });

    this.logMessage(`⌛ Turno ${this.turnCount} — Fase de Ação dos Chefes:`);

    // Efeito passivo do Almirante Zhao:
    // - No início do turno dos chefes, eles perdem 2 de vida.
    // - Os chefes jogam 1 evento adicional por turno.
    const zhaoActive = Array.isArray(this.activeBosses) && this.activeBosses.some(b => b && b.id === 'zhao');
    if (zhaoActive) {
      this.bossesLife = Math.max(0, this.bossesLife - 2);
      this.logMessage("🩸 Almirante Zhao ativo: os chefes perdem 2 pontos de vida no início do turno.");
      if (this.bossesLife === 0) {
        this.advanceBossStage();
        return;
      }
    }

    // 2. Determina quantas cartas comprar neste turno
    //    2 jogadores → 2 cartas | 3-4 jogadores → 3 cartas
    const baseCardsThisTurn = this.playerCount >= 3 ? 3 : 2;
    const cardsThisTurn = baseCardsThisTurn + (zhaoActive ? 1 : 0);

    // 3. Compra e resolve todas as cartas do turno de uma vez
    for (let i = 0; i < cardsThisTurn; i++) {
      const drawn = this.drawEventCard();
      if (!drawn) break; // Deck e cemitério vazios
    }

    // Efeito do Príncipe Zuko e da Mai:
    // Dispara somente quando há ataque válido de lacaio.
    // Lacaios que entraram neste turno (revelados na Fase de Ação atual) não contam como atacantes.
    const activeBosses = Array.isArray(this.activeBosses) ? this.activeBosses : [];
    const soldierBuffTriggers = activeBosses.filter(b => b && (b.id === 'zuko' || b.id === 'mai')).length;
    const newlySummonedIds = new Set(
      (this.drawnCards || [])
        .filter(c => c && c.pt && c.instanceId)
        .map(c => c.instanceId)
    );
    const hasValidAttacker = (this.battlefield || []).some(minion => minion && !newlySummonedIds.has(minion.instanceId));
    if (soldierBuffTriggers > 0 && hasValidAttacker) {
      let buffed = 0;
      (this.battlefield || []).forEach(minion => {
        if (minion && minion.id === 'fire_soldier') {
          minion.markerPower = (minion.markerPower || 0) + soldierBuffTriggers;
          minion.markerToughness = (minion.markerToughness || 0) + soldierBuffTriggers;
          buffed++;
        }
      });
      if (buffed > 0) {
        const triggerText = soldierBuffTriggers === 1 ? "1 gatilho" : `${soldierBuffTriggers} gatilhos`;
        this.logMessage(`🔥 Zuko/Mai (${triggerText}): +${soldierBuffTriggers}/+${soldierBuffTriggers} aplicado em ${buffed} Soldado(s) da Nação do Fogo.`);
      } else {
        this.logMessage("🔥 Zuko/Mai: nenhum Soldado da Nação do Fogo em campo para receber +1/+1.");
      }
    } else if (soldierBuffTriggers > 0 && !hasValidAttacker) {
      this.logMessage("🔥 Zuko/Mai: sem ataque válido de lacaio neste turno (recém-invocados não atacam).");
    }

    // Ao final da ação dos chefes, o turno deles acaba e a contagem avança para o PRÓXIMO turno dos jogadores.
    this.turnCount++;
  },
  
  // Modificar Vidas
  adjustLife(team, amount) {
    if (team === 'heroes') {
      this.heroesLife = Math.max(0, this.heroesLife + amount);
      if (this.heroesLife === 0) {
        this.isGameOver = true;
        this.isVictory = false;
        this.logMessage("💀 GAME OVER! Os heróis foram derrotados pela Nação do Fogo!");
      }
    } else {
      this.bossesLife = Math.max(0, this.bossesLife + amount);
      if (this.bossesLife === 0) {
        this.nextStage();
      }
    }
  },
  
  // Defeat minion on battlefield
  defeatMinion(instanceId) {
    const index = this.battlefield.findIndex(m => m.instanceId === instanceId);
    if (index !== -1) {
      const minion = this.battlefield.splice(index, 1)[0];
      this.eventGraveyard.push(minion);
      this.logMessage(`💀 Lacaio Derrotado: ${minion.name} foi enviado para o Cemitério.`);
    }
  },

  bossDieResult: null,

  rollBossDie() {
    // Dado padrão do jogo é d6 (qualquer dado de 6 faces)
    const roll = Math.floor(Math.random() * 6) + 1;
    this.bossDieResult = roll;
    this.logMessage(`🎲 Rolagem de Dado: Resultado = ${roll}! (Use para determinar alvos de habilidades e ataques)`);
    return roll;
  },
  
  // Tratamento da Tática de Ressurgimento Imperial
  resolveResurgence() {
    // Coleta TODAS as táticas que estão no cemitério (descartes anteriores)
    const cardsToReturn = [...this.eventGraveyard];
    
    // Também inclui as táticas já reveladas no turno atual (exceto lacaios que estão no battlefield)
    const minionIds = CARD_DATABASE.minions.map(m => m.id);
    this.drawnCards.forEach(card => {
      if (!minionIds.includes(card.id)) {
        // É uma tática — volta ao deck (incluindo a própria carta de Ressurgimento)
        cardsToReturn.push(card);
      }
    });
    
    // Mantém as cartas reveladas visíveis neste turno para melhor leitura na UI.
    // A limpeza acontece no início do próximo turno.
    
    // Adiciona todas ao deck e embaralha
    this.eventDeck = [...this.eventDeck, ...cardsToReturn];
    this.shuffleArray(this.eventDeck);
    
    // Limpa o cemitério
    this.eventGraveyard = [];
    
    const total = cardsToReturn.length;
    this.logMessage(`🔄 Ressurgimento Imperial! ${total} cartas do cemitério + descarte ativo foram reembaralhadas de volta no Event Deck! (Deck agora tem ${this.eventDeck.length} cartas)`);
    
    // Força atualização visual imediata dos contadores
    if (typeof updateUI === 'function') updateUI();
  },
  
  // Helpers Auxiliares
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  
  logMessage(msg) {
    const logEl = document.getElementById('game-console-log');
    if (logEl) {
      const p = document.createElement('p');
      p.style.marginBottom = '4px';
      p.style.fontSize = '0.85rem';
      p.style.borderLeft = '2px solid var(--fire-gold)';
      p.style.paddingLeft = '6px';
      p.innerHTML = `<strong>[T${this.turnCount}]</strong> ${msg}`;
      logEl.appendChild(p);
      logEl.scrollTop = logEl.scrollHeight;
    }
    console.log(msg);
  }
};

// ── CONTROLADOR DE INTERAÇÃO COM A MESA E GALERIA (3D Tilt & Modais) ──

// Inicia escutas para efeitos visuais 3D
function initCard3DTilt(wrapper) {
  if (!wrapper) return;
  
  wrapper.addEventListener('mousemove', (e) => {
    const card = wrapper.querySelector('.mtg-card');
    if (!card) return;
    
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcula inclinações baseadas na posição do mouse
    const rotateY = ((x / rect.width) - 0.5) * 30; // Max 15 graus de inclinação
    const rotateX = (0.5 - (y / rect.height)) * 30;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Atualiza overlay de luz/sheen
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    card.style.setProperty('--x', `${percentX}%`);
    card.style.setProperty('--y', `${percentY}%`);
  });
  
  wrapper.addEventListener('mouseleave', () => {
    const card = wrapper.querySelector('.mtg-card');
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// Retorna HTML da Carta Virtual
function renderVirtualCard(card, isOnBattlefield = false, allowEditFromModal = false) {
  const custom = CustomizationStore.get(card.id) || {};
  const artUrl = convertToScryfallArtCrop(custom.artUrl || '');
  const cardName = custom.customName || card.name;
  let cardText = custom.customText || card.rules;
  const cardPT = custom.customPT || card.pt || '';

  // Efeitos temporários vindos de chefes ativos (somente render em campo).
  if (card.grantedFlying) {
    cardText = `Voar.\n${cardText}`;
  }
  if (card.grantedDeathtouch) {
    cardText = `Toque mortífero.\n${cardText}`;
  }
  if (card.grantedFirstStrike) {
    cardText = `Iniciativa.\n${cardText}`;
  }
  
  // Bosses oficiais não exibem ataque/vida (PT).
  const isBoss = (card.type || '').toLowerCase().includes('chefe') || (card.type || '').toLowerCase().includes('boss');
  const isCreature = !isBoss && cardPT !== '';
  
  // Decide se usa artDefault como emoji ou imagem customizada
  let artStyleHTML = '';
  if (artUrl) {
    artStyleHTML = `style="background-image: url('${artUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat;"`;
  }
  
  // Gera circulos de mana para chefes fictícios baseados em elemento
  let manaCostHTML = '';
  if (card.element === 'fire') {
    manaCostHTML = `<div class="mana-circle red">F</div>`;
  } else if (card.element === 'water') {
    manaCostHTML = `<div class="mana-circle blue">W</div>`;
  } else if (card.element === 'earth') {
    manaCostHTML = `<div class="mana-circle">E</div>`;
  } else {
    manaCostHTML = `<div class="mana-circle spirit">S</div>`;
  }
  
  // Emojis grandes se for fallback default
  const fallbackArtEmoji = artUrl ? '' : `<div style="font-size: 4.5rem; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${card.artDefault || '🔮'}</div>`;
  
  // Se for lacaio no campo de batalha, adiciona botão de Derrotar
  let defeatButtonHTML = '';
  if (isOnBattlefield && isCreature) {
    defeatButtonHTML = `<button class="minion-defeat-btn" onclick="event.stopPropagation(); handleDefeatMinion('${card.instanceId}')">💀 Derrotar Lacaio</button>`;
  }

  // Marcadores de lacaio em campo (+1/+0 e +1/+1)
  let counterButtonsHTML = '';
  if (isOnBattlefield && isCreature && card.instanceId) {
    counterButtonsHTML = `
      <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
        <div style="display:flex; gap:6px;">
          <button class="minion-defeat-btn" style="background:rgba(127,29,29,0.9); border-color:#b91c1c; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', -1, 0)">-</button>
          <button class="minion-defeat-btn" style="background:rgba(234,179,8,0.9); border-color:#eab308; font-size:.62rem; padding:3px 6px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 0)">+1/+0</button>
          <button class="minion-defeat-btn" style="background:rgba(5,150,105,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 0)">+</button>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="minion-defeat-btn" style="background:rgba(127,29,29,0.9); border-color:#b91c1c; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', -1, -1)">-</button>
          <button class="minion-defeat-btn" style="background:rgba(16,185,129,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 1)">+1/+1</button>
          <button class="minion-defeat-btn" style="background:rgba(5,150,105,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 1)">+</button>
        </div>
      </div>
    `;
  }

  // P/T final (base + marcadores) para lacaios em campo
  let finalPT = cardPT;
  const bossBonusPower = card.bossBonusPower || 0;
  const bossBonusToughness = card.bossBonusToughness || 0;
  if (isOnBattlefield && isCreature && cardPT.includes('/')) {
    const [baseP, baseT] = cardPT.split('/').map(n => parseInt(n, 10));
    if (!Number.isNaN(baseP) && !Number.isNaN(baseT)) {
      const bonusP = card.markerPower || 0;
      const bonusT = card.markerToughness || 0;
      finalPT = `${baseP + bonusP + bossBonusPower}/${baseT + bonusT + bossBonusToughness}`;
    }
  }

  let bossEffectBadgeHTML = '';
  if (isOnBattlefield && (bossBonusPower !== 0 || bossBonusToughness !== 0)) {
    const fmt = (n) => (n >= 0 ? `+${n}` : `${n}`);
    bossEffectBadgeHTML = `
      <div style="margin: 4px 0 0; padding: 3px 6px; border-radius: 6px; border: 1px solid rgba(56,189,248,.55); background: rgba(14,116,144,.25); color: #7dd3fc; font-size: .63rem; font-weight: 700; text-transform: uppercase; letter-spacing: .3px;">
        ✦ Bônus de Boss: ${fmt(bossBonusPower)}/${fmt(bossBonusToughness)}
      </div>
    `;
  }
  
  let sicknessBadgeHTML = '';
  if (isOnBattlefield && isCreature && card.summoningSickness) {
    sicknessBadgeHTML = `
      <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10;">
        <span style="font-size: 2rem;">💤</span>
        <span style="background: rgba(0,0,0,0.8); color: #ccc; font-size: 0.65rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-top: 4px; border: 1px solid #555;">Enjoo de Invocação</span>
      </div>
    `;
  }

  const wrapperStyle = isOnBattlefield
    ? 'style="height:auto; display:flex; flex-direction:column; align-items:stretch;"'
    : '';

  return `
    <div class="mtg-card-wrapper" ${wrapperStyle} data-card-id="${card.id}" onclick="openCardArtModal('${card.id}', ${allowEditFromModal ? 'true' : 'false'})">
      <div class="mtg-card element-${card.element}">
        <div class="mtg-card-header">
          <span class="mtg-card-name">${cardName}</span>
          <div class="mtg-card-mana">${manaCostHTML}</div>
        </div>
        <div class="mtg-card-art art-${card.element}" ${artStyleHTML}>
          ${fallbackArtEmoji}
          ${sicknessBadgeHTML}
        </div>
        <div class="mtg-card-type-line">
          <span>${card.type}</span>
          <span class="mtg-card-symbol">${card.grantedFirstStrike ? '⚡' : (card.grantedDeathtouch ? '☠️' : (card.grantedFlying ? '🪽' : '👹'))}</span>
        </div>
        <div class="mtg-card-text-box">
          <p>${cardText.replace(/\n/g, '<br>')}</p>
          ${bossEffectBadgeHTML}
          ${card.flavor ? `<p class="mtg-card-flavor">${card.flavor}</p>` : ''}
        </div>
        ${isCreature ? `<div class="mtg-card-pt">${finalPT}</div>` : ''}
      </div>
      ${defeatButtonHTML}
      ${counterButtonsHTML}
    </div>
  `;
}

function findCardById(cardId) {
  let card = CARD_DATABASE.bosses.find(b => b.id === cardId);
  if (!card) card = CARD_DATABASE.minions.find(m => m.id === cardId);
  if (!card) card = CARD_DATABASE.events.find(e => e.id === cardId);
  return card || null;
}

function ensureArtModal() {
  let modal = document.getElementById('card-art-modal');
  if (modal) return modal;

  const style = document.createElement('style');
  style.textContent = `
    #card-art-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.88);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    #card-art-modal .art-modal-content {
      width: auto;
      max-height: 95vh;
      background: transparent;
      border: 0;
      border-radius: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #card-art-modal .art-modal-header {
      display: none;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      color: #fff;
      font-weight: 700;
      font-size: 0.92rem;
    }
    #card-art-modal .art-modal-close {
      background: transparent;
      border: 0;
      color: #ddd;
      font-size: 1.3rem;
      cursor: pointer;
      line-height: 1;
    }
    #card-art-modal .art-modal-image-wrap {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      min-height: 0;
    }
    #card-art-modal .art-modal-card-wrap {
      width: min(92vw, 420px);
      aspect-ratio: 5 / 7;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-wrapper {
      width: 100%;
      height: 100%;
      max-width: none;
      transform: none;
      margin: 0;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card {
      transform: none !important;
    }
    /* Ajustes de proporção no modal para parecer mais com carta real */
    #card-art-modal .art-modal-card-wrap .mtg-card {
      border-width: 8px;
      padding: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-header {
      padding: 5px 9px;
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-art {
      height: 46%;
      min-height: 160px;
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-type-line {
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-text-box {
      font-size: 0.78rem;
      line-height: 1.35;
      padding: 8px 9px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-flavor {
      font-size: 0.74rem;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-wrapper:hover {
      transform: none;
    }
    @media (max-width: 600px) {
      #card-art-modal .art-modal-card-wrap {
        width: min(94vw, 360px);
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-art {
        min-height: 148px;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-text-box {
        font-size: 0.76rem;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-wrapper {
        transform: none;
        margin: 0;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-wrapper:hover {
        transform: none;
      }
    }
    #card-art-modal .art-modal-actions {
      display: none;
      gap: 10px;
      padding: 12px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    #card-art-modal .art-modal-actions button {
      flex: 1;
    }
  `;
  document.head.appendChild(style);

  modal = document.createElement('div');
  modal.id = 'card-art-modal';
  modal.innerHTML = `
    <div class="art-modal-content" onclick="event.stopPropagation()">
      <div class="art-modal-image-wrap">
        <div id="card-art-modal-card" class="art-modal-card-wrap"></div>
      </div>
    </div>
  `;

  modal.addEventListener('click', closeCardArtModal);
  document.body.appendChild(modal);
  return modal;
}

let currentArtModalCardId = null;
let currentArtModalCanEdit = false;

function openCardArtModal(cardId, allowEdit = false) {
  const card = findCardById(cardId);
  if (!card) return;

  const custom = CustomizationStore.get(card.id) || {};

  currentArtModalCardId = cardId;
  currentArtModalCanEdit = !!allowEdit;
  const modal = ensureArtModal();
  const cardWrapEl = document.getElementById('card-art-modal-card');
  if (cardWrapEl) {
    cardWrapEl.innerHTML = renderVirtualCard(card, false, false);
    const wrapper = cardWrapEl.querySelector('.mtg-card-wrapper');
    if (wrapper) {
      wrapper.removeAttribute('onclick');
      wrapper.style.cursor = 'default';
    }
  }
  modal.style.display = 'flex';
}

function closeCardArtModal() {
  const modal = document.getElementById('card-art-modal');
  if (modal) modal.style.display = 'none';
}

function openCardCustomizerFromArtModal() {
  if (!currentArtModalCardId || !currentArtModalCanEdit) return;
  closeCardArtModal();
  openCardCustomizer(currentArtModalCardId);
}

// ── UI CONTROLLER & VIEW BINDINGS ──

function updateUI() {
  // Update numbers
  document.getElementById('heroes-life-val').textContent = GameEngine.heroesLife;
  document.getElementById('bosses-life-val').textContent = GameEngine.bossesLife;
  document.getElementById('current-stage-val').textContent = GameEngine.activeStage;
  document.getElementById('turn-count-val').textContent = GameEngine.turnCount;
  
  // Fix: Update BOTH deck count counters
  document.getElementById('deck-count-val').textContent = GameEngine.eventDeck.length;
  const deckCountMini = document.getElementById('deck-count-val-mini');
  if (deckCountMini) deckCountMini.textContent = GameEngine.eventDeck.length;
  
  // Fix: Update BOTH graveyard count counters
  document.getElementById('graveyard-count-val').textContent = GameEngine.eventGraveyard.length;
  const graveyardCountMini = document.getElementById('graveyard-count-val-mini');
  if (graveyardCountMini) graveyardCountMini.textContent = GameEngine.eventGraveyard.length;

  // Active bosses
  const bossesContainer = document.getElementById('active-bosses-container');
  if (bossesContainer) {
    if (GameEngine.activeBosses.length === 0) {
      bossesContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: var(--space-sm) 0;">Nenhum chefe ativo.</div>`;
    } else {
      bossesContainer.innerHTML = GameEngine.activeBosses.map(b => renderVirtualCard(b, false, false)).join('');
    }
  }

  // Battlefield (Lacaios com botão Derrotar ativo!)
  const battlefieldContainer = document.getElementById('battlefield-container');
  if (battlefieldContainer) {
    if (GameEngine.battlefield.length === 0) {
      battlefieldContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: var(--space-sm) 0;">Nenhum lacaio inimigo em campo.</div>`;
    } else {
      const combustionActive = Array.isArray(GameEngine.activeBosses)
        && GameEngine.activeBosses.some(b => b && b.id === 'combustion_man');
      const longFengActive = Array.isArray(GameEngine.activeBosses)
        && GameEngine.activeBosses.some(b => b && b.id === 'long_feng');
      const jetActive = Array.isArray(GameEngine.activeBosses)
        && GameEngine.activeBosses.some(b => b && b.id === 'jet_brainwashed');
      const tyLeeActive = Array.isArray(GameEngine.activeBosses)
        && GameEngine.activeBosses.some(b => b && b.id === 'ty_lee');
      const activeBossCount = Array.isArray(GameEngine.activeBosses) ? GameEngine.activeBosses.length : 0;
      const battlefieldView = GameEngine.battlefield.map(m => {
        let viewCard = m;
        if (combustionActive && m && m.id === 'fire_soldier') {
          viewCard = { ...viewCard, grantedFlying: true };
        }
        if (longFengActive && m) {
          viewCard = { ...viewCard, grantedDeathtouch: true };
        }
        if (jetActive && m) {
          viewCard = { ...viewCard, grantedFirstStrike: true };
        }
        if (tyLeeActive && m) {
          viewCard = { ...viewCard, bossBonusPower: activeBossCount, bossBonusToughness: 0 };
        }
        return viewCard;
      });
      battlefieldContainer.innerHTML = battlefieldView.map(m => renderVirtualCard(m, true, false)).join('');
    }
  }

  // Drawn cards this turn
  const drawnContainer = document.getElementById('drawn-cards-container');
  const drawnTitle = document.getElementById('drawn-cards-title');
  if (drawnContainer) {
    if (GameEngine.drawnCards.length === 0) {
      if (drawnTitle) drawnTitle.textContent = "Ações Reveladas neste Turno:";
      drawnContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: 20px 0;">Nenhuma carta revelada na Ação deste turno.</div>`;
    } else {
      if (drawnTitle) drawnTitle.textContent = "Ações Reveladas no Turno " + (GameEngine.turnCount - 1) + ":";
      drawnContainer.innerHTML = GameEngine.drawnCards.map(c => renderVirtualCard(c, false, false)).join('');
    }
  }

  // Visual Graveyard Rendering
  const graveyardContainer = document.getElementById('graveyard-container');
  if (graveyardContainer) {
    if (GameEngine.eventGraveyard.length === 0) {
      graveyardContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.85rem; padding: var(--space-sm) 0; grid-column: 1 / -1;">Nenhuma carta descartada no cemitério.</div>`;
    } else {
      graveyardContainer.innerHTML = GameEngine.eventGraveyard.map(c => renderVirtualCard(c, false, false)).join('');
    }
  }

  // Atualiza contadores automáticos do baralho de chefes fechado
  const bossDeckCount = document.getElementById('boss-deck-count-val');
  if (bossDeckCount) bossDeckCount.textContent = GameEngine.bossDeck.length;
  
  const bossDeckCountMini = document.getElementById('boss-deck-count-val-mini');
  if (bossDeckCountMini) bossDeckCountMini.textContent = GameEngine.bossDeck.length;

  // Atualiza histórico de chefes derrotados
  const bossesDefeatedList = document.getElementById('bosses-defeated-list');
  if (bossesDefeatedList) {
    if (GameEngine.defeatedBosses.length === 0) {
      bossesDefeatedList.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">Nenhum chefe derrotado ainda.</span>`;
    } else {
      bossesDefeatedList.innerHTML = GameEngine.defeatedBosses.map((boss, idx) => {
        return `<div style="padding: 2px 0; border-bottom: 1px solid rgba(255,255,255,0.03); color: var(--text-secondary);">☠️ ${idx + 1}. ${boss.name}</div>`;
      }).join('');
    }
  }

  // Atualiza label de cartas por turno na interface
  const cardsPerTurnLabel = document.getElementById('cards-per-turn-label');
  if (cardsPerTurnLabel) {
    cardsPerTurnLabel.textContent = GameEngine.playerCount >= 3 ? '3' : '2';
  }

  // Re-init 3D tilt behaviors
  document.querySelectorAll('.mtg-card-wrapper').forEach(wrapper => {
    initCard3DTilt(wrapper);
  });

  // Game over state checks
  const turnBtn = document.getElementById('btn-next-turn');
  if (GameEngine.isGameOver) {
    if (turnBtn) turnBtn.disabled = true;
    
    // Append a notice to the log console (only once)
    const logEl = document.getElementById('game-console-log');
    if (logEl && !logEl.querySelector('.game-over-notice')) {
      const div = document.createElement('div');
      div.className = 'game-over-notice';
      div.style.marginTop = '12px';
      div.style.padding = '10px';
      div.style.borderRadius = '6px';
      div.style.fontWeight = 'bold';
      div.style.textAlign = 'center';
      if (GameEngine.isVictory) {
        div.style.background = 'rgba(16, 185, 129, 0.15)';
        div.style.border = '1px solid #10b981';
        div.style.color = '#10b981';
        div.innerHTML = '🏆 VITÓRIA SUPREMA DOS HERÓIS! A invasão foi totalmente repelida!';
      } else {
        div.style.background = 'rgba(225, 29, 72, 0.15)';
        div.style.border = '1px solid var(--fire-primary)';
        div.style.color = 'var(--fire-primary)';
        div.innerHTML = '💀 DERROTA DOS HERÓIS! O mundo sucumbirá à Nação do Fogo.';
      }
      logEl.appendChild(div);
      logEl.scrollTop = logEl.scrollHeight;
    }
  } else {
    if (turnBtn) turnBtn.disabled = false;
  }
}

// Draw event handler (reveals card and updates UI)
function handleActionDraw() {
  if (GameEngine.isGameOver) return;
  GameEngine.drawEventCard();
  updateUI();
}

// Defeat minion event handler
function handleDefeatMinion(instanceId) {
  GameEngine.defeatMinion(instanceId);
  updateUI();
}

function handleAddMinionCounter(instanceId, powerDelta, toughnessDelta) {
  if (!instanceId) return;
  const minion = GameEngine.battlefield.find(m => m.instanceId === instanceId);
  if (!minion) return;

  minion.markerPower = (minion.markerPower || 0) + (powerDelta || 0);
  minion.markerToughness = (minion.markerToughness || 0) + (toughnessDelta || 0);

  const p = powerDelta || 0;
  const t = toughnessDelta || 0;
  const fmt = (n) => (n >= 0 ? `+${n}` : `${n}`);
  const markerText = `${fmt(p)}/${fmt(t)}`;
  if (typeof GameEngine.logMessage === 'function') {
    GameEngine.logMessage(`🧩 Marcador ${markerText} aplicado em ${minion.name}.`);
  }
  updateUI();
}

// Roll d6 Dice event handler
function handleRollDie() {
  const dieEl = document.getElementById('dice-d10');
  if (!dieEl) return;
  
  // Spin the die
  dieEl.classList.remove('rolling');
  void dieEl.offsetWidth; // Trigger reflow to restart animation
  dieEl.classList.add('rolling');
  
  const result = GameEngine.rollBossDie();
  
  setTimeout(() => {
    dieEl.textContent = result;
    const msgEl = document.getElementById('dice-result-msg');
    if (msgEl) {
      msgEl.innerHTML = `Resultado: <strong>${result}</strong> — use para resolver habilidades ou sortear alvos!`;
    }
    updateUI();
  }, 600);
}

// Next turn handler
function handleNextTurn() {
  if (GameEngine.isGameOver) return;
  GameEngine.nextTurn();
  updateUI();
}

// Life adjusters
function adjustHeroesLife(amount) {
  GameEngine.adjustLife('heroes', amount);
  updateUI();
}

// Custom manual life adjusters for bosses
function adjustBossesLife(amount) {
  GameEngine.adjustLife('bosses', amount);
  updateUI();
}

// Reset entire game
function handleResetGame() {
  GameEngine.setupGame(GameEngine.playerCount);
  const consoleLog = document.getElementById('game-console-log');
  if (consoleLog) consoleLog.innerHTML = '';
  GameEngine.logMessage(`🎮 Partida reiniciada para ${GameEngine.playerCount} jogadores.`);
  updateUI();
}

// Change player count and restart
function handlePlayerChange(players) {
  // Update active states on player count buttons
  document.querySelectorAll('.btn-player-select button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`player-${players}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  GameEngine.playerCount = players;
  handleResetGame();
}

// ── CUSTOMIZAÇÃO DE CARD ART ──

function openCardCustomizer(cardId) {
  // Find card info from database
  let card = findCardById(cardId);
  if (!card) return;

  // Set card preview in modal
  const previewContainer = document.getElementById('modal-card-preview');
  if (previewContainer) {
    previewContainer.innerHTML = renderVirtualCard(card);
    const wrapper = previewContainer.querySelector('.mtg-card-wrapper');
    if (wrapper) {
      // Remove onclick so it doesn't trigger openCardCustomizer recursively
      wrapper.removeAttribute('onclick');
      initCard3DTilt(wrapper);
    }
  }

  // Pre-fill form fields
  document.getElementById('modal-card-id').value = cardId;
  const custom = CustomizationStore.get(cardId) || {};
  
  document.getElementById('customizer-image-url').value = convertToScryfallArtCrop(custom.artUrl || '');
  document.getElementById('customizer-name').value = custom.customName || card.name;
  document.getElementById('customizer-text').value = custom.customText || card.rules;
  
  const ptGroup = document.getElementById('customizer-pt-group');
  const ptInput = document.getElementById('customizer-pt');
  const isBoss = (card.type || '').toLowerCase().includes('chefe') || (card.type || '').toLowerCase().includes('boss');
  if (!isBoss && (card.pt || custom.customPT)) {
    ptGroup.style.display = 'flex';
    ptInput.value = custom.customPT || card.pt || '';
  } else {
    ptGroup.style.display = 'none';
    ptInput.value = '';
  }

  // Open modal
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeCardCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Convert uploaded file to base64 and set URL field
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById('customizer-image-url').value = event.target.result;
    // Live update preview
    updateModalPreview();
  };
  reader.readAsDataURL(file);
}

// Live update card preview inside modal
function updateModalPreview() {
  const cardId = document.getElementById('modal-card-id').value;
  let card = findCardById(cardId);
  if (!card) return;

  // Temporary mock data from form values
  const rawPreviewUrl = document.getElementById('customizer-image-url').value;
  const mockCustom = {
    artUrl: convertToScryfallArtCrop(rawPreviewUrl),
    customName: document.getElementById('customizer-name').value,
    customText: document.getElementById('customizer-text').value,
    customPT: document.getElementById('customizer-pt').value
  };

  // Temporarily store in customization memory or render directly
  const previewContainer = document.getElementById('modal-card-preview');
  if (previewContainer) {
    // Generate card with temporary form custom parameters
    const tempCard = { ...card };
    // We override renderVirtualCard behavior for preview
    const isBoss = (tempCard.type || '').toLowerCase().includes('chefe') || (tempCard.type || '').toLowerCase().includes('boss');
    const previewPT = mockCustom.customPT || tempCard.pt || '';
    const isCreature = !isBoss && previewPT !== '';
    let artStyleHTML = '';
    if (mockCustom.artUrl) {
      artStyleHTML = `style="background-image: url('${mockCustom.artUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat;"`;
    }
    
    let manaCostHTML = '';
    if (tempCard.element === 'fire') {
      manaCostHTML = `<div class="mana-circle red">F</div>`;
    } else if (tempCard.element === 'water') {
      manaCostHTML = `<div class="mana-circle blue">W</div>`;
    } else if (tempCard.element === 'earth') {
      manaCostHTML = `<div class="mana-circle">E</div>`;
    } else {
      manaCostHTML = `<div class="mana-circle spirit">S</div>`;
    }
    
    const fallbackArtEmoji = mockCustom.artUrl ? '' : `<div style="font-size: 4.5rem; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${tempCard.artDefault || '🔮'}</div>`;
    
    previewContainer.innerHTML = `
      <div class="mtg-card-wrapper" data-card-id="${tempCard.id}">
        <div class="mtg-card element-${tempCard.element}">
          <div class="mtg-card-header">
            <span class="mtg-card-name">${mockCustom.customName}</span>
            <div class="mtg-card-mana">${manaCostHTML}</div>
          </div>
          <div class="mtg-card-art art-${tempCard.element}" ${artStyleHTML}>
            ${fallbackArtEmoji}
          </div>
          <div class="mtg-card-type-line">
            <span>${tempCard.type}</span>
            <span class="mtg-card-symbol">👹</span>
          </div>
          <div class="mtg-card-text-box">
            <p>${mockCustom.customText.replace(/\n/g, '<br>')}</p>
            ${tempCard.flavor ? `<p class="mtg-card-flavor">${tempCard.flavor}</p>` : ''}
          </div>
          ${isCreature ? `<div class="mtg-card-pt">${previewPT}</div>` : ''}
        </div>
      </div>
    `;
    const wrapper = previewContainer.querySelector('.mtg-card-wrapper');
    if (wrapper) initCard3DTilt(wrapper);
  }
}

// Converte automaticamente URLs do Scryfall para o formato art_crop (só a ilustração)
function convertToScryfallArtCrop(url) {
  if (!url) return url;
  const trimmedUrl = url.trim();
  
  // Detecta se é uma URL do Scryfall
  if (trimmedUrl.includes('cards.scryfall.io') || trimmedUrl.includes('api.scryfall.com/cards')) {
    // Substitui qualquer versão de imagem por art_crop
    return trimmedUrl
      .replace('/large/', '/art_crop/')
      .replace('/normal/', '/art_crop/')
      .replace('/small/', '/art_crop/')
      .replace('/png/', '/art_crop/')
      .replace('/border_crop/', '/art_crop/')
      // Troca extensão .png por .jpg se necessário (art_crop é sempre .jpg)
      .replace(/art_crop(.*?)\.png$/, 'art_crop$1.jpg');
  }
  
  return trimmedUrl;
}

// Converte URL do Scryfall para a carta completa (frame inteiro) no tamanho large.
function convertToScryfallLarge(url) {
  if (!url) return url;
  const trimmedUrl = url.trim();

  if (trimmedUrl.includes('cards.scryfall.io') || trimmedUrl.includes('api.scryfall.com/cards')) {
    return trimmedUrl
      .replace('/art_crop/', '/large/')
      .replace('/normal/', '/large/')
      .replace('/small/', '/large/')
      .replace('/png/', '/large/')
      .replace('/border_crop/', '/large/')
      .replace(/large(.*?)\.png$/, 'large$1.jpg');
  }

  return trimmedUrl;
}

// Save customization and refresh
function saveCardCustomization(e) {
  if (e) e.preventDefault();

  const cardId = document.getElementById('modal-card-id').value;
  const rawUrl = document.getElementById('customizer-image-url').value;
  
  // Auto-convert Scryfall URLs to art_crop
  const artUrl = convertToScryfallArtCrop(rawUrl);
  
  // Update the input field to reflect the converted URL
  if (artUrl !== rawUrl) {
    document.getElementById('customizer-image-url').value = artUrl;
    showToast("URL do Scryfall convertida automaticamente para ilustração pura! 🎨");
  }
  
  let baseCard = findCardById(cardId);
  const isBoss = baseCard && ((baseCard.type || '').toLowerCase().includes('chefe') || (baseCard.type || '').toLowerCase().includes('boss'));

  const data = {
    artUrl: artUrl,
    customName: document.getElementById('customizer-name').value,
    customText: document.getElementById('customizer-text').value,
    customPT: isBoss ? '' : document.getElementById('customizer-pt').value
  };

  CustomizationStore.save(cardId, data);
  closeCardCustomizer();
  
  // Show toast notice
  if (artUrl === rawUrl) showToast("Carta personalizada com sucesso!");

  // Refresh battlefield, drawn cards, active bosses, and gallery
  updateUI();
  renderCardGallery(currentFilter);
}

// Reset customization to original
function resetCardCustomization() {
  const cardId = document.getElementById('modal-card-id').value;
  CustomizationStore.reset(cardId);
  closeCardCustomizer();
  showToast("Carta restaurada para o padrão.");
  updateUI();
  renderCardGallery(currentFilter);
}

// Show floating notification toast
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.innerHTML = `<span>✨</span> ${msg}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

async function exportCustomizations() {
  const data = CustomizationStore.getAll();
  const payload = {
    exportedAt: new Date().toISOString(),
    version: 1,
    key: CustomizationStore.key,
    customizations: data
  };
  const jsonText = JSON.stringify(payload, null, 2);
  const date = new Date().toISOString().slice(0, 10);
  const fileName = `avatar-teamup-customizations-${date}.json`;

  // Caminho principal: seletor nativo de arquivo (mais confiável no Chrome/Edge).
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [
          {
            description: 'JSON',
            accept: { 'application/json': ['.json'] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(jsonText);
      await writable.close();
      showToast('Backup exportado com sucesso.');
      return;
    } catch (err) {
      // Usuário cancelou ou navegador bloqueou: cai para fallback abaixo.
      if (err && err.name === 'AbortError') return;
      console.warn('showSaveFilePicker falhou, usando fallback de download.', err);
    }
  }

  // Fallback: download via Blob URL.
  const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Backup exportado. Verifique a pasta Downloads.');
}

function triggerImportCustomizations() {
  const fileInput = document.getElementById('customization-import-file');
  if (fileInput) fileInput.click();
}

function importCustomizations(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(loadEvent) {
    try {
      const parsed = JSON.parse(loadEvent.target.result);
      const incoming = parsed.customizations && typeof parsed.customizations === 'object'
        ? parsed.customizations
        : (typeof parsed === 'object' ? parsed : null);

      if (!incoming) throw new Error('JSON inválido');

      localStorage.setItem(CustomizationStore.key, JSON.stringify(incoming));
      updateUI();
      renderCardGallery(currentFilter);
      showToast('Backup importado com sucesso.');
    } catch (err) {
      console.error(err);
      showToast('Falha ao importar JSON. Verifique o arquivo.');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ── GALERIA DE CARTAS RENDERING ──

let currentFilter = 'all';

function renderCardGallery(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('gallery-cards-grid');
  if (!grid) return;

  // Active filters buttons
  document.querySelectorAll('.gallery-filters button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeFilterBtn = document.getElementById(`filter-${filter}`);
  if (activeFilterBtn) activeFilterBtn.classList.add('active');

  let cards = [];
  if (filter === 'all' || filter === 'bosses') {
    cards = cards.concat(CARD_DATABASE.bosses);
  }
  if (filter === 'all' || filter === 'minions') {
    cards = cards.concat(CARD_DATABASE.minions);
  }
  if (filter === 'all' || filter === 'tactics') {
    cards = cards.concat(CARD_DATABASE.events);
  }

  grid.innerHTML = cards.map(c => renderVirtualCard(c, false, true)).join('');

  // Attach 3D tilt behaviors
  grid.querySelectorAll('.mtg-card-wrapper').forEach(wrapper => {
    initCard3DTilt(wrapper);
  });
}

// ── DOM INITIALIZATION ──

document.addEventListener('DOMContentLoaded', () => {
  migrateLegacyCustomTexts();

  // 1. Initial setup of Game state machine (2 players by default)
  GameEngine.setupGame(2);
  updateUI();

  // 2. Setup Card Gallery
  renderCardGallery('all');

  // 3. Form input live change listeners to update preview instantly
  document.getElementById('customizer-name').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-text').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-pt').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-image-url').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-image-file').addEventListener('change', handleImageUpload);
  
  // Close modal when clicking outside of container
  const modal = document.getElementById('customizer-modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCardCustomizer();
    }
  });
});

// ================================================================
// HOTFIX: Explosão de Combustão (2x no próximo evento)
// ================================================================
(() => {
  if (typeof GameEngine === "undefined") return;

  // Estado extra do efeito "fica ao lado" e "duplica próximo evento"
  GameEngine.pendingDoubleNextEvent = false;
  GameEngine.lastDoubledEventId = null;

  const _setupGame = GameEngine.setupGame.bind(GameEngine);
  GameEngine.setupGame = function(players) {
    const out = _setupGame(players);
    this.pendingDoubleNextEvent = false;
    this.lastDoubledEventId = null;
    return out;
  };

  // Tenta descobrir o resolvedor de evento/tática já existente no motor.
  function getEventResolver(engine) {
    const candidates = [
      "resolveEventCard",
      "resolveEvent",
      "resolveTactic",
      "resolveTacticCard",
      "applyEventEffect",
      "resolveCardEffect",
      "resolveEventEffect"
    ];
    for (const fn of candidates) {
      if (typeof engine[fn] === "function") return engine[fn].bind(engine);
    }
    return null;
  }

  const eventResolver = getEventResolver(GameEngine);
  const _drawEventCard = GameEngine.drawEventCard && GameEngine.drawEventCard.bind(GameEngine);
  if (!_drawEventCard) return;

  // Aplica efeitos de eventos que já estão automatizados no motor.
  // Retorna true quando aplicou algum efeito automatizado.
  function applyAutomatedEventEffects(engine, card, contextLabel = "") {
    if (!engine || !card) return false;

    // Decreto Imperial de Ozai:
    // Se houver lacaios no descarte/cemitério, retorna aleatoriamente até 2 ao campo de batalha.
    if (card.id === "ozai_decree") {
      const graveyard = Array.isArray(engine.eventGraveyard) ? engine.eventGraveyard : [];
      const minionPool = graveyard.filter(c => c && c.pt); // cartas de lacaio (têm P/T)

      if (minionPool.length > 0) {
        const shuffled = [...minionPool];
        if (typeof engine.shuffleArray === "function") engine.shuffleArray(shuffled);
        const selected = shuffled.slice(0, Math.min(2, shuffled.length));
        const selectedIds = new Set(selected.map(c => `${c.id}|${c.instanceId || ''}`));

        // Remove os lacaios selecionados do descarte
        engine.eventGraveyard = graveyard.filter(c => !selectedIds.has(`${c.id}|${c.instanceId || ''}`));

        // Retorna ao campo de batalha sob controle dos chefes
        selected.forEach(minion => {
          const revived = {
            ...minion,
            instanceId: (typeof crypto !== "undefined" && crypto.randomUUID) ? crypto.randomUUID() : `${minion.id}-${Date.now()}-${Math.random()}`,
            summoningSick: true
          };
          engine.battlefield.push(revived);
        });

        if (typeof engine.logMessage === "function") {
          const names = selected.map(c => c.name).join(", ");
          engine.logMessage(`♻️ Decreto Imperial de Ozai${contextLabel}: ${selected.length} lacaio(s) retornaram do descarte ao campo (${names}).`);
        }
      } else if (typeof engine.logMessage === "function") {
        engine.logMessage(`♻️ Decreto Imperial de Ozai${contextLabel}: nenhum lacaio no descarte para retornar.`);
      }
      return true;
    }

    // Infiltração de Azula:
    // Heróis perdem 3 de vida e chefes ganham 3 de vida.
    if (card.id === "azula_infiltration") {
      engine.heroesLife = Math.max(0, (engine.heroesLife || 0) - 3);
      engine.bossesLife = (engine.bossesLife || 0) + 3;
      if (typeof engine.logMessage === "function") {
        engine.logMessage(`🕵️ Infiltração de Azula${contextLabel}: heróis perdem 3 de vida e chefes ganham 3 de vida.`);
      }
      return true;
    }

    return false;
  }

  GameEngine.drawEventCard = function() {
    const card = _drawEventCard();
    if (!card) return card;

    // 1) Se comprou Explosão de Combustão: arma duplicação do próximo evento.
    if (card.id === "combustion_blast") {
      this.pendingDoubleNextEvent = true;
      this.logMessage("💥 Explosão de Combustão armada: o próximo evento será aplicado 2x.");
      return card;
    }
    // Aplica efeito automatizado normal do evento (quando existir).
    applyAutomatedEventEffects(this, card);

    // 2) Se há duplicação pendente, aplica o evento atual mais 1 vez.
    if (this.pendingDoubleNextEvent) {
      this.pendingDoubleNextEvent = false;
      this.lastDoubledEventId = card.id;
      card.doubleApplied = true; // visual "2x" no evento afetado
      const duplicated = applyAutomatedEventEffects(this, card, " (2x)");
      if (duplicated && typeof this.logMessage === "function") {
        this.logMessage(`🔴 2x ativo: "${card.name}" teve seu efeito automatizado aplicado novamente.`);
      } else if (!duplicated && eventResolver) {
        try {
          eventResolver(card);
          this.logMessage(`🔴 2x ativo: "${card.name}" foi aplicado uma vez extra.`);
        } catch (err) {
          console.error("Erro ao aplicar duplicação do evento:", err);
          this.logMessage("⚠️ Não foi possível aplicar a duplicação automática deste evento.");
        }
      }
    }

    return card;
  };

  // Highlight 2x em vermelho nas cartas relevantes
  const _renderVirtualCard = (typeof renderVirtualCard === "function") ? renderVirtualCard : null;
  if (typeof _renderVirtualCard === "function") {
    renderVirtualCard = function(card, isOnBattlefield = false, allowEditFromModal = false) {
      let html = _renderVirtualCard(card, isOnBattlefield, allowEditFromModal);
      if (!card) return html;

      const shouldShow2x = !!card.doubleApplied;
      if (!shouldShow2x) return html;

      const badge = `<div style="position:absolute;top:8px;left:8px;background:linear-gradient(135deg,#ff3b30 0%,#b00020 100%);color:#fff;font-weight:900;font-size:.78rem;letter-spacing:.6px;padding:5px 9px;border-radius:999px;border:2px solid rgba(255,255,255,.7);box-shadow:0 0 0 3px rgba(127,29,29,.85),0 0 18px rgba(255,59,48,.85),0 10px 22px rgba(120,0,20,.65);z-index:30;text-transform:uppercase;">2x</div>`;
      html = html.replace(
        /<div class="mtg-card([^"]*)">/,
        `<div class="mtg-card$1" style="box-shadow:0 0 0 4px rgba(255,59,48,.92),0 0 0 8px rgba(120,0,20,.58),0 0 20px rgba(255,59,48,.65),0 14px 34px rgba(70,0,15,.65);">${badge}`
      );
      return html;
    };
  }
})();

// ================================================================
// HOTFIX: Efeito passivo do Ozai
// "Sempre que uma criatura que os chefes controlam morrer, os heróis perdem 1 de vida."
// ================================================================
(() => {
  if (typeof GameEngine === "undefined" || typeof GameEngine.defeatMinion !== "function") return;
  if (GameEngine.__ozaiDefeatHookApplied) return;
  GameEngine.__ozaiDefeatHookApplied = true;

  const _defeatMinion = GameEngine.defeatMinion.bind(GameEngine);
  GameEngine.defeatMinion = function(instanceId) {
    const beforeCount = Array.isArray(this.battlefield) ? this.battlefield.length : 0;
    const out = _defeatMinion(instanceId);
    const afterCount = Array.isArray(this.battlefield) ? this.battlefield.length : 0;
    const minionActuallyDefeated = afterCount < beforeCount;

    if (!minionActuallyDefeated) return out;

    const ozaiActive = Array.isArray(this.activeBosses) && this.activeBosses.some(b => b && b.id === "ozai");
    if (!ozaiActive) return out;

    this.heroesLife = Math.max(0, (this.heroesLife || 0) - 1);
    if (typeof this.logMessage === "function") {
      this.logMessage("👑 Ozai ativo: um lacaio morreu, heróis perdem 1 ponto de vida.");
    }

    return out;
  };
})();

// ================================================================
// HOTFIX: Ordem de resolução com Ressurgimento Imperial
// Se um evento/tática foi resolvido antes do Ressurgimento no mesmo turno,
// ele também deve voltar ao Event Deck (não ficar no descarte).
// ================================================================
(() => {
  if (typeof GameEngine === "undefined" || typeof GameEngine.nextTurn !== "function") return;
  if (GameEngine.__resurgenceOrderFixApplied) return;
  GameEngine.__resurgenceOrderFixApplied = true;

  const _nextTurn = GameEngine.nextTurn.bind(GameEngine);
  GameEngine.nextTurn = function() {
    _nextTurn();

    if (!Array.isArray(this.drawnCards) || this.drawnCards.length === 0) return;

    const resurgenceIndex = this.drawnCards.findIndex(c => c && c.id === "resurgence");
    if (resurgenceIndex < 0) return;

    // Táticas reveladas antes do Ressurgimento neste turno
    const priorTactics = this.drawnCards
      .slice(0, resurgenceIndex)
      .filter(c => c && !c.pt); // tática/evento (lacaios têm pt)

    if (priorTactics.length === 0) return;

    const idsToPull = new Set(priorTactics.map(c => c.id));
    const toReturn = [];
    this.eventGraveyard = (this.eventGraveyard || []).filter(card => {
      if (card && idsToPull.has(card.id)) {
        toReturn.push(card);
        return false;
      }
      return true;
    });

    if (toReturn.length > 0) {
      this.eventDeck = this.eventDeck || [];
      this.eventDeck.push(...toReturn);
      if (typeof this.shuffleArray === "function") this.shuffleArray(this.eventDeck);
      if (typeof this.logMessage === "function") {
        this.logMessage(`🔁 Ordem aplicada: ${toReturn.length} evento(s) anterior(es) ao Ressurgimento voltaram ao Event Deck.`);
      }
    }
  };
})();

// ================================================================
// HOTFIX: Efeito de entrada da Hama
// "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo."
// ================================================================
(() => {
  if (typeof GameEngine === "undefined") return;
  if (GameEngine.__hamaEntryHookApplied) return;
  GameEngine.__hamaEntryHookApplied = true;

  function applyHamaEntryEffect(engine) {
    if (!engine || !Array.isArray(engine.activeBosses) || engine.activeBosses.length === 0) return;

    engine.activeBosses.forEach((boss) => {
      if (!boss || boss.id !== "hama") return;
      if (boss.__hamaEntryApplied) return;

      const bossesInPlay = engine.activeBosses.length;
      const lifeGain = 5 * bossesInPlay;
      engine.bossesLife += lifeGain;
      boss.__hamaEntryApplied = true;

      if (typeof engine.logMessage === "function") {
        engine.logMessage(`🌕 Hama entrou: chefes ganham ${lifeGain} de vida (${bossesInPlay} chefe(s) em jogo).`);
      }
    });
  }

  if (typeof GameEngine.setupGame === "function") {
    const _setupGame = GameEngine.setupGame.bind(GameEngine);
    GameEngine.setupGame = function(players = 2) {
      const out = _setupGame(players);
      applyHamaEntryEffect(this);
      return out;
    };
  }

  if (typeof GameEngine.advanceBossStage === "function") {
    const _advanceBossStage = GameEngine.advanceBossStage.bind(GameEngine);
    GameEngine.advanceBossStage = function() {
      const out = _advanceBossStage();
      applyHamaEntryEffect(this);
      return out;
    };
  }
})();
