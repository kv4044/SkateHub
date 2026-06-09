const skatistas = [
    {
        nome: "Tony Hawk",
        pais: "Estados Unidos",
        modalidade: "Vert",
        bio: "A maior lenda do skate vertical e o primeiro a completar a mítica manobra 900º. Revolucionou a perceção global do skate.",
        foto: "../img/skatistas/Tony Hawk.jpeg",
        conquistas: ["Primeiro 900 da história", "10x Campeão X Games Vert", "Fundador da Skatepark Project"],
        destaque: false
    },
    {
        nome: "Nyjah Huston",
        pais: "Estados Unidos",
        modalidade: "Street",
        bio: "Um dos maiores competidores de Street de todos os tempos, vencedor de múltiplas medalhas de ouro nos X Games e campeonatos mundiais da SLS.",
        foto: "../img/skatistas/nyjah.jpeg",
        conquistas: ["6x Campeão Mundial SLS", "12x Medalha de Ouro X Games", "Olímpico Tóquio 2020"],
        destaque: true
    },
    {
        nome: "Rayssa Leal",
        pais: "Brasil",
        modalidade: "Street",
        bio: "Conhecida como 'Fadinha', tornou-se a atleta olímpica brasileira mais jovem a conquistar uma medalha, brilhando com o seu carisma e técnica incomparáveis.",
        foto: "../img/skatistas/rayssa.jpeg",
        conquistas: ["Medalha de Prata Tóquio 2020", "Medalha de Bronze Paris 2024", "Campeã do Super Crown SLS 2022/2023"],
        destaque: true
    },
    {
        nome: "Gustavo Ribeiro",
        pais: "Portugal",
        modalidade: "Street",
        bio: "O maior nome do skate português da atualidade, competindo ao mais alto nível na SLS e representando Portugal nos Jogos Olímpicos.",
        foto: "../img/skatistas/Gustavo.jpeg",
        conquistas: ["Vencedor do Super Crown SLS 2022 (Super Crown Finalist)", "Olímpico Tóquio 2020 e Paris 2024"],
        destaque: false
    },
    {
        nome: "Chloe Covell",
        pais: "Austrália",
        modalidade: "Street",
        bio: "Estrela em ascensão fulgurante no skate feminino de rua, combinando manobras técnicas com uma atitude intrépida em gaps.",
        foto: "../img/skatistas/Chloe.jpeg",
        conquistas: ["Medalha de Prata X Games Chiba 2023", "Pódio SLS aos 13 anos"],
        destaque: false
    },
    {
        nome: "Pedro Barros",
        pais: "Brasil",
        modalidade: "Park / Bowl",
        bio: "Skater explosivo e carismático, mestre em transições de betão rápido. Conquistou prata nos Jogos Olímpicos.",
        foto: "../img/skatistas/Pedro.jpeg",
        conquistas: ["Medalha de Prata Tóquio 2020 Park", "6x Medalha de Ouro X Games Park"],
        destaque: false
    },
    {
        nome: "Sky Brown",
        pais: "Reino Unido",
        modalidade: "Park",
        bio: "Prodígio anglo-nipónica que conquistou o mundo ao vencer a medalha de bronze olímpica aos 13 anos de idade na categoria de Park.",
        foto: "../img/skatistas/Sky.jpeg",
        conquistas: ["Medalha de Bronze Tóquio 2020", "Medalha de Bronze Paris 2024", "Campeã Mundial de Park 2023"],
        destaque: false
    },
    {
        nome: "Yuto Horigome",
        pais: "Japão",
        modalidade: "Street",
        bio: "O primeiro campeão olímpico de skate de sempre. Conhecido pela sua precisão extrema e manobras técnicas inacreditáveis em corrimões.",
        foto: "../img/skatistas/Yuto.jpeg",
        conquistas: ["Medalha de Ouro Tóquio 2020", "Medalha de Ouro Paris 2024", "Campeão Mundial SLS 2018"],
        destaque: false
    },
    {
        nome: "Kaiky Vinicius",
        pais: "Brasil",
        modalidade: "Street",
        bio: "O primeiro skatista da familia, ganhou seu primeiro skate com 3 anos de idade e cai como ninguém.",
        foto: "../img/skatistas/kaiky.jpeg",
        conquistas: ["1 Game of Skate", "Varios ematomas", "Muitos ralados"],
        destaque: true
    }
]

const manobras = [
    {
        nome: "Ollie",
        categoria: "Flatground",
        dificuldade: "Fácil",
        descricao: "O salto básico do skate. O skater bate com a cauda (tail) no chão e arrasta o pé dianteiro para cima para nivelar o skate no ar.",
        video: "https://www.youtube.com/embed/iC9WNYgcB7I"
    },
    {
        nome: "Boardslide",
        categoria: "Grind/Slide",
        dificuldade: "Fácil",
        descricao: "O skater salta para cima de um corrimão ou rail, deslizando com o centro da tábua perpendicularmente ao obstáculo.",
        video: "https://www.youtube.com/embed/-Bq1zemlGYk"
    },
    {
        nome: "50-50 Grind",
        categoria: "Grind/Slide",
        dificuldade: "Fácil",
        descricao: "O grind básico onde ambos os eixos (trucks) do skate deslizam diretamente sobre a quina do obstáculo.",
        video: "https://www.youtube.com/embed/OWF1xsSHU4w"
    },
    {
        nome: "Frontside 180",
        categoria: "Flatground",
        dificuldade: "Fácil",
        descricao: "O skater e o skate saltam juntos e rodam 180 graus no ar, virando o corpo de frente para a direção de movimento.",
        video: "https://www.youtube.com/embed/3a0GrvyhujY"
    },
    {
        nome: "Kickflip",
        categoria: "Flip",
        dificuldade: "Média",
        descricao: "Inventado por Rodney Mullen. Um salto onde o skater chuta a borda do skate com o pé dianteiro para fazê-lo rodar 360 graus em torno do seu eixo longitudinal.",
        video: "https://www.youtube.com/embed/1oLxtXUN-oc"
    },
    {
        nome: "Heelflip",
        categoria: "Flip",
        dificuldade: "Média",
        descricao: "Semelhante ao kickflip, mas a rotação é iniciada com o calcanhar do pé dianteiro, rodando na direção oposta.",
        video: "https://www.youtube.com/embed/qLLYOQyLJpQ"
    },

    {
        nome: "Indy Grab",
        categoria: "Grab",
        dificuldade: "Média",
        descricao: "Manobra aérea clássica onde o skater agarra a tábua no centro com a mão traseira enquanto está no ar.",
        video: "https://www.youtube.com/embed/hv8Lhxfub4o"
    },
    {
        nome: "Nosegrind",
        categoria: "Grind/Slide",
        dificuldade: "Média",
        descricao: "O skater desliza na quina do obstáculo apoiando apenas o truck dianteiro, mantendo o truck de trás no ar.",
        video: "https://www.youtube.com/embed/Cu9hClbU-Ek"
    },
    {
        nome: "Melon Grab",
        categoria: "Grab",
        dificuldade: "Média",
        descricao: "O skater agarra a borda traseira da tábua com a mão dianteira pelas costas das pernas enquanto está no ar.",
        video: "https://www.youtube.com/embed/dGUkxLMTVc0"
    },
    {
        nome: "360 Flip (Tre Flip)",
        categoria: "Flip",
        dificuldade: "Difícil",
        descricao: "Uma combinação clássica de um 360 Shuvit com um Kickflip. Uma das manobras mais bonitas e populares do skate de rua.",
        video: "https://www.youtube.com/embed/yMs5sSWIa9c"
    },
    {
        nome: "Kickflip Indy",
        categoria: "Grab",
        dificuldade: "Difícil",
        descricao: "Realização de um Kickflip no ar seguido imediatamente por um Indy grab antes de aterrar na rampa.",
        video: "https://www.youtube.com/embed/FpAfIjU8sD4"
    },
    {
        nome: "Caballerial",
        categoria: "Flatground",
        dificuldade: "Difícil",
        descricao: "Um Fakie 360 Ollie (salto completo de 360 graus a andar para trás), inventado por Steve Caballero.",
        video: "https://www.youtube.com/embed/DtTIkajDS-E"
    }
];

const skateparks = [
    {
        nome: "Parque da Juventude",
        cidade: "São Paulo, Brasil",
        dificuldade: "Profissional",
        imagem: "../img/skatepark/Parque-da-Juventude_skatepark.webp",
        tipo: "Outdoor",
        obstaculos: ["Bowl de Transição Rápida", "Corrimões de Descida", "Hubbas", "Ledges Curvas", "Funbox"],
        destaque: true
    },
    {
        nome: "Venice Skatepark",
        cidade: "Venice Beach, USA",
        dificuldade: "Intermédio",
        imagem: "../img/skatepark/venice_skatepark.jpg",
        tipo: "Outdoor",
        obstaculos: ["Snakerun", "Bowls Profundos", "Ledges", "Quarters", "Escadarias com Corrimão"],
        destaque: true
    },
    {
        nome: "Monsanto Skatepark",
        cidade: "Lisboa, Portugal",
        dificuldade: "Avançado",
        imagem: "../img/skatepark/monsanto_skatepark.webp",
        tipo: "Outdoor",
        obstaculos: ["Bowl Aberto", "Curbes", "Mini-rampa", "Flatbar", "Quarter-pipes"],
        destaque: false
    },
    {
        nome: "Skatepark de Faro",
        cidade: "Faro, Portugal",
        dificuldade: "Intermédio",
        imagem: "../img/skatepark/faro_skatepark.webp",
        tipo: "Outdoor",
        obstaculos: ["Pirâmide central", "Manual pad", "Ledges", "Carris redondos", "Quarter pipe largo"],
        destaque: false
    },
    {
        nome: "Parque das Nações Skatepark",
        cidade: "Lisboa, Portugal",
        dificuldade: "Iniciante",
        imagem: "../img/skatepark/parque-das-nacoes_skatepark.jpg",
        obstaculos: ["Ledges baixos", "Flatbars inclinadas", "Bancos de betão", "Quarters pequenos", "Mini-pyramid"],
        tipo: "Outdoor",
        destaque: false
    },
    {
        nome: "Chelas Skatepark (Decathlon)",
        cidade: "Lisboa, Portugal",
        dificuldade: "Avançado",
        imagem: "../img/skatepark/Chelas_skatepark.webp",
        tipo: "Outdoor",
        obstaculos: ["Super Bowl", "Euro-gap", "A-Frame", "Hubba comprido", "Speed bumps"],
        destaque: false
    },
    {
        nome: "Braga Skatepark",
        cidade: "Braga, Portugal",
        dificuldade: "Intermédio",
        imagem: "../img/skatepark/braga_skatepark.jpg",
        tipo: "Outdoor",
        obstaculos: ["Cradle Bowl", "Spine", "Bumps", "Ledges laterais", "Handrail em escadas"],
        destaque: false
    },
    {
        nome: "Tomar Skatepark",
        cidade: "Tomar, Portugal",
        dificuldade: "Intermédio",
        imagem: "../img/skatepark/tomar_skatepark.jpeg",
        tipo: "Outdoor",
        obstaculos: ["Quarterpipe", "Funbox", "Manualpad", "Flatrail", "Ledge"],
        destaque: false
    },
    {
        nome: "Skatepark de Loulé",
        cidade: "Loulé, Portugal",
        dificuldade: "Intermédio",
        imagem: "../img/skatepark/loule_skatepark.webp",
        tipo: "Outdoor",
        obstaculos: ["Half-pipe", "Fly-box", "Spine", "Curbes inclinados", "Mesa de piquenique de metal"],
        destaque: false
    },
    {
        nome: "Tampa Skatepark (SPoT)",
        cidade: "Tampa, USA",
        dificuldade: "Profissional",
        imagem: "../img/skatepark/tampa_skatepark.jpg",
        tipo: "Indoor / Outdoor",
        obstaculos: ["Courtyard Street Course", "Vert Ramp", "Pro Bowl", "Wallrides", "Double Sets com Corrimão"],
        destaque: true
    }
];