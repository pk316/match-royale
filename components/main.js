$(document).ready(init);
var game = null;

function init() {
    game = new MemoryGame();
    game.initGame();
}