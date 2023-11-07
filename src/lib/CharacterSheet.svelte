<script>
  import {character, updateCharacter} from './dataStores/characterStore.js'
  let localCharacter

  function handleChangeTemperature(amount) {
    updateCharacter({temperature: localCharacter.temperature + amount})
  }

  // Listen for changes to character
  character.subscribe((update) => {
    console.log('update char', JSON.stringify(update, null, 2))
    localCharacter = update
  })
</script>

<div id="characterComponent">
  <h3>Character sheet</h3>
  <button on:click={() => handleChangeTemperature(1)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <pre>{JSON.stringify(localCharacter, null, 2)}</pre>
</div>
