<script>
  import {character} from './dataStores/characterStore.js'
  import {gameState} from './dataStores/stateStore.js'
  import ValueIndicator from './ValueIndicator.svelte'
  import fr1 from '../assets/thomax/freezeRate01.png'
  import fr2 from '../assets/thomax/freezeRate02.png'
  import fr3 from '../assets/thomax/freezeRate03.png'
  import fr4 from '../assets/thomax/freezeRate04.png'
  import fr5 from '../assets/thomax/freezeRate05.png'
  import fr6 from '../assets/thomax/freezeRate06.png'
  import fr7 from '../assets/thomax/freezeRate07.png'
  import fr8 from '../assets/thomax/freezeRate08.png'
  import fr9 from '../assets/thomax/freezeRate09.png'

  let localCharacter
  let freezeRateIconUrl = fr3

  function getFreezeRateIcon(freezeRate) {
    if (freezeRate < 0.25) return fr1
    if (freezeRate < 0.5) return fr2
    if (freezeRate < 1) return fr3
    if (freezeRate < 2) return fr4
    if (freezeRate < 4) return fr5
    if (freezeRate < 8) return fr6
    if (freezeRate < 16) return fr7
    if (freezeRate < 31) return fr8
    return fr9
  }

  // Listen for changes to character
  character.subscribe((updatedCharacter) => {
    localCharacter = updatedCharacter
  })

  gameState.subscribe((updatedGameState) => {
    freezeRateIconUrl = getFreezeRateIcon(updatedGameState.freezeRate)
  })
</script>

<div id="characterComponent">
  <ValueIndicator
    value={localCharacter.temperature}
    options={{color: '#A0C3D2', label: 'Body temperature'}}
  />
  <ValueIndicator value={localCharacter.health} options={{color: '#EAC7C7', label: 'Health'}} />
  <div class="inventoryContainer characterSheetLabel">
    Inventory {localCharacter.inventory.join(', ')}
  </div>
  <div class="freezeRateContainer">
    <img class="freezeRateImage" src={freezeRateIconUrl} alt="icon" width="100px" />
    <div class="freezeRateImageCaption"></div>
  </div>
</div>

<style>
  .inventoryContainer {
    background-color: white;
    width: 100%;
  }
  .freezeRateContainer {
    position: absolute;
    margin-top: 20px;
    left: 3%;
    z-index: 500;
  }
  .freezeRateImage {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  .freezeRateImageCaption {
    color: white;
    margin-top: -30px;
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>
