<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import DeveloperTools from './lib/DeveloperTools.svelte'
  import {gameState} from './lib/dataStores/stateStore.js'

  const urlParams = new URLSearchParams(window.location.search)
  const enableDevMode = urlParams.get('devmode') === 'it2ftw'

  let currentGameStatus

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
  {#if enableDevMode}
    <DeveloperTools />
  {/if}
</main>

<style src="./app.css"></style>
