const ipsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const author = "Bayrischer Rundfunk";
const now = new Date().toLocaleString();

const feed = [
    {
        id: 0,
        title: "Polizei durchsucht Flüchtlingsunterkunft nach Messerattacke in Hamburg",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 1,
        title: "Regierung will Industrie für Diesel-Nachbesserungen zahlen lassen",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 2,
        title: "Trump will Russland-Sanktionen unterschreiben",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 3,
        title: "Nordkorea droht den USA mit Raketen-Angriff",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 4,
        title: "Hochwasser-Lage in Niedersachsen bleibt entspannt",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 5,
        title: "Besatzung der ISS wieder komplett",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 6,
        title: "In Bayern ist mehr Falschgeld im Umlauf",
        content: ipsum,
        author: author,
        lastModified: now
    },
    {
        id: 7,
        title: "Das Wetter: überwiegend sonnig, Höchstwerte bis 29 Grad",
        content: ipsum,
        author: author,
        lastModified: now
    }
]

// add view property: show news item with full details: default false
const view = feed.map(item => ({...item, showFull: false}));

export default view;