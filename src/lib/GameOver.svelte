<script>
  import {character} from './dataStores/characterStore.js'
  import {onMount} from 'svelte'
  import {getGameDuration, setGameStatus} from './dataStores/stateStore.js'
  import skull from '../assets/teodororjansen/skull.gif'
  let localCharacter = {}
  let mainElement

  // Handle update of game state
  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
  })

  onMount(() => {
        mainElement.style.background = `url('${skull}')  no-repeat center center`
        mainElement.style.backgroundSize = 'cover'
    }) 
</script>

<div id="gameOverComponent">
  <div class = "background" bind:this={mainElement}>
    <h1>Game over!</h1>
    <div>
      You died with temperature {Math.floor(localCharacter.temperature)} and health {localCharacter.health}
      🥶
    </div>
    <div>You lasted {getGameDuration()} seconds. Not too shabby.</div>
    
    <button on:click={() => handleStatusChange('gameRunning')}>Play again!</button>
  </div>
</div>

<style>
  .background {
    height: 90vh;
    width: 40vw;
    margin: auto;
    
  }
  button {
    position: absolute; top: 80%; left: 46.5%;
  }
</style>