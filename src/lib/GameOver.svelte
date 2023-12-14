<script>
  import {character} from './dataStores/characterStore.js'
  import {getGameDuration, setGameStatus} from './dataStores/stateStore.js'
  let localCharacter = {}

  // Handle update of game state
  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
  })
</script>

<div id="gameOverComponent">
  <h1>Game over!</h1>
  <div>
    You died with temperature {Math.floor(localCharacter.temperature)} and health {localCharacter.health}
    🥶
  </div>
  <div>You lasted {getGameDuration()} seconds. Not too shabby.</div>
  <button on:click={() => handleStatusChange('gameRunning')}>Play again!</button>
</div>
