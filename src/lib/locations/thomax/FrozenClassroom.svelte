<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
</script>

<div id="location">
  <h1>{location.title}</h1>
  <div>
    What a chilly place to start this journey. You see a door which appears to exit to a dark
    hallway.
  </div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>
