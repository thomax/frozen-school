<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import DeveloperTools from './lib/DeveloperTools.svelte'
  import {gameState, setGameStatus} from './lib/dataStores/stateStore.js'
  import {goToLocation} from './lib/dataStores/locationStore'

  const startLocation = 'fc307'
  let currentGameStatus = $gameState.status

  // Handle update of game state
  function handleStatusChange(nextStatus) {
    if (nextStatus === 'gameRunning') {
      goToLocation(startLocation)
    }
    setGameStatus(nextStatus)
  }

  // Listen to changes on location
  gameState.subscribe((newGameState) => {
    currentGameStatus = newGameState.status
  })
</script>

<main>
  {#if currentGameStatus === 'welcome'}
    <button on:click={() => handleStatusChange('gameRunning')}>Play now!</button>
    <Welcome />
  {:else if currentGameStatus === 'gameRunning'}
    <button on:click={() => handleStatusChange('welcome')}>Go to Welcome Page</button>
    <button on:click={() => handleStatusChange('gameOver')}>Go to Game Over Page</button>
    <Game />
  {:else if currentGameStatus === 'gameOver'}
    <button on:click={() => handleStatusChange('gameRunning')}>Play again!</button>
    <GameOver />
  {:else}
    <div>Alas, {currentGameStatus} is an unknown game state :/</div>
  {/if}
  <DeveloperTools />
</main>

<style src="./app.css"></style>
