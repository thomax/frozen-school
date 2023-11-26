<script>
  import {character, changeTemperature, changeFreezeRate} from './dataStores/characterStore.js'
  import {setGameStatus} from './dataStores/stateStore.js'

  let localCharacter

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
    if (updatedCharacter.temperature <= 0) {
      // End game if death by freezing
      setGameStatus('gameOver')
    }
    if (updatedCharacter.health <= 0) {
      // End game if death by damage
      setGameStatus('gameOver')
    }
  })
</script>

<div id="characterComponent">
  <h3>Character sheet</h3>
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => changeFreezeRate(2)}>Make it colder</button>
  <button on:click={() => changeFreezeRate(0.5)}>Make it warmer</button>
  <div class="outer">
    <div
      class="inner"
      style="width: {localCharacter.temperature}%; background-color: rgb({localCharacter.temperature *
        2.55}, 0, {255 - localCharacter.temperature * 2.55});"
    />
  </div>
</div>
