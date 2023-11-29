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
  <div>
    <button on:click={() => handleChangeTemperature(15)}>+ character temp</button>
    <button on:click={() => handleChangeTemperature(-1)}>- character temp</button>
  </div>
  <div>
    <button on:click={() => handleChangeFreezeRate(2)}>+ freezeRate</button>
    <button on:click={() => handleChangeFreezeRate(0.5)}>- freezeRate</button>
  </div>
  <div>
    <h2>Location: {localLocation}</h2>
    <h2>Game state</h2>
    <table>
      {#each Object.keys(localGameState) as key}
        <tr>
          <th>{key}</th>
          <td>{localGameState[key]}</td>
          <td>{typeof localGameState[key]}</td>
        </tr>
      {/each}
    </table>
    <h2>Character</h2>
    <table>
      {#each Object.keys(localCharacter || {}) as key}
        <tr>
          <th>{key}</th>
          <td>{localCharacter[key]}</td>
          <td>{typeof localCharacter[key]}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>

<style>
  #devToolsComponent {
    border: 2px solid blue;
  }

  table {
    width: 60%;
    table-layout: fixed;
    margin: auto;
  }
  tr {
    margin: 0;
    padding: 0;
  }
  th {
    margin: 0;
    padding: 0px 15px 0px 5px;
    text-align: left;
    border-bottom: solid 2px darkolivegreen;
  }
  td {
    margin: 0;
    padding: 0px 15px 0px 5px;
    text-align: left;
    vertical-align: top;
    font-size: 1rem;
    border-bottom: solid 2px darkolivegreen;
  }
</style>
