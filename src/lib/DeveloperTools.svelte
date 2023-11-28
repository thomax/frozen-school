<script>
  import {character, changeTemperature, changeFreezeRate} from './dataStores/characterStore.js'
  import {currentLocation} from './dataStores/locationStore.js'
  import {gameState} from './dataStores/stateStore.js'

  let localGameState
  let localCharacter
  let localLocation

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  function handleChangeFreezeRate(amount) {
    changeFreezeRate(amount)
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
  })

  // Listen for changes to character
  gameState.subscribe((updatedGateState) => {
    localGameState = updatedGateState
  })

  // Listen for changes to character
  currentLocation.subscribe((updatedLocation) => {
    localLocation = updatedLocation
  })
</script>

<div id="devToolsComponent">
  <h3>Developer Tools</h3>
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => changeFreezeRate(2)}>Make it colder</button>
  <button on:click={() => changeFreezeRate(0.5)}>Make it warmer</button>
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
    border: 1px solid blue;
  }
</style>
