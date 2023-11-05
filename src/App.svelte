<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import {appState, setState} from './lib/dataStores/stateStore.js'
  import {goToLocation} from './lib/dataStores/locationStore'

  const startLocation = 'fc307'
  let currentState = $appState

  // Handle update of game state
  function handleStateChange(nextState) {
    if (nextState === 'game') {
      goToLocation(startLocation)
    }
    setState(nextState)
  }

  // Listen to changes on location
  appState.subscribe((newState) => {
    currentState = newState
  })
</script>

<main>
  <h1>App state: {currentState}</h1>
  {#if currentState === 'welcome'}
    <button on:click={() => handleStateChange('game')}>Play now!</button>
    <Welcome />
  {:else if currentState === 'game'}
    <button on:click={() => handleStateChange('welcome')}>Go to Welcome Page</button>
    <button on:click={() => handleStateChange('gameOver')}>Go to Game Over Page</button>
    <Game />
  {:else if currentState === 'gameOver'}
    <button on:click={() => handleStateChange('game')}>Play again!</button>
    <GameOver />
  {:else}
    <div>Alas, {currentState} is an unknown game state :/</div>
  {/if}
</main>

<style src="./app.css"></style>
