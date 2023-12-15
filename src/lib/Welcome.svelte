<script>
  import {setGameStatus} from './dataStores/stateStore.js'

  // Handle update of game state
  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }
</script>

<div id="welcome-component">
  <h1>Welcome!</h1>
  <button on:click={() => handleStatusChange('gameRunning')}>Play the game!</button>
</div>
