<script>
  import {character, changeTemperature} from './dataStores/characterStore.js'
  import {currentLocation} from './dataStores/locationStore.js'
  import {gameState, changeFreezeRate} from './dataStores/stateStore.js'

  let localGameState
  let localCharacter
  let localLocation
  let localFreezeRate = 1

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  function handleChangeFreezeRate(multiplier) {
    localFreezeRate = localFreezeRate * multiplier
    changeFreezeRate(localFreezeRate)
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
  })

  // Listen for changes to game state
  gameState.subscribe((updatedGateState) => {
    localGameState = updatedGateState
    localFreezeRate = localGameState.freezeRate
  })

  // Listen for changes to location
  currentLocation.subscribe((updatedLocation) => {
    localLocation = updatedLocation
  })
</script>

<div id="devToolsComponent">
  <h3>Developer Tools</h3>
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => handleChangeFreezeRate(2)}>Make it colder</button>
  <button on:click={() => handleChangeFreezeRate(0.5)}>Make it warmer</button>
  <div>
    <h2>Game state</h2>
    <pre>
      {JSON.stringify(localGameState, null, 2)}
    </pre>
    <h2>Character</h2>
    <pre>
      {JSON.stringify(localCharacter, null, 2)}
    </pre>
    <h2>Location</h2>
    <pre>
      {JSON.stringify(localLocation, null, 2)}
    </pre>
  </div>
</div>

<style>
  #devToolsComponent {
    border: 2px solid blue;
  }
</style>
