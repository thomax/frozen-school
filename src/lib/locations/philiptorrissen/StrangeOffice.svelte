<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
</script>

<div>
  <h1>{location.title}</h1>
  <div>A creepy office</div>
  <button on:click={() => goToLocation('dh')}>Exit to hallway</button>
</div>
