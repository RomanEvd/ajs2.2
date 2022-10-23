const game = new Game();
game.start();

import client, { Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';