<script>
  import {character, updateCharacter} from './dataStores/characterStore.js'
  import {setGameStatus} from './dataStores/stateStore.js'
  let localCharacter

  function handleChangeTemperature(amount) {
    updateCharacter({temperature: localCharacter.temperature + amount})
  }

  // Listen for changes to character
  character.subscribe((update) => {
    localCharacter = update
    if (localCharacter.temperature < 1) {
      setGameStatus('gameOver')
    }
  })
</script>



<div id="characterComponent">
  <h3>Character sheet</h3>
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <div class="outer">
    <div class="inner" style="width: {localCharacter.temperature}%; background-color: rgb({localCharacter.temperature * 2.55}, 0, {255 - localCharacter.temperature * 2.55});"></div>
  </div> 
</div>


