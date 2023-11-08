<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import {gameState, setGameState} from './lib/dataStores/stateStore.js'
  import {goToLocation} from './lib/dataStores/locationStore'

  const startLocation = 'fc307'
  let currentGameState = $gameState

  // Handle update of game state
  function handleStateChange(nextState) {
    if (nextState === 'gameRunning') {
      goToLocation(startLocation)
    }
    setGameState(nextState)
  }

  // Listen to changes on location
  gameState.subscribe((newState) => {
    currentGameState = newState
  })
</script>

<main>
  <h1>App state: {currentGameState}</h1>
  {#if currentGameState === 'welcome'}
    <button on:click={() => handleStateChange('gameRunning')}>Play now!</button>
    <Welcome />
  {:else if currentGameState === 'gameRunning'}
    <button on:click={() => handleStateChange('welcome')}>Go to Welcome Page</button>
    <button on:click={() => handleStateChange('gameOver')}>Go to Game Over Page</button>
    <Game />
  {:else if currentGameState === 'gameOver'}
    <button on:click={() => handleStateChange('gameRunning')}>Play again!</button>
    <GameOver />
  {:else}
    <div>Alas, {currentGameState} is an unknown game state :/</div>
  {/if}
</main>

<style src="./app.css"></style>
