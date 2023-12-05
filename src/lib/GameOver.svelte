<script>
  import {character} from './dataStores/characterStore.js'
  import {getGameDuration, setGameStatus} from './dataStores/stateStore.js'

  // Handle update of game state
  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }
</script>

<div id="gameOverComponent" class="gameStateBox">
  <h1>Game over!</h1>
  <div>
    You died with temperature {Math.floor($character.temperature)} and health {$character.health} 🥶
  </div>
  <div>You lasted {getGameDuration()} seconds. Not too shabby.</div>
  <button on:click={() => handleStatusChange('gameRunning')}>Play again!</button>
</div>
