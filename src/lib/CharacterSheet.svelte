<script>
  import {character} from './dataStores/characterStore.js'
  import {setGameStatus} from './dataStores/stateStore.js'
  import flameIcon from '../assets/NicolaiHindenes/flameIcon.png'
  import snowflakeIcon from '../assets/NicolaiHindenes/snowflakeIcon.png'
  import frozenEffect1 from '../assets/NicolaiHindenes/frozenEffect1.png'

  let localCharacter
  let icon = flameIcon
  let frozenEffect = frozenEffect1

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
    if (localCharacter.temperature > 50) {
      icon = flameIcon
    }
    if (localCharacter.temperature < 50) {
      icon = snowflakeIcon
    }
  })
</script>

<div id="characterComponent">
  <h3>Character sheet</h3>

  <div class="outer">
    <div
      class="inner"
      style="background-color: rgb({localCharacter.temperature * 2.55}, 0, {255 -
        localCharacter.temperature * 2.55});"
    >
      <img src={icon} alt="icon" width="100px" />
    </div>
  </div>
</div>
