/**
 * Search Functionality
 * Filters game cards based on user input
 */
function searchGames() {
    // Get input value and convert to lowercase
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all game card elements
    let cards = document.getElementsByClassName('game-card');

    for (let i = 0; i < cards.length; i++) {
        // Get the title inside the current card
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        // Show card if title matches, otherwise hide it
        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

/**
 * Launch Game Function
 * Simulates starting a game
 */
function launchGame(name) {
    alert("Initializing Connection: Loading " + name + "...");
    console.log("System: Starting game engine for " + name);
}
