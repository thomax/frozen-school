<script>
  import Welcome from './lib/Welcome.svelte'
  import Game from './lib/Game.svelte'
  import GameOver from './lib/GameOver.svelte'
  import {appMode} from './lib/dataStore.js'

  function handleModeChange(newMode) {
    $appMode = newMode
  }
</script>

<main>
  <h1>App</h1>

  {#if $appMode === 'gameOver'}
    <button on:click={() => handleModeChange('game')}> Play again! </button>
    <div class="uiBox"><GameOver /></div>
  {:else if $appMode === 'game'}
    <button on:click={() => handleModeChange('welcome')}>Go to welcome</button>
    <button on:click={() => handleModeChange('gameOver')}>Game Over</button>
    <div class="uiBox"><Game /></div>
  {:else}
    <button on:click={() => handleModeChange('game')}>Play!</button>
    <div class="uiBox"><Welcome /></div>
  {/if}
</main>

<style src="./app.css"></style>
