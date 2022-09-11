export const CITIES = {
    BRUXELLES: 'Bruxelles',
    NANTES: 'Nantes',
    PARIS: "Paris",
    TOULOUSE: 'Toulouse',
};

export const DAYS = {
    VENDREDI: 'Vendredi 14 octobre',
    SAMEDI: 'Samedi 15 octobre',
    DIMANCHE: 'Dimanche 15 octobre',
};

export const films = [
    {
        edition: 2022,
        title: "En guerre",
        author: "Stéphane Brizé",
        theme : "Transition écologique, atout ou péril pour l'emploi ?",
        image: { summary: "en-guerre.jpg", programmation: "en-guerre.jpeg"},
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/en-guerre',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.SAMEDI, 
                moment: "14h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
    {
        edition: 2022,
        title: "Goliath",
        author: "Frédéric Tellier",
        theme : "Modèles agricoles : la faim justifie-t-elle les moyens ?",
        image: { summary: "goliath.jpg", programmation: "goliath.jpg"},
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/goliath',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.DIMANCHE, 
                moment: "11h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
    {
        edition: 2022,
        title: "Le garçon qui dompta le vent",
        author: "Chiwetel Ejiofor",
        theme : "Inégalités climatiques : quelles solutions pour les pays les plus vulnérables ?",
        image: { summary: "le-garcon-qui-dompta-le-vent.jpg", programmation: "garcon-qui-dompta-le-vent.jpg" },
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/garcon-qui-dompta-le-vent',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.VENDREDI, 
                moment: "14h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
    {
        edition: 2022,
        title: "Les fils de l'homme",
        author: 'Alfonso Cuarón', 
        theme : "Réfugiés climatiques : quelles frontières dans un monde en crise ?",
        image: { summary: "les-fils-de-l-homme.jpg", programmation: "les-fils-de-lhomme.png"},
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/les-fils-de-l-homme',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.SAMEDI, 
                moment: "20h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
    {
        edition: 2022,
        title: "Sans filtre",
        author: "Ruben Östlund",
        theme : "Urgent : société sous influence cherche nouveaux modèles !",
        image: { summary: "sans-filtre.jpg", programmation: "sans-filtre.jpg"},
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/sans-filtre',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.DIMANCHE, 
                moment: "11h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
    {
        edition: 2022,
        title: "Soleil vert",
        author: "Richard Fleischer",
        theme : "Plus d'humains, moins d'humanité ?",
        image: { summary: 'soleil-vert.jpg', programmation: "soleil-vert.jpeg"}, 
        summary: 'summary', 
        debat: 'debat',
        redirect: '/films/soleil-vert',
        styles: { color: "text-dark"},
        cities: [
            { 
                city: CITIES.PARIS, 
                day: DAYS.VENDREDI, 
                moment: "20h",
                animator: "Animateur (todo)",
                participants: [
                    { name: 'name 1', description: "description 1"},
                    { name: 'name 2', description: "description 2"},
                ],
            }, 
        ]
    },
];