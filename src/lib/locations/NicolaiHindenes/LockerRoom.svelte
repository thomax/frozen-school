<script>
  import {goToLocation} from '../../dataStores/locationStore.js'
  export let location
</script>

<div>
  <h1>{location.title}</h1>
  <div>Locker Room</div>
  <button on:click={() => goToLocation('em')}>Exit to hallway</button>
</div>
