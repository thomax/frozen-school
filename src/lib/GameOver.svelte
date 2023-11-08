<script>
  import {character} from './dataStores/characterStore.js'
  import {getGameDuration} from './dataStores/stateStore.js'
</script>

<div id="gameOverComponent" class="uiBox">
  <h1>Game over!</h1>
  <div>You died with temperature {$character.temperature} and health {$character.health} 🥶</div>
  <div>You lasted {getGameDuration()} seconds. Not too shabby.</div>
</div>
