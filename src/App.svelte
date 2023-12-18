<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import DeveloperTools from './lib/DeveloperTools.svelte'
  import {gameState} from './lib/dataStores/stateStore.js'

  let currentGameStatus

  function isDevModeEnabled() {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('devmode') === 'it2ftw'
  }

  // Listen for any changes to status
  gameState.subscribe((newGameState) => {
    currentGameStatus = newGameState.status
  })
</script>

<main>
  {#if currentGameStatus === 'welcome'}
    <Welcome />
  {:else if currentGameStatus === 'gameRunning'}
    <Game />
  {:else if currentGameStatus === 'gameOver'}
    <GameOver />
  {:else}
    <div>Alas, {currentGameStatus} is an unknown game state :/</div>
  {/if}
  {#if isDevModeEnabled()}
    <DeveloperTools />
  {/if}
</main>

<style src="./app.css"></style>
