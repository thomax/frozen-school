<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
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
  <h1>App state: {currentGameStatus}</h1>
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

<div><button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => changeFreezeRate(2)}>Make it colder</button>
  <button on:click={() => changeFreezeRate(0.5)}>Make it warmer</button></div>
</main>

<style src="./app.css"></style>
