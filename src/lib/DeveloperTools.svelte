<script>
  import {
    character,
    changeTemperature,
    changeHealth,
    addToInventory,
    removeFromInventory
  } from './dataStores/characterStore.js'
  import {currentLocation} from './dataStores/locationStore.js'
  import {gameState, changeFreezeRate, setGameStatus} from './dataStores/stateStore.js'

  let localGameState
  let localCharacter
  let localLocation
  let localFreezeRate = 1
  let item

  // Handle update of game state
  function handleStatusChange(newStatus) {
    setGameStatus(newStatus)
  }

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  function handleChangeHealth(amount) {
    changeHealth(amount)
  }

  function handleChangeFreezeRate(multiplier) {
    localFreezeRate = localFreezeRate * multiplier
    changeFreezeRate(localFreezeRate)
  }

  function handleAddItem() {
    addToInventory(item)
    item = null
  }

  function handleRemoveItem() {
    removeFromInventory(item)
    item = null
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
  {#if localGameState.status === 'welcome'}
    <button on:click={() => handleStatusChange('gameRunning')}>Play now!</button>
  {:else if localGameState.status === 'gameRunning'}
    <button on:click={() => handleStatusChange('welcome')}>Go to Welcome Page</button>
    <button on:click={() => handleStatusChange('gameOver')}>Go to Game Over Page</button>
  {:else if localGameState.status === 'gameOver'}
    <button on:click={() => handleStatusChange('gameRunning')}>Play again!</button>
  {:else}
    <div>{localGameState.status} is an unknown game state</div>
  {/if}

  <hr />

  <div>
    Body temperature: <button on:click={() => handleChangeTemperature(10)}>+ character temp</button>
    <button on:click={() => handleChangeTemperature(-10)}>- character temp</button>
  </div>
  <div>
    Health: <button on:click={() => handleChangeHealth(10)}>+ character health</button>
    <button on:click={() => handleChangeHealth(-10)}>- character health</button>
  </div>
  <div>
    Freeze rate in Location: <button on:click={() => handleChangeFreezeRate(2)}>+ freezeRate</button
    >
    <button on:click={() => handleChangeFreezeRate(0.5)}>- freezeRate</button>
  </div>
  <div>
    Inventory: <input bind:value={item} placeholder="Inventory item" />
    <button on:click={handleAddItem}>Add {item ? item : 'something'}</button>
    <button on:click={handleRemoveItem}>Remove {item ? item : 'something'}</button>
  </div>
  <div>
    <h2>Location: {localLocation}</h2>
    <h2>Game data</h2>
    <table>
      {#each Object.keys(localGameState) as key}
        <tr>
          <th>{key}</th>
          <td>{localGameState[key]}</td>
          <td>{typeof localGameState[key]}</td>
        </tr>
      {/each}
    </table>
    <h2>Character data</h2>
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
    font-family: Helvetica, Arial, system-ui, sans-serif;
    margin-top: 20px;
    padding-top: 10px;
    color: red;
    background-color: #eae0da;
    border-radius: 10px;
    opacity: 0.9;
    background-image: radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px);
    background-size: 10px 10px;
  }

  table {
    width: 600px;
    table-layout: fixed;
    margin-left: auto;
    margin-right: auto;
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
