<script>
  import {character, changeTemperature, changeFreezeRate} from './dataStores/characterStore.js'
  import {setGameStatus} from './dataStores/stateStore.js'
  import flameIcon from '../assets/NicolaiHindenes/flameIcon.png'
  import snowflakeIcon from '../assets/NicolaiHindenes/snowflakeIcon.png'
  import frozenEffect1 from '../assets/NicolaiHindenes/frozenEffect1.png'

  let localCharacter
  let icon = flameIcon
  let frozenEffect = frozenEffect1

  function handleChangeTemperature(amount) {
    changeTemperature(amount)
  }

  //function localCharacter.temperature to % 

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
    if (localCharacter.temperature > 50){
      icon = flameIcon
    }
    if (localCharacter.temperature < 50){
      icon = snowflakeIcon
    }
  })

  

</script>

<div id="characterComponent">
  <h3>Character sheet</h3>
<<<<<<< Updated upstream
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => changeFreezeRate(2)}>Make it colder</button>
  <button on:click={() => changeFreezeRate(0.5)}>Make it warmer</button>
  <div class="outer">
    <div class="inner" style="background-color: rgb({localCharacter.temperature * 2.55}, 0, {255 - localCharacter.temperature * 2.55});">
      <img src="{icon}" alt="icon" width="100px">
    </div>
  </div> 
=======
  <button on:click={() => handleChangeTemperature(-1)}>decrease</button>
  <button on:click={() => handleChangeTemperature(15)}>increase</button>
  <div class="outlineBox">
    <div class="bar" style="width: {localCharacter.temperature}%"></div>
  </div>
>>>>>>> Stashed changes
</div>
