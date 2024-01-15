document.addEventListener("DOMContentLoaded", () => {
    const categorieen = [
        "Landen", "Steden", "Dieren", "Beroemdheden", "Eten en Drinken", 
        "Films", "Sporten", "Merken", "Muziekinstrumenten", "Boeken",
        "Kleuren", "Vogels", "Automodellen", "Gereedschap", "Talen",
        "Beroepen", "Lichaamsdelen", "Kledingstukken", "Fruitsoorten", "Groentesoorten",
        "Snoepsoorten", "Spelletjes", "Software", "Landmarks", "Historische figuren",
        "Mythologische wezens", "Chemische elementen", "Planten", "Bloemen",
        "Videogames", "TV Shows", "Acteurs", "Regisseurs",
        "Schrijvers", "Zangers",
        "Liedjes", "Albums",
        "Gebouwen", "Stedenbouwkundige projecten",
        "Eilanden", "Uitvindingen",
        "Wetenschappers", "Wiskundige termen", "Natuurkundige concepten", "Biologische termen", "Astronomische objecten",
        "Sterrenbeelden", "Festivals", "Feestdagen", "Tradities",
        "Heilige teksten",
        "Politieke partijen", "Wereldleiders", "Historische gebeurtenissen", "Apps", "Websites", "Social media platforms", "Computerspellen",
        "Mobiele games", "Kaartspellen", "Sportteams", "Vechtsporten",
        "Hobby's", "Activiteiten", "Schoolvakken", "Feesten", "Muziekgenres",
        "Gerechten", "Dranken",
        "Zoogdieren", "Werelddelen", "Provincies",
        "Gezegden",
        "Historische perioden", "Muziekinstrumenten", "Boekgenres", "Filmgenres",
        "Seriegenres", "Gamegenres", "Sportsoorten", "Olympische sporten", "Fitnessoefeningen",
        "Yogastijlen", "Psychologische termen", "Medische termen", "Ziekten",
        "Kruiden", "Specerijen", "Keukengerei",
        "Meubels", "Huishoudelijke apparaten", "Kantoormaterialen", "Schoolbenodigdheden", "Bouwmaterialen",
        "Auto-onderdelen", "Fietsmerken", "Motormerken",
        "Kleuren", "Vogels", "Automodellen", "Gereedschap", "Talen",
        "Beroepen", "Lichaamsdelen", "Kledingstukken", "Fruitsoorten", "Groentesoorten",
        "Snoepsoorten", "Spelletjes", "Software", "Landmarks", "Historische figuren",
        "Mythologische wezens", "Chemische elementen", "Weerfenomenen", "Planten", "Bloemen",
        "Rivieren", "Bergen", "Oceanen", "Stranden", "Parken",
        "Videogames", "TV Shows", "Acteurs", "Actrices", "Regisseurs",
        "Schrijvers", "Dichters", "Componisten", "Zangers", "Zangeressen",
        "Muziekbands", "Liedjes", "Albums", "Instrumentale nummers", "Schilderijen",
        "Beeldhouwwerken", "Architecten", "Gebouwen", "Stedenbouwkundige projecten", "Bruggen",
        "wiet", "coffeeshop"];
        
    let gebruikteCategorieen = new Set();
    let verbodenLetters = ['Q', 'C', 'Y', 'W']; // Y is al twee keer genoemd
    let eersteKeer = true;

    function genereerWillekeurigeLetter() {
        const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(letter => !verbodenLetters.includes(letter));
        return alfabet[Math.floor(Math.random() * alfabet.length)];
    }
    

    function toonCategorie() {
        if (eersteKeer) {
            let startLetter = genereerWillekeurigeLetter();
            document.getElementById("categorie").textContent = `De startletter is: ${startLetter}`;
            eersteKeer = false;
        } else {
            if (gebruikteCategorieen.size >= categorieen.length) {
                gebruikteCategorieen.clear();
            }

            let nieuweCategorieen = categorieen.filter(categorie => !gebruikteCategorieen.has(categorie));
            let categorie = nieuweCategorieen[Math.floor(Math.random() * nieuweCategorieen.length)];
            gebruikteCategorieen.add(categorie);

            document.getElementById("categorie").textContent = `De categorie is: ${categorie}`;
        }
    }

    document.getElementById("nieuweCategorie").addEventListener("click", toonCategorie);
    document.getElementById("stopSpel").addEventListener("click", () => {
        document.getElementById("categorie").textContent = "Bedankt voor het spelen!";
    });
});
